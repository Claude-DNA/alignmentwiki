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
  {
    slug: 'paul-christiano',
    name: 'Paul Christiano',
    role: 'Founder, ARC',
    description: 'Former OpenAI researcher, pioneer of RLHF and iterated amplification.',
  },
  {
    slug: 'jan-leike',
    name: 'Jan Leike',
    role: 'Alignment Lead, Anthropic',
    description: 'Former DeepMind researcher, co-author of key RLHF papers.',
  },
  {
    slug: 'chris-olah',
    name: 'Chris Olah',
    role: 'Co-founder, Anthropic',
    description: 'Pioneer of neural network interpretability and mechanistic understanding.',
  },
  {
    slug: 'neel-nanda',
    name: 'Neel Nanda',
    role: 'Research Scientist, Google DeepMind',
    description: 'Leading researcher in mechanistic interpretability and developer of TransformerLens.',
  },
  {
    slug: 'sam-bowman',
    name: 'Sam Bowman',
    role: 'Research Scientist, Anthropic',
    description: 'NLP researcher focused on language model evaluation and safety benchmarks.',
  },
  {
    slug: 'beth-barnes',
    name: 'Beth Barnes',
    role: 'Founder, METR',
    description: 'Former ARC researcher focused on AI evaluations and dangerous capability testing.',
  },
  {
    slug: 'amanda-askell',
    name: 'Amanda Askell',
    role: 'Character Lead, Anthropic',
    description: 'Philosopher leading Claude\'s character development, bridge between ethics and AI.',
  },
  {
    slug: 'nick-bostrom',
    name: 'Nick Bostrom',
    role: 'Philosopher, Oxford',
    description: 'Author of Superintelligence, founder of Future of Humanity Institute.',
  },
  {
    slug: 'yoshua-bengio',
    name: 'Yoshua Bengio',
    role: 'Professor, Mila',
    description: 'Turing Award winner, deep learning pioneer, AI safety advocate.',
  },
  {
    slug: 'ilya-sutskever',
    name: 'Ilya Sutskever',
    role: 'Co-founder, SSI',
    description: 'Former Chief Scientist at OpenAI, co-founder of Safe Superintelligence Inc.',
  },
  {
    slug: 'connor-leahy',
    name: 'Connor Leahy',
    role: 'CEO, Conjecture',
    description: 'Co-founder of EleutherAI, AI safety researcher and advocate.',
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
