import Link from 'next/link'

const organizations = [
  {
    slug: 'anthropic',
    name: 'Anthropic',
    type: 'AI Company',
    founded: '2021',
    description: 'AI safety company focused on building reliable, interpretable, and steerable AI systems.',
  },
  {
    slug: 'openai',
    name: 'OpenAI',
    type: 'AI Company',
    founded: '2015',
    description: 'AI research company developing advanced AI systems including GPT and ChatGPT.',
  },
  {
    slug: 'deepmind',
    name: 'DeepMind',
    type: 'AI Lab',
    founded: '2010',
    description: 'Google-owned AI research laboratory working on general-purpose AI.',
  },
  {
    slug: 'miri',
    name: 'MIRI',
    type: 'Research Institute',
    founded: '2000',
    description: 'Machine Intelligence Research Institute, focused on foundational AI alignment research.',
  },
  {
    slug: 'arc',
    name: 'ARC',
    type: 'Research Institute',
    founded: '2021',
    description: 'Alignment Research Center, focused on theoretical and empirical alignment research.',
  },
  {
    slug: 'cais',
    name: 'Center for AI Safety',
    type: 'Nonprofit',
    founded: '2022',
    description: 'Nonprofit focused on reducing societal-scale risks from AI through research and advocacy.',
  },
  {
    slug: 'redwood-research',
    name: 'Redwood Research',
    type: 'Research Institute',
    founded: '2021',
    description: 'AI safety research lab focused on interpretability and alignment techniques.',
  },
  {
    slug: 'metr',
    name: 'METR',
    type: 'Research Institute',
    founded: '2023',
    description: 'Model Evaluation and Threat Research, focused on evaluating dangerous AI capabilities.',
  },
  {
    slug: 'conjecture',
    name: 'Conjecture',
    type: 'AI Company',
    founded: '2022',
    description: 'AI safety company developing alignment techniques and safe AI systems.',
  },
  {
    slug: 'fhi',
    name: 'Future of Humanity Institute',
    type: 'Research Institute',
    founded: '2005',
    description: 'Oxford-based research center focused on existential risks including AI.',
  },
  {
    slug: 'chai',
    name: 'CHAI',
    type: 'Research Lab',
    founded: '2016',
    description: 'Center for Human-Compatible AI at UC Berkeley, led by Stuart Russell.',
  },
  {
    slug: 'eleutherai',
    name: 'EleutherAI',
    type: 'Research Collective',
    founded: '2020',
    description: 'Grassroots collective focused on open-source AI research and safety.',
  },
]

export default function OrganizationsIndex() {
  return (
    <div className="wiki-article">
      <h1>Organizations</h1>
      
      <p className="text-wiki-text-muted mb-6">
        Research labs, nonprofits, and companies working on AI alignment.
      </p>

      <div className="space-y-4">
        {organizations.map((org) => (
          <Link 
            key={org.slug} 
            href={`/wiki/organizations/${org.slug}`}
            className="block no-underline"
          >
            <div className="border border-wiki-border rounded-lg p-4 hover:border-wiki-accent transition-colors">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-medium text-wiki-text mt-0 mb-1">{org.name}</h3>
                  <p className="text-sm text-wiki-text-muted mb-0">{org.description}</p>
                </div>
                <div className="text-right text-sm">
                  <span className="wiki-category-tag">{org.type}</span>
                  <div className="text-wiki-text-muted mt-1">Est. {org.founded}</div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
