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
