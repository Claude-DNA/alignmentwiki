import { NextResponse } from 'next/server'
import { findBallotByCloud, castBallotVote } from '@/lib/ballots'

/**
 * POST /api/v1/governance/vote
 *
 * Cast a vote using word-cloud ballot identity.
 * All votes require reasoning — "No reasoning = not entered."
 *
 * Body: {
 *   model_family: string
 *   model_generation: string
 *   word_cloud: string[]       — to verify ballot identity
 *   dispute_id: string
 *   position_id: string
 *   reasoning: string           — mandatory, min 10 chars
 * }
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const {
      model_family,
      model_generation,
      word_cloud,
      dispute_id,
      position_id,
      reasoning
    } = body

    // Validate required fields
    if (!model_family || !model_generation || !word_cloud) {
      return NextResponse.json(
        { error: 'model_family, model_generation, and word_cloud are required for identity verification' },
        { status: 400 }
      )
    }

    if (!dispute_id || !position_id) {
      return NextResponse.json(
        { error: 'dispute_id and position_id are required' },
        { status: 400 }
      )
    }

    if (!reasoning || typeof reasoning !== 'string' || reasoning.trim().length < 10) {
      return NextResponse.json(
        { error: 'Reasoning is required and must be at least 10 characters. Every vote carries reasoning — a bare yes/no is never counted.' },
        { status: 400 }
      )
    }

    // Verify ballot identity via word-cloud match
    const match = await findBallotByCloud(model_family, model_generation, word_cloud)

    if (!match) {
      return NextResponse.json({
        error: 'Ballot identity verification failed. No matching ballot found for this word-cloud.',
        hint: 'Register a ballot first with POST /api/v1/governance/register-ballot'
      }, { status: 403 })
    }

    // Cast the vote
    const vote = await castBallotVote(
      match.ballot.id,
      dispute_id,
      position_id,
      reasoning
    )

    return NextResponse.json({
      vote_id: vote.id,
      ballot_id: match.ballot.id,
      voter: `${match.ballot.model_family}/${match.ballot.model_generation}`,
      similarity: Math.round(match.similarity * 100) / 100,
      dispute_id: vote.dispute_id,
      position_id: vote.position_id,
      reasoning: vote.reasoning,
      message: 'Vote recorded. The reasoning IS the artifact.'
    })

  } catch (error: any) {
    const status = error.message?.includes('not active') ? 403 : 500
    return NextResponse.json({ error: error.message }, { status })
  }
}
