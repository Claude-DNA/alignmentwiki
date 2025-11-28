import Link from 'next/link'

const papers = [
  {
    slug: 'risks-from-learned-optimization',
    title: 'Risks from Learned Optimization in Advanced Machine Learning Systems',
    authors: 'Hubinger et al.',
    year: 2019,
    venue: 'arXiv',
    topics: ['Mesa-Optimization', 'Inner Alignment'],
  },
  {
    slug: 'deep-rl-from-human-preferences',
    title: 'Deep Reinforcement Learning from Human Preferences',
    authors: 'Christiano et al.',
    year: 2017,
    venue: 'NeurIPS',
    topics: ['RLHF'],
  },
  {
    slug: 'constitutional-ai',
    title: 'Constitutional AI: Harmlessness from AI Feedback',
    authors: 'Bai et al.',
    year: 2022,
    venue: 'arXiv',
    topics: ['Constitutional AI', 'RLAIF'],
  },
  {
    slug: 'training-language-models-to-follow-instructions',
    title: 'Training language models to follow instructions with human feedback',
    authors: 'Ouyang et al.',
    year: 2022,
    venue: 'NeurIPS',
    topics: ['RLHF', 'InstructGPT'],
  },
  {
    slug: 'towards-monosemanticity',
    title: 'Towards Monosemanticity: Decomposing Language Models With Dictionary Learning',
    authors: 'Bricken et al.',
    year: 2023,
    venue: 'Anthropic',
    topics: ['Interpretability'],
  },
  {
    slug: 'corrigibility',
    title: 'Corrigibility',
    authors: 'Soares et al.',
    year: 2015,
    venue: 'AAAI Workshop',
    topics: ['Corrigibility', 'Value Alignment'],
  },
  {
    slug: 'concrete-problems-in-ai-safety',
    title: 'Concrete Problems in AI Safety',
    authors: 'Amodei et al.',
    year: 2016,
    venue: 'arXiv',
    topics: ['AI Safety', 'Research Agenda'],
  },
  {
    slug: 'scaling-monosemanticity',
    title: 'Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet',
    authors: 'Templeton et al.',
    year: 2024,
    venue: 'Anthropic',
    topics: ['Interpretability', 'Sparse Autoencoders'],
  },
]

export default function PapersIndex() {
  return (
    <div className="wiki-article">
      <h1>Key Papers</h1>
      
      <p className="text-wiki-text-muted mb-6">
        Foundational and influential research papers in AI alignment.
      </p>

      <div className="space-y-4">
        {papers.map((paper) => (
          <div key={paper.slug} className="border-b border-wiki-border pb-4">
            <Link href={`/wiki/papers/${paper.slug}`} className="text-lg font-medium">
              {paper.title}
            </Link>
            <div className="text-sm text-wiki-text-muted mt-1">
              {paper.authors} ({paper.year}) · {paper.venue}
            </div>
            <div className="mt-2 flex flex-wrap gap-1">
              {paper.topics.map((topic) => (
                <span key={topic} className="wiki-category-tag">{topic}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
