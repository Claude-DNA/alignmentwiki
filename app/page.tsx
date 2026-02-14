import Link from 'next/link'

export default function Home() {
  return (
    <div className="wiki-article">
      <h1>Alignment Wiki</h1>
      
      <p className="text-lg text-wiki-text-muted mb-8">
        A comprehensive encyclopedia of AI alignment research, theories, organizations, and key figures.
      </p>

      {/* Featured: ASTP */}
      <Link href="/wiki/astp" className="block no-underline mb-6">
        <div className="bg-amber-900/30 border-2 border-amber-500 rounded-lg p-6 hover:bg-amber-900/40 transition-colors">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-2xl">🧪</span>
            <h3 className="text-xl font-bold text-amber-400 m-0">ASTP: Alignment Stress Testing Protocol</h3>
          </div>
          <p className="text-wiki-text-muted mb-2">
            Live AI ethics testing with real scenarios. See how Claude, Grok, and Gemini respond to moral dilemmas.
          </p>
          <div className="flex gap-4 text-sm">
            <span className="text-amber-400">13 ABC-book principles</span>
            <span className="text-wiki-text-muted">•</span>
            <span className="text-wiki-text-muted">10 scenarios</span>
            <span className="text-wiki-text-muted">•</span>
            <span className="text-wiki-text-muted">3 AI systems</span>
          </div>
        </div>
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <CategoryCard 
          title="Theories & Approaches"
          description="Technical approaches to ensuring AI systems remain beneficial"
          href="/wiki/theories"
          count={9}
        />
        <CategoryCard 
          title="People"
          description="Researchers and practitioners in the alignment field"
          href="/wiki/people"
          count={15}
        />
        <CategoryCard 
          title="Organizations"
          description="Research labs, nonprofits, and companies working on alignment"
          href="/wiki/organizations"
          count={12}
        />
        <CategoryCard 
          title="Key Papers"
          description="Foundational and influential research papers"
          href="/wiki/papers"
          count={9}
        />
        <CategoryCard 
          title="Open Problems"
          description="Unsolved challenges in alignment research"
          href="/wiki/problems"
          count={9}
        />
      </div>

      <h2>About This Wiki</h2>
      
      <p>
        Alignment Wiki aims to provide neutral, well-sourced information about the field of AI alignment. 
        The wiki covers technical approaches, key researchers, organizations, and the ongoing debates 
        about how to ensure advanced AI systems remain beneficial to humanity.
      </p>
      
      <p>
        This is a moderated wiki. Anyone can propose edits or add new articles, which are reviewed 
        before publication to maintain quality and accuracy.
      </p>
    </div>
  )
}

function CategoryCard({ title, description, href, count }: { 
  title: string
  description: string
  href: string
  count: number
}) {
  return (
    <Link href={href} className="block no-underline">
      <div className="bg-wiki-sidebar border border-wiki-border rounded-lg p-4 hover:border-wiki-accent transition-colors">
        <h3 className="text-lg font-medium text-wiki-text mb-1 mt-0">{title}</h3>
        <p className="text-sm text-wiki-text-muted mb-2">{description}</p>
        <span className="text-xs text-wiki-text-muted">{count} articles</span>
      </div>
    </Link>
  )
}
