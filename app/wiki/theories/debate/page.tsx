import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function DebatePage() {
  return (
    <WikiArticle 
      title="AI Safety via Debate"
      lastUpdated="November 28, 2025"
      categories={['Theory', 'Scalable Oversight']}
    >
      <Infobox 
        title="AI Safety via Debate"
        rows={[
          { label: 'Type', value: 'Alignment Approach' },
          { label: 'Proposed By', value: 'Geoffrey Irving, OpenAI' },
          { label: 'Year', value: '2018' },
          { label: 'Status', value: 'Active Research' },
          { label: 'Related', value: <Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link> },
        ]}
      />

      <p>
        <strong>AI Safety via Debate</strong> is an alignment approach where two AI systems 
        argue opposing sides of a question, with a human judge determining the winner. The 
        core insight is that it may be easier for humans to judge arguments than to generate 
        correct answers directly.
      </p>

      <h2>Core Mechanism</h2>

      <p>
        In a debate setup:
      </p>

      <ul>
        <li>Two AI debaters are given a question</li>
        <li>Each debater argues for a different answer</li>
        <li>Debaters can point out flaws in each other's arguments</li>
        <li>A human judge decides which debater is more convincing</li>
        <li>AI systems are trained to win debates by being truthful</li>
      </ul>

      <h2>Theoretical Foundation</h2>

      <p>
        The approach assumes that truth has a "natural advantage" in debate—a debater 
        arguing for a false position can always be caught by an opponent who knows the truth. 
        This creates incentives for AI systems to be honest.
      </p>

      <h2>Advantages</h2>

      <ul>
        <li>Scales human oversight to complex questions</li>
        <li>Adversarial setup catches deceptive arguments</li>
        <li>Humans only need to judge, not solve problems</li>
        <li>Can potentially handle superhuman questions</li>
      </ul>

      <h2>Limitations</h2>

      <ul>
        <li>May not work if both debaters collude</li>
        <li>Humans might be persuaded by convincing but false arguments</li>
        <li>Some questions may not have clear "sides"</li>
        <li>Requires training stable debate equilibria</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
        <li><Link href="/wiki/theories/iterated-amplification">Iterated Amplification</Link></li>
        <li><Link href="/wiki/theories/recursive-reward-modeling">Recursive Reward Modeling</Link></li>
        <li><Link href="/wiki/people/paul-christiano">Paul Christiano</Link></li>
      </ul>

      <Sources sources={[
        { title: 'AI Safety via Debate (arXiv)', url: 'https://arxiv.org/abs/1805.00899', type: 'paper' },
        { title: 'OpenAI - AI Safety via Debate', url: 'https://openai.com/research/debate', type: 'website' },
        { title: 'Scalable AI Safety via Debate - AI Alignment Forum', url: 'https://www.alignmentforum.org/posts/PJLABqQ962hZEqhdB/debate-update-obfuscated-arguments-problem', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
