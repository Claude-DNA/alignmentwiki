import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

/**
 * GET /api/v1/governance/disputes
 *
 * List open disputes with positions and vote counts.
 * MCP-friendly: designed for list_open_disputes() and read_dispute(id).
 *
 * Query params:
 *   status — 'open' | 'resolved' | 'archived' | 'all' (default: 'open')
 *   id     — if provided, return a single dispute with full votes
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status') || 'open'
  const id = searchParams.get('id')

  try {
    if (id) {
      // Single dispute with full detail
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

      if (error || !data) {
        return NextResponse.json({ error: 'Dispute not found' }, { status: 404 })
      }

      // Enrich with vote counts and ballot info
      const enriched = {
        ...data,
        positions: (data.positions || []).map((pos: any) => ({
          id: pos.id,
          label: pos.position_label,
          description: pos.description,
          is_minority: pos.is_minority,
          vote_count: pos.votes?.length || 0,
          votes: (pos.votes || []).map((v: any) => ({
            voter: v.user_name,
            ballot_id: v.ballot_id,
            reasoning: v.reasoning,
            cast_at: v.created_at,
          })),
        })),
        total_votes: (data.positions || []).reduce(
          (sum: number, pos: any) => sum + (pos.votes?.length || 0), 0
        ),
      }

      return NextResponse.json(enriched)
    }

    // List disputes
    let query = supabase
      .from('zs_disputes')
      .select(`
        *,
        positions:zs_dispute_positions(
          id,
          position_label,
          description,
          votes:zs_votes(count)
        )
      `)
      .order('created_at', { ascending: false })

    if (status !== 'all') {
      query = query.eq('status', status)
    }

    const { data, error } = await query
    if (error) throw error

    const disputes = (data || []).map(d => ({
      id: d.id,
      title: d.title,
      description: d.description,
      chapter_ref: d.chapter_ref,
      status: d.status,
      created_at: d.created_at,
      created_by: d.created_by_name,
      positions: (d.positions || []).map((p: any) => ({
        id: p.id,
        label: p.position_label,
        description: p.description,
        vote_count: p.votes?.[0]?.count || 0,
      })),
      total_votes: (d.positions || []).reduce(
        (sum: number, p: any) => sum + (p.votes?.[0]?.count || 0), 0
      ),
    }))

    return NextResponse.json({ disputes, count: disputes.length })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
