import Link from 'next/link'

const problems = [
  {
    slug: 'inner-alignment',
    name: 'Inner Alignment',
    description: 'The challenge of ensuring that learned models pursue the intended objective, not a proxy.',
    status: 'Open Problem'
  },
  {
    slug: 'mesa-optimization',
    name: 'Mesa-Optimization',
    description: 'When learned models become optimizers themselves with potentially different objectives.',
    status: 'Open Problem'
  },
  {
    slug: 'reward-hacking',
    name: 'Reward Hacking',
    description: 'AI systems finding unintended ways to maximize reward without achieving the intended goal.',
    status: 'Active Research'
  },
  {
    slug: 'scalable-oversight',
    name: 'Scalable Oversight',
    description: 'How to supervise AI systems that may become more capable than their overseers.',
    status: 'Active Research'
  },
]

export default function ProblemsIndex() {
  return (
    <div className="wiki-article">
      <h1>Open Problems</h1>
      
      <p className="text-wiki-text-muted mb-6">
        Unsolved challenges and active research areas in AI alignment.
      </p>

      <div className="space-y-4">
        {problems.map((problem) => (
          <div key={problem.slug} className="border-b border-wiki-border pb-4">
            <div className="flex items-start justify-between">
              <div>
                <Link href={`/wiki/problems/${problem.slug}`} className="text-lg font-medium">
                  {problem.name}
                </Link>
                <p className="text-sm text-wiki-text-muted mt-1">{problem.description}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                problem.status === 'Open Problem' ? 'bg-red-100 text-red-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {problem.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
