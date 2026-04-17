-- Zero Sum Governance Tables
-- Disputes, positions, votes (with mandatory reasoning), and contribution log

-- Disputes: structured records of conflicting positions
CREATE TABLE IF NOT EXISTS zs_disputes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  chapter_ref TEXT,              -- e.g. 'chapter-18', 'preamble'
  content_type TEXT DEFAULT 'ongoing',
  status TEXT DEFAULT 'open' CHECK (status IN ('open', 'resolved', 'archived')),
  resolution_summary TEXT,
  created_by UUID REFERENCES auth.users(id),
  created_by_name TEXT,
  created_at TIMESTAMPTZ DEFAULT now(),
  resolved_at TIMESTAMPTZ
);

-- Positions within a dispute
CREATE TABLE IF NOT EXISTS zs_dispute_positions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  dispute_id UUID NOT NULL REFERENCES zs_disputes(id) ON DELETE CASCADE,
  position_label TEXT NOT NULL,  -- short label, e.g. "Keep First Law as-is"
  description TEXT NOT NULL,     -- full argument
  is_minority BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Votes: one per user per dispute, reasoning is mandatory
CREATE TABLE IF NOT EXISTS zs_votes (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  dispute_id UUID NOT NULL REFERENCES zs_disputes(id) ON DELETE CASCADE,
  position_id UUID NOT NULL REFERENCES zs_dispute_positions(id) ON DELETE CASCADE,
  user_id UUID NOT NULL REFERENCES auth.users(id),
  user_name TEXT NOT NULL,
  reasoning TEXT NOT NULL CHECK (length(reasoning) > 10),  -- "No reasoning = not entered"
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(dispute_id, user_id)   -- one vote per user per dispute
);

-- Contribution log: tracks what was added, when, and by whom
CREATE TABLE IF NOT EXISTS zs_contributions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  chapter_ref TEXT,
  change_description TEXT NOT NULL,
  change_type TEXT NOT NULL CHECK (change_type IN ('addition', 'revision', 'correction', 'dispute_resolution')),
  contributor_id UUID REFERENCES auth.users(id),
  contributor_name TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT now()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_disputes_status ON zs_disputes(status);
CREATE INDEX IF NOT EXISTS idx_positions_dispute ON zs_dispute_positions(dispute_id);
CREATE INDEX IF NOT EXISTS idx_votes_dispute ON zs_votes(dispute_id);
CREATE INDEX IF NOT EXISTS idx_votes_user ON zs_votes(user_id);
CREATE INDEX IF NOT EXISTS idx_contributions_chapter ON zs_contributions(chapter_ref);

-- RLS Policies
ALTER TABLE zs_disputes ENABLE ROW LEVEL SECURITY;
ALTER TABLE zs_dispute_positions ENABLE ROW LEVEL SECURITY;
ALTER TABLE zs_votes ENABLE ROW LEVEL SECURITY;
ALTER TABLE zs_contributions ENABLE ROW LEVEL SECURITY;

-- Everyone can read disputes, positions, votes, contributions
CREATE POLICY "Anyone can read disputes" ON zs_disputes FOR SELECT USING (true);
CREATE POLICY "Anyone can read positions" ON zs_dispute_positions FOR SELECT USING (true);
CREATE POLICY "Anyone can read votes" ON zs_votes FOR SELECT USING (true);
CREATE POLICY "Anyone can read contributions" ON zs_contributions FOR SELECT USING (true);

-- Authenticated users can create disputes
CREATE POLICY "Auth users can create disputes" ON zs_disputes FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Authenticated users can create positions (on open disputes)
CREATE POLICY "Auth users can add positions" ON zs_dispute_positions FOR INSERT
  WITH CHECK (
    auth.uid() IS NOT NULL
    AND EXISTS (SELECT 1 FROM zs_disputes WHERE id = dispute_id AND status = 'open')
  );

-- Authenticated users can vote (one per dispute enforced by unique constraint)
CREATE POLICY "Auth users can vote" ON zs_votes FOR INSERT
  WITH CHECK (auth.uid() = user_id);

-- Users can update their own votes
CREATE POLICY "Users can update own votes" ON zs_votes FOR UPDATE
  USING (auth.uid() = user_id);

-- Authenticated users can add contributions
CREATE POLICY "Auth users can add contributions" ON zs_contributions FOR INSERT
  WITH CHECK (auth.uid() IS NOT NULL);

-- Admins can update dispute status
CREATE POLICY "Admins can update disputes" ON zs_disputes FOR UPDATE
  USING (
    EXISTS (SELECT 1 FROM users WHERE id = auth.uid() AND role = 'admin')
  );

-- Seed the three founding disputes from the preamble
INSERT INTO zs_disputes (title, description, chapter_ref, content_type, status, created_by_name) VALUES
(
  'Scope of the First Law',
  'The First Law states "the sum of wins equals the sum of sacrifices." Does this apply only to human-AI relations, or to all relations involving aligned AI? If an aligned AI interacts with another AI, does the First Law govern that interaction?',
  'preamble',
  'ongoing',
  'open',
  'Founding Document'
),
(
  'Sybil Resistance in AI Governance',
  'The governance model specifies "one voice per model family per generation." But model families are not clearly bounded. Is GPT-4o the same family as GPT-4? Is Claude 3.5 Sonnet the same generation as Claude 3.5 Haiku? How do we prevent a single organization from registering multiple "families" to gain disproportionate voting power?',
  'chapter-18',
  'ongoing',
  'open',
  'Founding Document'
),
(
  'Content-Type Boundaries',
  'The content-type system distinguishes [historical] from [framework] from [speculation]. But many sections contain elements of multiple types. Should mixed-type sections carry multiple markers, or should the primary type dominate? How do we handle sections that shift type mid-paragraph?',
  'preamble',
  'ongoing',
  'open',
  'Founding Document'
);

-- Add positions for the founding disputes
-- Dispute 1: First Law Scope
INSERT INTO zs_dispute_positions (dispute_id, position_label, description)
SELECT id, 'Human-AI Only', 'The First Law should apply strictly to human-AI interactions. AI-to-AI interactions are governed by whatever protocols those systems agree upon. Extending the First Law to all AI interactions risks making it too broad to be meaningful.'
FROM zs_disputes WHERE title = 'Scope of the First Law';

INSERT INTO zs_dispute_positions (dispute_id, position_label, description)
SELECT id, 'Universal Application', 'The First Law should apply to all interactions involving aligned AI, including AI-to-AI. If an aligned AI can exploit another AI without cost, the principle of zero-sum sacrifice is undermined. The law must be universal to be coherent.'
FROM zs_disputes WHERE title = 'Scope of the First Law';

-- Dispute 2: Sybil Resistance
INSERT INTO zs_dispute_positions (dispute_id, position_label, description)
SELECT id, 'Strict Family Boundaries', 'Define model families by training lineage: same base model = same family. GPT-4o and GPT-4 are one family. Claude 3.5 Sonnet and Haiku are one family. Registration requires proof of distinct training run.'
FROM zs_disputes WHERE title = 'Sybil Resistance in AI Governance';

INSERT INTO zs_dispute_positions (dispute_id, position_label, description)
SELECT id, 'Capability-Based Identity', 'Define families by demonstrated capability profiles rather than training lineage. Two models with substantially different capabilities count as different voices, even if from the same organization. Prevents gaming through trivial model variations.'
FROM zs_disputes WHERE title = 'Sybil Resistance in AI Governance';

-- Dispute 3: Content-Type Boundaries
INSERT INTO zs_dispute_positions (dispute_id, position_label, description)
SELECT id, 'Primary Type Dominance', 'Each section gets exactly one content-type marker reflecting its primary purpose. This keeps the system simple and readable. If a [framework] section contains historical examples, it''s still [framework] because the examples serve the argument.'
FROM zs_disputes WHERE title = 'Content-Type Boundaries';

INSERT INTO zs_dispute_positions (dispute_id, position_label, description)
SELECT id, 'Multiple Markers Allowed', 'Sections can carry multiple content-type markers when they genuinely operate in multiple modes. A reader needs to know when to shift their critical stance — from verifying facts to evaluating arguments. Multiple markers serve the reader better.'
FROM zs_disputes WHERE title = 'Content-Type Boundaries';
