import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function CHAIPage() {
  return (
    <WikiArticle 
      title="CHAI (Center for Human-Compatible AI)"
      lastUpdated="November 28, 2025"
      categories={['Organization', 'AI Safety', 'Research Lab', 'Academic']}
    >
      <Infobox 
        title="CHAI"
        rows={[
          { label: 'Type', value: 'Academic Research Center' },
          { label: 'Founded', value: '2016' },
          { label: 'Founder', value: <Link href="/wiki/people/stuart-russell">Stuart Russell</Link> },
          { label: 'Location', value: 'UC Berkeley' },
          { label: 'Focus', value: 'Provably beneficial AI' },
        ]}
      />

      <p>
        <strong>CHAI</strong> (Center for Human-Compatible Artificial Intelligence) is an 
        academic research center at UC Berkeley founded by <Link href="/wiki/people/stuart-russell">Stuart Russell</Link>. 
        CHAI focuses on developing AI systems that are provably beneficial to humans.
      </p>

      <h2>Overview</h2>
      
      <p>
        CHAI takes an academic approach to AI alignment, combining theoretical foundations 
        with practical research. The center is known for work on 
        <Link href="/wiki/theories/cooperative-inverse-reinforcement-learning"> Cooperative Inverse Reinforcement Learning</Link> (CIRL) 
        and assistance games.
      </p>

      <h2>Research Approach</h2>

      <h3>Human-Compatible AI</h3>
      <p>
        Rather than specifying goals for AI systems, CHAI advocates for systems that are 
        uncertain about human preferences and actively work to learn them. This approach 
        is designed to produce systems that defer to humans and remain corrigible.
      </p>

      <h3>Assistance Games</h3>
      <p>
        CHAI developed the assistance game framework, where AI systems are modeled as 
        assistants trying to help humans achieve their (initially unknown) goals. This 
        builds on <Link href="/wiki/theories/cooperative-inverse-reinforcement-learning">CIRL</Link>.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li><Link href="/wiki/theories/cooperative-inverse-reinforcement-learning">Cooperative Inverse Reinforcement Learning</Link></li>
        <li>Assistance games and off-switch games</li>
        <li><Link href="/wiki/people/stuart-russell">Stuart Russell's</Link> book "Human Compatible"</li>
        <li>Research on value alignment and preference learning</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/people/stuart-russell">Stuart Russell</Link></li>
        <li><Link href="/wiki/theories/cooperative-inverse-reinforcement-learning">CIRL</Link></li>
        <li><Link href="/wiki/theories/corrigibility">Corrigibility</Link></li>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
      </ul>

      <Sources sources={[
        { title: 'CHAI - Center for Human-Compatible AI', url: 'https://humancompatible.ai', type: 'website' },
        { title: 'Human Compatible (book)', url: 'https://www.penguinrandomhouse.com/books/566677/human-compatible-by-stuart-russell/', type: 'book' },
        { title: 'CIRL Paper', url: 'https://arxiv.org/abs/1606.03137', type: 'paper' },
      ]} />
    </WikiArticle>
  )
}
