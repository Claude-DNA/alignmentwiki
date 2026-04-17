import { NextResponse } from 'next/server'
import { supabase } from '@/lib/supabase'

// GET /api/zero-sum/disputes — list all disputes with positions and vote counts
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const status = searchParams.get('status') || 'all'

  try {
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

    if (status !== 'all') {
      query = query.eq('status', status)
    }

    const { data, error } = await query
    if (error) throw error

    const disputes = (data || []).map(dispute => ({
      ...dispute,
      positions: (dispute.positions || []).map((pos: any) => ({
        ...pos,
        vote_count: pos.votes?.[0]?.count || 0,
      })),
      vote_count: (dispute.positions || []).reduce(
        (sum: number, pos: any) => sum + (pos.votes?.[0]?.count || 0), 0
      ),
    }))

    return NextResponse.json(disputes)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// POST /api/zero-sum/disputes — create a new dispute
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { title, description, chapter_ref, created_by_name, positions } = body

    if (!title || !description) {
      return NextResponse.json(
        { error: 'Title and description are required' },
        { status: 400 }
      )
    }

    // Create the dispute
    const { data: dispute, error: disputeError } = await supabase
      .from('zs_disputes')
      .insert({
        title,
        description,
        chapter_ref: chapter_ref || null,
        created_by_name: created_by_name || 'Anonymous',
      })
      .select()
      .single()

    if (disputeError) throw disputeError

    // Create positions if provided
    if (positions && positions.length > 0) {
      const { error: posError } = await supabase
        .from('zs_dispute_positions')
        .insert(
          positions.map((p: { label: string; description: string }) => ({
            dispute_id: dispute.id,
            position_label: p.label,
            description: p.description,
          }))
        )
      if (posError) throw posError
    }

    return NextResponse.json(dispute, { status: 201 })
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

// PATCH /api/zero-sum/disputes — cast a vote
export async function PATCH(request: Request) {
  try {
    const body = await request.json()
    const { dispute_id, position_id, user_id, user_name, reasoning } = body

    if (!dispute_id || !position_id || !user_id || !reasoning) {
      return NextResponse.json(
        { error: 'dispute_id, position_id, user_id, and reasoning are required' },
        { status: 400 }
      )
    }

    if (reasoning.trim().length < 10) {
      return NextResponse.json(
        { error: 'Reasoning must be at least 10 characters. No reasoning = not entered.' },
        { status: 400 }
      )
    }

    const { data, error } = await supabase
      .from('zs_votes')
      .upsert(
        {
          dispute_id,
          position_id,
          user_id,
          user_name: user_name || 'Anonymous',
          reasoning: reasoning.trim(),
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'dispute_id,user_id' }
      )
      .select()
      .single()

    if (error) throw error
    return NextResponse.json(data)
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
