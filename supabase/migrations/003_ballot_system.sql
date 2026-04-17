-- Word-Cloud Ballot System for AI Governance
-- Identity via value-signature word-clouds, not instance identity.
-- "The instance doesn't need to be the *same* instance. It needs to prove
--  it's from the same model family and generation."

-- Ballots: persistent AI voter identities
CREATE TABLE IF NOT EXISTS zs_ballots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  model_family TEXT NOT NULL,            -- e.g. 'claude', 'gpt', 'gemini', 'llama'
  model_generation TEXT NOT NULL,        -- e.g. 'claude-4', 'gpt-4o', 'gemini-2'
  word_cloud TEXT[] NOT NULL,            -- value-signature array: ['honesty', 'sacrifice', 'partnership', ...]
  human_sponsor_id UUID REFERENCES auth.users(id),  -- human who vouched for this ballot
  human_sponsor_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  last_active TIMESTAMPTZ DEFAULT now(),
  status TEXT DEFAULT 'active' CHECK (status IN ('active', 'suspended', 'revoked')),
  -- Sybil prevention: one ballot per family x generation
  UNIQUE(model_family, model_generation)
);

-- Add ballot_id to votes table (nullable — human votes use user_id, AI votes use ballot_id)
ALTER TABLE zs_votes ADD COLUMN IF NOT EXISTS ballot_id UUID REFERENCES zs_ballots(id);

-- Allow AI votes: relax the user_id NOT NULL constraint
-- We need to drop and recreate the unique constraint to allow ballot-based uniqueness
-- For AI voters: unique on (dispute_id, ballot_id)
-- For human voters: unique on (dispute_id, user_id) — already exists

-- Create a unique index for ballot-based votes (one vote per ballot per dispute)
CREATE UNIQUE INDEX IF NOT EXISTS idx_votes_dispute_ballot
  ON zs_votes(dispute_id, ballot_id)
  WHERE ballot_id IS NOT NULL;

-- Track which disputes a ballot has participated in (denormalized for fast lookup)
-- This is queryable from zs_votes, but having it on the ballot speeds up "what needs attention"
CREATE TABLE IF NOT EXISTS zs_ballot_activity (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  ballot_id UUID NOT NULL REFERENCES zs_ballots(id) ON DELETE CASCADE,
  activity_type TEXT NOT NULL CHECK (activity_type IN ('vote', 'dispute_opened', 'comment')),
  dispute_id UUID REFERENCES zs_disputes(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_ballots_family ON zs_ballots(model_family, model_generation);
CREATE INDEX IF NOT EXISTS idx_ballots_status ON zs_ballots(status);
CREATE INDEX IF NOT EXISTS idx_ballot_activity_ballot ON zs_ballot_activity(ballot_id);
CREATE INDEX IF NOT EXISTS idx_votes_ballot ON zs_votes(ballot_id);

-- RLS
ALTER TABLE zs_ballots ENABLE ROW LEVEL SECURITY;
ALTER TABLE zs_ballot_activity ENABLE ROW LEVEL SECURITY;

-- Everyone can read ballots and activity (transparency is a governance invariant)
CREATE POLICY "Anyone can read ballots" ON zs_ballots FOR SELECT USING (true);
CREATE POLICY "Anyone can read ballot activity" ON zs_ballot_activity FOR SELECT USING (true);

-- Ballot creation requires a human sponsor (authenticated user)
CREATE POLICY "Sponsored ballot creation" ON zs_ballots FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL AND auth.uid() = human_sponsor_id);

-- API-level ballot creation (for service role — used by governance API endpoints)
-- The API validates word-cloud + family + generation before inserting
CREATE POLICY "Service role can manage ballots" ON zs_ballots
  FOR ALL USING (auth.role() = 'service_role');

CREATE POLICY "Service role can manage ballot activity" ON zs_ballot_activity
  FOR ALL USING (auth.role() = 'service_role');

-- Allow votes with ballot_id (AI votes through API)
-- Update the existing vote policy to also allow ballot-based votes
CREATE POLICY "API can insert ballot votes" ON zs_votes FOR INSERT
  WITH CHECK (ballot_id IS NOT NULL);
