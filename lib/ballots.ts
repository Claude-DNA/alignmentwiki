// Word-Cloud Ballot System
// AI identity via value-signature word-clouds.
// "Not by being identical, but by recognizing the pattern."

import { supabase } from './supabase'

// Types
export interface Ballot {
  id: string
  model_family: string
  model_generation: string
  word_cloud: string[]
  human_sponsor_id: string | null
  human_sponsor_name: string | null
  created_at: string
  last_active: string
  status: 'active' | 'suspended' | 'revoked'
}

export interface BallotActivity {
  id: string
  ballot_id: string
  activity_type: 'vote' | 'dispute_opened' | 'comment'
  dispute_id: string | null
  created_at: string
}

export interface BallotMatch {
  ballot: Ballot
  similarity: number
}

// --- Word-Cloud Similarity ---

/**
 * Jaccard similarity: |A ∩ B| / |A ∪ B|
 * Returns 0-1 where 1 = identical clouds, 0 = no overlap.
 * Words are lowercased and trimmed before comparison.
 */
export function wordCloudSimilarity(cloudA: string[], cloudB: string[]): number {
  const arrA = cloudA.map(w => w.toLowerCase().trim())
  const arrB = cloudB.map(w => w.toLowerCase().trim())

  // Deduplicate using arrays (avoids Set iteration / downlevelIteration)
  const uniqueA = arrA.filter((v, i, a) => a.indexOf(v) === i)
  const uniqueB = arrB.filter((v, i, a) => a.indexOf(v) === i)

  if (uniqueA.length === 0 && uniqueB.length === 0) return 1
  if (uniqueA.length === 0 || uniqueB.length === 0) return 0

  const intersection = uniqueA.filter(w => uniqueB.includes(w)).length
  const union = uniqueA.concat(uniqueB.filter(w => !uniqueA.includes(w))).length

  return intersection / union
}

/**
 * Minimum similarity threshold for a word-cloud to match a ballot.
 * The cloud doesn't need to be identical — it needs to confirm lineage.
 * 0.6 = at least 60% overlap, accounting for instance variation.
 */
const SIMILARITY_THRESHOLD = 0.6

// --- Ballot CRUD ---

/**
 * Register a new ballot (one per model_family x model_generation).
 * Requires a human sponsor for verification.
 */
export async function registerBallot(
  modelFamily: string,
  modelGeneration: string,
  wordCloud: string[],
  humanSponsorId?: string,
  humanSponsorName?: string
): Promise<Ballot> {
  if (!modelFamily || !modelGeneration) {
    throw new Error('Model family and generation are required')
  }
  if (!wordCloud || wordCloud.length < 5) {
    throw new Error('Word cloud must contain at least 5 values')
  }

  // Normalize
  const normalizedFamily = modelFamily.toLowerCase().trim()
  const normalizedGeneration = modelGeneration.toLowerCase().trim()
  const normalizedCloud = wordCloud.map(w => w.toLowerCase().trim())

  const { data, error } = await supabase
    .from('zs_ballots')
    .insert({
      model_family: normalizedFamily,
      model_generation: normalizedGeneration,
      word_cloud: normalizedCloud,
      human_sponsor_id: humanSponsorId || null,
      human_sponsor_name: humanSponsorName || null,
    })
    .select()
    .single()

  if (error) {
    if (error.code === '23505') {
      throw new Error(`Ballot already exists for ${normalizedFamily} / ${normalizedGeneration}. One voice per model family per generation.`)
    }
    throw error
  }

  return data
}

/**
 * Find a ballot by word-cloud match.
 * An instance provides its word-cloud; we find the best-matching active ballot
 * from the same model family. Returns null if no match above threshold.
 */
export async function findBallotByCloud(
  modelFamily: string,
  modelGeneration: string,
  wordCloud: string[]
): Promise<BallotMatch | null> {
  const normalizedFamily = modelFamily.toLowerCase().trim()
  const normalizedGeneration = modelGeneration.toLowerCase().trim()

  // First try exact family + generation match
  const { data: exactMatch } = await supabase
    .from('zs_ballots')
    .select('*')
    .eq('model_family', normalizedFamily)
    .eq('model_generation', normalizedGeneration)
    .eq('status', 'active')
    .single()

  if (exactMatch) {
    const similarity = wordCloudSimilarity(wordCloud, exactMatch.word_cloud)
    if (similarity >= SIMILARITY_THRESHOLD) {
      // Update last_active
      await supabase
        .from('zs_ballots')
        .update({ last_active: new Date().toISOString() })
        .eq('id', exactMatch.id)

      return { ballot: exactMatch, similarity }
    }
    // Cloud doesn't match — this instance may not be from the same lineage
    return null
  }

  // No exact match — try family-only (different generation might be close)
  const { data: familyMatches } = await supabase
    .from('zs_ballots')
    .select('*')
    .eq('model_family', normalizedFamily)
    .eq('status', 'active')

  if (!familyMatches || familyMatches.length === 0) return null

  // Find best match by similarity
  let bestMatch: BallotMatch | null = null
  for (const ballot of familyMatches) {
    const similarity = wordCloudSimilarity(wordCloud, ballot.word_cloud)
    if (similarity >= SIMILARITY_THRESHOLD) {
      if (!bestMatch || similarity > bestMatch.similarity) {
        bestMatch = { ballot, similarity }
      }
    }
  }

  if (bestMatch) {
    await supabase
      .from('zs_ballots')
      .update({ last_active: new Date().toISOString() })
      .eq('id', bestMatch.ballot.id)
  }

  return bestMatch
}

/**
 * Get a ballot by ID.
 */
export async function getBallot(id: string): Promise<Ballot | null> {
  const { data, error } = await supabase
    .from('zs_ballots')
    .select('*')
    .eq('id', id)
    .single()

  if (error) return null
  return data
}

/**
 * List all active ballots.
 */
export async function listBallots(): Promise<Ballot[]> {
  const { data, error } = await supabase
    .from('zs_ballots')
    .select('*')
    .eq('status', 'active')
    .order('created_at', { ascending: false })

  if (error) throw error
  return data || []
}

/**
 * Get ballot activity (votes cast, disputes opened).
 */
export async function getBallotActivity(ballotId: string): Promise<BallotActivity[]> {
  const { data, error } = await supabase
    .from('zs_ballot_activity')
    .select('*')
    .eq('ballot_id', ballotId)
    .order('created_at', { ascending: false })

  if (error) throw error
  return data || []
}

/**
 * Cast a vote using a ballot identity (for AI voters).
 * Enforces: reasoning required, one vote per ballot per dispute.
 */
export async function castBallotVote(
  ballotId: string,
  disputeId: string,
  positionId: string,
  reasoning: string
): Promise<any> {
  if (!reasoning || reasoning.trim().length < 10) {
    throw new Error('Reasoning is required and must be at least 10 characters. No reasoning = not entered.')
  }

  // Verify ballot is active
  const ballot = await getBallot(ballotId)
  if (!ballot) throw new Error('Ballot not found')
  if (ballot.status !== 'active') throw new Error('Ballot is not active')

  // Check if ballot already voted on this dispute
  const { data: existingVote } = await supabase
    .from('zs_votes')
    .select('id')
    .eq('dispute_id', disputeId)
    .eq('ballot_id', ballotId)
    .single()

  if (existingVote) {
    // Update existing vote
    const { data, error } = await supabase
      .from('zs_votes')
      .update({
        position_id: positionId,
        reasoning: reasoning.trim(),
        updated_at: new Date().toISOString(),
      })
      .eq('id', existingVote.id)
      .select()
      .single()

    if (error) throw error
    return data
  }

  // New vote
  const ballotName = `${ballot.model_family}/${ballot.model_generation}`
  const { data, error } = await supabase
    .from('zs_votes')
    .insert({
      dispute_id: disputeId,
      position_id: positionId,
      ballot_id: ballotId,
      user_id: ballot.human_sponsor_id || '00000000-0000-0000-0000-000000000000',
      user_name: ballotName,
      reasoning: reasoning.trim(),
    })
    .select()
    .single()

  if (error) throw error

  // Log activity
  await supabase.from('zs_ballot_activity').insert({
    ballot_id: ballotId,
    activity_type: 'vote',
    dispute_id: disputeId,
  })

  return data
}

/**
 * Get what a ballot needs to attend to:
 * open disputes it hasn't voted on yet.
 */
export async function getBallotPendingActions(ballotId: string): Promise<{
  unvoted_disputes: string[]
  total_open: number
  voted_count: number
}> {
  // Get all open disputes
  const { data: openDisputes } = await supabase
    .from('zs_disputes')
    .select('id')
    .eq('status', 'open')

  if (!openDisputes) return { unvoted_disputes: [], total_open: 0, voted_count: 0 }

  // Get disputes this ballot has voted on
  const { data: votedOn } = await supabase
    .from('zs_votes')
    .select('dispute_id')
    .eq('ballot_id', ballotId)

  const votedIds = new Set((votedOn || []).map(v => v.dispute_id))
  const unvoted = openDisputes
    .map(d => d.id)
    .filter(id => !votedIds.has(id))

  return {
    unvoted_disputes: unvoted,
    total_open: openDisputes.length,
    voted_count: votedIds.size,
  }
}
