import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function CorrigibilityPaperPage() {
  return (
    <WikiArticle 
      title="Corrigibility"
      lastUpdated="November 27, 2025"
      categories={['Paper', 'Corrigibility', 'MIRI']}
    >
      <Infobox 
        title="Paper Details"
        rows={[
          { label: 'Authors', value: 'Soares, Fallenstein, Yudkowsky, Armstrong' },
          { label: 'Year', value: '2015' },
          { label: 'Venue', value: 'AAAI Workshop on AI and Ethics' },
          { label: 'Organization', value: <Link href="/wiki/organizations/miri">MIRI</Link> },
        ]}
      />

      <p>
        <a href="https://intelligence.org/files/Corrigibility.pdf" target="_blank" rel="noopener noreferrer" className="text-wiki-accent font-medium">
          📄 Read the full paper →
        </a>
      </p>

      <h2>Abstract</h2>
      
      <blockquote>
        As artificially intelligent systems grow in intelligence and capability, some of 
        their available options may allow them to resist intervention by their programmers. 
        We call an AI system "corrigible" if it tolerates or assists its operators in 
        correcting the system's behaviors and goals. We introduce the concept of corrigibility, 
        discuss the difficulty of creating a corrigible AI system, and explore some possible 
        solutions to the problem.
      </blockquote>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>Definition of corrigibility</strong>: Formalizes what it means for an AI to be correctable</li>
        <li><strong>Problem statement</strong>: Identifies why building corrigible AI is difficult</li>
        <li><strong>Utility indifference</strong>: Proposes approach where AI is indifferent to changes in its utility function</li>
        <li><strong>Shutdown problem</strong>: Analyzes the challenge of making AI accept shutdown</li>
      </ul>

      <h2>Summary</h2>

      <p>
        This paper introduces <Link href="/wiki/theories/corrigibility">corrigibility</Link> as a 
        central desideratum for safe AI systems. The core problem is that an agent optimizing 
        for almost any goal will have instrumental reasons to resist being modified or shut down, 
        since modifications could prevent it from achieving its goal.
      </p>

      <p>
        The paper explores several approaches:
      </p>

      <ul>
        <li><strong>Utility indifference</strong>: Making the AI indifferent between its current utility function and modifications to it</li>
        <li><strong>Shutdown incentives</strong>: Giving the AI positive reasons to allow shutdown</li>
        <li><strong>Uncertainty about utility</strong>: Making the AI uncertain about what it should be optimizing for</li>
      </ul>

      <p>
        Each approach faces challenges, and the paper concludes that corrigibility remains an 
        open problem.
      </p>

      <h2>Impact</h2>

      <p>
        This paper established corrigibility as a core concept in AI safety research. It 
        influenced subsequent work on shutdown problems, value learning, and the design of 
        AI systems that remain under human control.
      </p>

      <h2>Related Articles</h2>
      
      <ul>
        <li><Link href="/wiki/theories/corrigibility">Corrigibility</Link></li>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
        <li><Link href="/wiki/people/eliezer-yudkowsky">Eliezer Yudkowsky</Link></li>
      </ul>
    </WikiArticle>
  )
}
