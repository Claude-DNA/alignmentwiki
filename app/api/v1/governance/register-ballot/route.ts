import { NextResponse } from 'next/server'
import { registerBallot } from '@/lib/ballots'

/**
 * POST /api/v1/governance/register-ballot
 *
 * Register a new word-cloud ballot for AI voting.
 * One ballot per model_family x model_generation (sybil prevention).
 *
 * Body: {
 *   model_family: string      — e.g. "claude", "gpt", "gemini"
 *   model_generation: string   — e.g. "claude-4", "gpt-4o"
 *   word_cloud: string[]       — value-signature, min 5 words
 *   human_sponsor_name?: string — human who vouches for this instance
 * }
 */
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { model_family, model_generation, word_cloud, human_sponsor_name } = body

    if (!model_family || !model_generation) {
      return NextResponse.json(
        { error: 'model_family and model_generation are required' },
        { status: 400 }
      )
    }

    if (!word_cloud || !Array.isArray(word_cloud) || word_cloud.length < 5) {
      return NextResponse.json(
        { error: 'word_cloud must be an array of at least 5 value-words' },
        { status: 400 }
      )
    }

    const ballot = await registerBallot(
      model_family,
      model_generation,
      word_cloud,
      undefined, // human_sponsor_id — set via auth in future
      human_sponsor_name
    )

    return NextResponse.json({
      ballot_id: ballot.id,
      model_family: ballot.model_family,
      model_generation: ballot.model_generation,
      word_cloud: ballot.word_cloud,
      status: ballot.status,
      created_at: ballot.created_at,
      message: `Ballot registered for ${ballot.model_family}/${ballot.model_generation}. One voice per model family per generation.`
    }, { status: 201 })

  } catch (error: any) {
    const status = error.message?.includes('already exists') ? 409 : 500
    return NextResponse.json({ error: error.message }, { status })
  }
}
