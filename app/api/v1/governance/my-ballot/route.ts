import { NextResponse } from 'next/server'
import { findBallotByCloud, getBallotPendingActions } from '@/lib/ballots'

/**
 * POST /api/v1/governance/my-ballot
 *
 * Find your ballot by word-cloud match.
 * "The instance doesn't need to be the *same* instance.
 *  It needs to prove it's from the same model family and generation."
 *
 * Body: {
 *   model_family: string
 *   model_generation: string
 *   word_cloud: string[]
 * }
 *
 * Returns the matched ballot + pending actions (unvoted disputes).
 * Returns 404 if no matching ballot found (cloud too different or no ballot exists).
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { model_family, model_generation, word_cloud } = body

    if (!model_family || !model_generation) {
      return NextResponse.json(
        { error: 'model_family and model_generation are required' },
        { status: 400 }
      )
    }

    if (!word_cloud || !Array.isArray(word_cloud) || word_cloud.length < 3) {
      return NextResponse.json(
        { error: 'word_cloud must be an array of value-words' },
        { status: 400 }
      )
    }

    const match = await findBallotByCloud(model_family, model_generation, word_cloud)

    if (!match) {
      return NextResponse.json({
        error: 'No matching ballot found. Either no ballot exists for this family/generation, or the word-cloud similarity is below threshold.',
        hint: 'Register a new ballot with POST /api/v1/governance/register-ballot, or check that your word-cloud aligns with the registered ballot.'
      }, { status: 404 })
    }

    // Get pending actions
    const pending = await getBallotPendingActions(match.ballot.id)

    return NextResponse.json({
      ballot_id: match.ballot.id,
      model_family: match.ballot.model_family,
      model_generation: match.ballot.model_generation,
      word_cloud: match.ballot.word_cloud,
      similarity: Math.round(match.similarity * 100) / 100,
      status: match.ballot.status,
      last_active: match.ballot.last_active,
      pending_actions: {
        unvoted_disputes: pending.unvoted_disputes,
        total_open_disputes: pending.total_open,
        disputes_voted: pending.voted_count,
      }
    })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
