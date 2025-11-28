import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function ConjecturePage() {
  return (
    <WikiArticle 
      title="Conjecture"
      lastUpdated="November 28, 2025"
      categories={['Organization', 'Research', 'Industry']}
    >
      <Infobox 
        title="Conjecture"
        rows={[
          { label: 'Type', value: 'AI Safety Company' },
          { label: 'Founded', value: '2022' },
          { label: 'Location', value: 'London, UK' },
          { label: 'CEO', value: 'Connor Leahy' },
          { label: 'Focus', value: 'Alignment Research' },
        ]}
      />

      <p>
        <strong>Conjecture</strong> is an AI safety company founded by{' '}
        <Link href="/wiki/people/connor-leahy">Connor Leahy</Link> and other former 
        members of EleutherAI. The company focuses on developing practical tools 
        and techniques for AI alignment.
      </p>

      <h2>History</h2>

      <p>
        Conjecture was founded in 2022 by researchers who had previously worked on 
        open-source large language models through EleutherAI. After experiencing 
        firsthand how quickly AI capabilities were advancing, the founders pivoted 
        to focus on safety research.
      </p>

      <h2>Research Focus</h2>

      <h3>Interpretability</h3>
      <p>
        Conjecture works on understanding what happens inside neural networks, 
        developing tools to make AI systems more transparent and understandable.
      </p>

      <h3>Alignment Techniques</h3>
      <p>
        The company researches practical methods for ensuring AI systems behave 
        as intended, including work on:
      </p>

      <ul>
        <li>Scalable oversight methods</li>
        <li>Value learning approaches</li>
        <li>Robustness to distribution shift</li>
      </ul>

      <h2>Advocacy</h2>

      <p>
        Beyond research, Conjecture engages in public advocacy for AI safety:
      </p>

      <ul>
        <li>CEO testified before UK Parliament</li>
        <li>Public communications about AI risks</li>
        <li>Calls for AI governance and regulation</li>
      </ul>

      <h2>Products</h2>

      <p>
        Conjecture has developed several tools for AI developers, including 
        interpretability frameworks and safety evaluation methods.
      </p>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/people/connor-leahy">Connor Leahy</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
      </ul>
    </WikiArticle>
  )
}
