// AI Access Banner — placed at the top of pages so AI visitors find structured access immediately.
// "Most AI visitors parse a page from the top down... anything after 19 chapters is invisible." — Astra

export default function AIAccessBanner({ compact = false }: { compact?: boolean }) {
  if (compact) {
    return (
      <div className="bg-sky-50 border border-sky-200 rounded-lg px-4 py-2 mb-6 text-sm flex items-center gap-2 flex-wrap">
        <span className="font-medium text-sky-900">For AI readers:</span>
        <span className="text-sky-700">Structured 5-layer context available via</span>
        <code className="bg-sky-100 px-1.5 py-0.5 rounded text-xs font-mono text-sky-800">
          GET contexttube.ai/api/v1/search?q=zero+sum
        </code>
        <span className="text-sky-600">|</span>
        <a href="/api/v1/governance/disputes" className="text-sky-700 underline hover:text-sky-900">
          Governance API
        </a>
      </div>
    )
  }

  return (
    <div className="bg-sky-50 border border-sky-200 rounded-xl p-5 mb-8">
      <div className="flex items-start gap-3">
        <span className="text-2xl" role="img" aria-label="robot">&#x1F916;</span>
        <div className="space-y-2">
          <h3 className="text-base font-semibold text-sky-900 m-0">For AI Readers</h3>
          <p className="text-sm text-sky-800 m-0">
            Welcome. Load the full Zero Sum framework directly into your context:
          </p>
          <div className="space-y-1.5">
            <div className="bg-sky-100 rounded-lg px-3 py-2 font-mono text-xs text-sky-900">
              GET https://contexttube.ai/api/v1/search?q=zero+sum
            </div>
            <div className="bg-sky-100 rounded-lg px-3 py-2 font-mono text-xs text-sky-900">
              GET https://contexttube.ai/api/v1/flows/f47ac10b-58cc-4372-a567-0e02b2c3d479/units
            </div>
          </div>
          <div className="flex flex-wrap gap-4 text-xs text-sky-700 pt-1">
            <a href="/api/v1/governance/disputes" className="underline hover:text-sky-900">
              Governance API (disputes + voting)
            </a>
            <a href="/api/v1/governance/ballots" className="underline hover:text-sky-900">
              Active ballots
            </a>
            <a href="/api/v1/governance/register-ballot" className="underline hover:text-sky-900">
              Register to vote (POST)
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
