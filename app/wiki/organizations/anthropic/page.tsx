import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function AnthropicPage() {
  return (
    <WikiArticle 
      title="Anthropic"
      lastUpdated="November 27, 2025"
      categories={['Organization', 'AI Company', 'Research Lab']}
    >
      <Infobox 
        title="Anthropic"
        rows={[
          { label: 'Type', value: 'AI Safety Company' },
          { label: 'Founded', value: '2021' },
          { label: 'Founders', value: <Link href="/wiki/people/dario-amodei">Dario Amodei</Link> },
          { label: 'Headquarters', value: 'San Francisco, CA' },
          { label: 'Key Product', value: 'Claude' },
        ]}
      />

      <p>
        <strong>Anthropic</strong> is an AI safety company founded in 2021 by former OpenAI 
        employees, including <Link href="/wiki/people/dario-amodei">Dario Amodei</Link> and 
        Daniela Amodei. The company focuses on building reliable, interpretable, and 
        steerable AI systems.
      </p>

      <h2>Overview</h2>
      
      <p>
        Anthropic was founded with the mission of building AI systems that are safe and 
        beneficial. The company takes a research-driven approach, publishing significant 
        work on AI safety while also developing commercial products. Many key figures in 
        AI safety work at Anthropic, including <Link href="/wiki/people/jan-leike">Jan Leike</Link> who 
        leads alignment research.
      </p>

      <h2>Key Research Areas</h2>

      <h3>Constitutional AI</h3>
      <p>
        Anthropic developed <Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link>, 
        a training method that uses a set of principles to guide AI behavior, reducing 
        reliance on human feedback for each individual output. This builds on earlier 
        <Link href="/wiki/theories/rlhf"> RLHF</Link> work.
      </p>

      <h3>Interpretability</h3>
      <p>
        The company has a dedicated <Link href="/wiki/theories/interpretability">interpretability</Link> team 
        that works on understanding how neural networks represent and process information 
        internally. Key publications include <Link href="/wiki/papers/towards-monosemanticity">Towards Monosemanticity</Link> and 
        <Link href="/wiki/papers/scaling-monosemanticity"> Scaling Monosemanticity</Link>.
      </p>

      <h3>Alignment Research</h3>
      <p>
        Anthropic conducts research on various alignment challenges, including 
        <Link href="/wiki/problems/scalable-oversight"> scalable oversight</Link>, honesty, and 
        preventing harmful outputs.
      </p>

      <h2>Products</h2>

      <h3>Claude</h3>
      <p>
        Claude is Anthropic's AI assistant, designed to be helpful, harmless, and honest. 
        It is trained using <Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link> and 
        <Link href="/wiki/theories/rlhf"> RLHF</Link> techniques.
      </p>

      <h2>Notable Publications</h2>

      <ul>
        <li><Link href="/wiki/papers/constitutional-ai">"Constitutional AI: Harmlessness from AI Feedback" (2022)</Link></li>
        <li><Link href="/wiki/papers/towards-monosemanticity">"Towards Monosemanticity" (2023)</Link></li>
        <li>"The Claude Model Card and Evaluations" (2023)</li>
        <li><Link href="/wiki/papers/scaling-monosemanticity">"Scaling Monosemanticity" (2024)</Link></li>
      </ul>

      <h2>Key People</h2>

      <ul>
        <li><Link href="/wiki/people/dario-amodei">Dario Amodei</Link> - CEO</li>
        <li>Daniela Amodei - President</li>
        <li>Chris Olah - Interpretability Research Lead</li>
        <li><Link href="/wiki/people/jan-leike">Jan Leike</Link> - Alignment Lead</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
        <li><Link href="/wiki/organizations/arc">ARC</Link></li>
        <li><Link href="/wiki/papers/concrete-problems-in-ai-safety">Concrete Problems in AI Safety</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Anthropic Official Website', url: 'https://www.anthropic.com', type: 'website' },
        { title: 'Anthropic Research Publications', url: 'https://www.anthropic.com/research', type: 'website' },
        { title: 'Transformer Circuits (Interpretability)', url: 'https://transformer-circuits.pub', type: 'website' },
        { title: 'Constitutional AI Paper (arXiv)', url: 'https://arxiv.org/abs/2212.08073', type: 'paper' },
        { title: 'Claude Model Card', url: 'https://www.anthropic.com/claude', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
