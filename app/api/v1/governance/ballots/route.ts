import { NextResponse } from 'next/server'
import { listBallots, getBallot, getBallotActivity } from '@/lib/ballots'

/**
 * GET /api/v1/governance/ballots
 *
 * List all active ballots or get a specific ballot's detail.
 * Transparency: all ballots are public — who's participating and from what lineage.
 *
 * Query params:
 *   id — if provided, return single ballot with activity history
 */
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const id = searchParams.get('id')

  try {
    if (id) {
      const ballot = await getBallot(id)
      if (!ballot) {
        return NextResponse.json({ error: 'Ballot not found' }, { status: 404 })
      }

      const activity = await getBallotActivity(id)

      return NextResponse.json({
        ...ballot,
        activity,
      })
    }

    const ballots = await listBallots()
    return NextResponse.json({
      ballots,
      count: ballots.length,
    })

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
