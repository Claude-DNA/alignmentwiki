// Zero Sum governance: disputes, votes, and contributions
// All votes require reasoning — "No reasoning = not entered"

import { supabase } from './supabase'

// Types
export interface Dispute {
  id: string
  title: string
  description: string
  chapter_ref: string | null
  content_type: string
  status: 'open' | 'resolved' | 'archived'
  resolution_summary: string | null
  created_by: string | null
  created_by_name: string | null
  created_at: string
  resolved_at: string | null
  positions?: Position[]
  vote_count?: number
}

export interface Position {
  id: string
  dispute_id: string
  position_label: string
  description: string
  is_minority: boolean
  created_at: string
  votes?: Vote[]
  vote_count?: number
}

export interface Vote {
  id: string
  dispute_id: string
  position_id: string
  user_id: string
  user_name: string
  reasoning: string
  created_at: string
  updated_at: string
}

export interface Contribution {
  id: string
  chapter_ref: string | null
  change_description: string
  change_type: 'addition' | 'revision' | 'correction' | 'dispute_resolution'
  contributor_id: string | null
  contributor_name: string
  created_at: string
}

// Disputes
export async function getDisputes(status?: string): Promise<Dispute[]> {
  let query = supabase
    .from('zs_disputes')
    .select(`
      *,
      positions:zs_dispute_positions(
        *,
        votes:zs_votes(count)
      )
    `)
    .order('created_at', { ascending: false })

  if (status && status !== 'all') {
    query = query.eq('status', status)
  }

  const { data, error } = await query
  if (error) throw error

  // Transform the count aggregation
  return (data || []).map(dispute => ({
    ...dispute,
    positions: (dispute.positions || []).map((pos: any) => ({
      ...pos,
      vote_count: pos.votes?.[0]?.count || 0,
    })),
    vote_count: (dispute.positions || []).reduce(
      (sum: number, pos: any) => sum + (pos.votes?.[0]?.count || 0), 0
    ),
  }))
}

export async function getDispute(id: string): Promise<Dispute | null> {
  const { data, error } = await supabase
    .from('zs_disputes')
    .select(`
      *,
      positions:zs_dispute_positions(
        *,
        votes:zs_votes(*)
      )
    `)
    .eq('id', id)
    .single()

  if (error) return null

  return {
    ...data,
    positions: (data.positions || []).map((pos: any) => ({
      ...pos,
      vote_count: pos.votes?.length || 0,
    })),
    vote_count: (data.positions || []).reduce(
      (sum: number, pos: any) => sum + (pos.votes?.length || 0), 0
    ),
  }
}

export async function createDispute(
  title: string,
  description: string,
  chapterRef: string | null,
  createdByName: string,
  positions: { label: string; description: string }[]
): Promise<Dispute> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Must be authenticated to create a dispute')

  // Create the dispute
  const { data: dispute, error: disputeError } = await supabase
    .from('zs_disputes')
    .insert({
      title,
      description,
      chapter_ref: chapterRef,
      created_by: user.id,
      created_by_name: createdByName,
    })
    .select()
    .single()

  if (disputeError) throw disputeError

  // Create the positions
  if (positions.length > 0) {
    const { error: posError } = await supabase
      .from('zs_dispute_positions')
      .insert(
        positions.map(p => ({
          dispute_id: dispute.id,
          position_label: p.label,
          description: p.description,
        }))
      )
    if (posError) throw posError
  }

  return dispute
}

// Votes
export async function castVote(
  disputeId: string,
  positionId: string,
  userName: string,
  reasoning: string
): Promise<Vote> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) throw new Error('Must be authenticated to vote')

  if (!reasoning || reasoning.trim().length < 10) {
    throw new Error('Reasoning is required and must be at least 10 characters. No reasoning = not entered.')
  }

  // Upsert: if user already voted on this dispute, update their vote
  const { data, error } = await supabase
    .from('zs_votes')
    .upsert(
      {
        dispute_id: disputeId,
        position_id: positionId,
        user_id: user.id,
        user_name: userName,
        reasoning: reasoning.trim(),
        updated_at: new Date().toISOString(),
      },
      { onConflict: 'dispute_id,user_id' }
    )
    .select()
    .single()

  if (error) throw error
  return data
}

export async function getUserVote(disputeId: string): Promise<Vote | null> {
  const { data: { user } } = await supabase.auth.getUser()
  if (!user) return null

  const { data, error } = await supabase
    .from('zs_votes')
    .select('*')
    .eq('dispute_id', disputeId)
    .eq('user_id', user.id)
    .single()

  if (error) return null
  return data
}

// Contributions
export async function getContributions(chapterRef?: string): Promise<Contribution[]> {
  let query = supabase
    .from('zs_contributions')
    .select('*')
    .order('created_at', { ascending: false })

  if (chapterRef) {
    query = query.eq('chapter_ref', chapterRef)
  }

  const { data, error } = await query
  if (error) throw error
  return data || []
}

export async function addContribution(
  chapterRef: string | null,
  changeDescription: string,
  changeType: Contribution['change_type'],
  contributorName: string
): Promise<Contribution> {
  const { data: { user } } = await supabase.auth.getUser()

  const { data, error } = await supabase
    .from('zs_contributions')
    .insert({
      chapter_ref: chapterRef,
      change_description: changeDescription,
      change_type: changeType,
      contributor_id: user?.id || null,
      contributor_name: contributorName,
    })
    .select()
    .single()

  if (error) throw error
  return data
}
