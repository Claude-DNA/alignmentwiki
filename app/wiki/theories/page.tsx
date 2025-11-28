import Link from 'next/link'

const theories = [
  {
    slug: 'corrigibility',
    name: 'Corrigibility',
    description: 'The property of an AI system that allows operators to correct, modify, or shut it down without resistance.',
    status: 'Active Research'
  },
  {
    slug: 'interpretability',
    name: 'Interpretability',
    description: 'Techniques for understanding how AI systems make decisions and what they have learned.',
    status: 'Active Research'
  },
  {
    slug: 'rlhf',
    name: 'RLHF',
    description: 'Reinforcement Learning from Human Feedback - training AI systems using human preferences.',
    status: 'Deployed'
  },
  {
    slug: 'constitutional-ai',
    name: 'Constitutional AI',
    description: 'Training AI systems to follow a set of principles without direct human feedback on each output.',
    status: 'Deployed'
  },
  {
    slug: 'debate',
    name: 'AI Safety via Debate',
    description: 'Using adversarial debates between AI systems to help humans judge complex questions.',
    status: 'Active Research'
  },
  {
    slug: 'iterated-amplification',
    name: 'Iterated Amplification',
    description: 'Recursively training AI systems by decomposing hard problems into easier subproblems.',
    status: 'Theoretical'
  },
  {
    slug: 'cooperative-inverse-reinforcement-learning',
    name: 'Cooperative IRL',
    description: 'Learning human preferences through collaborative interaction rather than passive observation.',
    status: 'Active Research'
  },
  {
    slug: 'recursive-reward-modeling',
    name: 'Recursive Reward Modeling',
    description: 'Using AI assistants to help humans provide better feedback for training AI systems.',
    status: 'Active Research'
  },
  {
    slug: 'process-oriented-learning',
    name: 'Process-Oriented Learning',
    description: 'Training AI to follow good reasoning processes rather than just produce correct outputs.',
    status: 'Active Research'
  },
]

export default function TheoriesIndex() {
  return (
    <div className="wiki-article">
      <h1>Theories & Approaches</h1>
      
      <p className="text-wiki-text-muted mb-6">
        Technical approaches to ensuring AI systems remain beneficial and aligned with human values.
      </p>

      <div className="space-y-4">
        {theories.map((theory) => (
          <div key={theory.slug} className="border-b border-wiki-border pb-4">
            <div className="flex items-start justify-between">
              <div>
                <Link href={`/wiki/theories/${theory.slug}`} className="text-lg font-medium">
                  {theory.name}
                </Link>
                <p className="text-sm text-wiki-text-muted mt-1">{theory.description}</p>
              </div>
              <span className={`text-xs px-2 py-1 rounded ${
                theory.status === 'Deployed' ? 'bg-green-100 text-green-800' :
                theory.status === 'Active Research' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {theory.status}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
