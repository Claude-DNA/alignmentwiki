import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function ConnorLeahyPage() {
  return (
    <WikiArticle 
      title="Connor Leahy"
      lastUpdated="November 28, 2025"
      categories={['Person', 'Researcher', 'Industry']}
    >
      <Infobox 
        title="Connor Leahy"
        rows={[
          { label: 'Role', value: 'CEO, Conjecture' },
          { label: 'Known For', value: 'EleutherAI, AI safety advocacy' },
          { label: 'Previous', value: 'Co-founded EleutherAI' },
          { label: 'Focus', value: 'AI Safety, Governance' },
        ]}
      />

      <p>
        <strong>Connor Leahy</strong> is an AI researcher and entrepreneur, currently 
        CEO of Conjecture. He co-founded EleutherAI, a grassroots collective that 
        created open-source large language models, and has become an outspoken 
        advocate for AI safety and governance.
      </p>

      <h2>Career</h2>

      <h3>EleutherAI</h3>
      <p>
        Leahy co-founded EleutherAI in 2020, originally to replicate GPT-3. The 
        collective produced GPT-Neo, GPT-J, and GPT-NeoX, demonstrating that large 
        language models could be developed outside major tech companies. This work 
        contributed to the open-source AI movement.
      </p>

      <h3>Conjecture</h3>
      <p>
        Leahy founded Conjecture to focus on AI alignment research, particularly 
        on developing practical tools for understanding and controlling AI systems. 
        The company works on interpretability and alignment techniques.
      </p>

      <h2>AI Safety Advocacy</h2>

      <p>
        Leahy has become known for his urgent warnings about AI risks:
      </p>

      <ul>
        <li>Testified before the UK Parliament on AI risks</li>
        <li>Advocate for mandatory safety evaluations</li>
        <li>Calls for international coordination on AI governance</li>
        <li>Argues current safety measures are inadequate</li>
      </ul>

      <h2>Views</h2>

      <p>
        Leahy argues that AI development is proceeding too quickly relative to 
        safety research. He advocates for:
      </p>

      <ul>
        <li>Slowing capability development</li>
        <li>Mandatory safety testing</li>
        <li>International treaties on AI</li>
        <li>More funding for alignment research</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
      </ul>
    </WikiArticle>
  )
}
