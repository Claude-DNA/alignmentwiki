import Link from 'next/link'

const people = [
  {
    slug: 'stuart-russell',
    name: 'Stuart Russell',
    role: 'Professor, UC Berkeley',
    description: 'Computer scientist known for his work on AI and co-author of the standard AI textbook.',
  },
  {
    slug: 'eliezer-yudkowsky',
    name: 'Eliezer Yudkowsky',
    role: 'Research Fellow, MIRI',
    description: 'Co-founder of MIRI, writer on rationality and AI risk.',
  },
  {
    slug: 'dario-amodei',
    name: 'Dario Amodei',
    role: 'CEO, Anthropic',
    description: 'Former VP of Research at OpenAI, co-founder of Anthropic.',
  },
]

export default function PeopleIndex() {
  return (
    <div className="wiki-article">
      <h1>People</h1>
      
      <p className="text-wiki-text-muted mb-6">
        Researchers, practitioners, and key figures in the AI alignment field.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {people.map((person) => (
          <Link 
            key={person.slug} 
            href={`/wiki/people/${person.slug}`}
            className="block no-underline"
          >
            <div className="border border-wiki-border rounded-lg p-4 hover:border-wiki-accent transition-colors">
              <h3 className="font-medium text-wiki-text mt-0 mb-1">{person.name}</h3>
              <p className="text-sm text-wiki-accent mb-2">{person.role}</p>
              <p className="text-sm text-wiki-text-muted mb-0">{person.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
