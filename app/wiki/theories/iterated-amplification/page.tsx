import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function IteratedAmplificationPage() {
  return (
    <WikiArticle 
      title="Iterated Amplification"
      lastUpdated="November 28, 2025"
      categories={['Theory', 'Scalable Oversight']}
    >
      <Infobox 
        title="Iterated Amplification"
        rows={[
          { label: 'Type', value: 'Alignment Approach' },
          { label: 'Proposed By', value: <Link href="/wiki/people/paul-christiano">Paul Christiano</Link> },
          { label: 'Year', value: '2018' },
          { label: 'Status', value: 'Theoretical' },
          { label: 'Related', value: <Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link> },
        ]}
      />

      <p>
        <strong>Iterated Amplification</strong> (IDA) is a proposed alignment technique 
        that trains AI systems by recursively decomposing hard problems into easier 
        subproblems that humans can solve or verify.
      </p>

      <h2>Core Idea</h2>

      <p>
        The key insight is that a human assisted by multiple copies of a slightly-weaker 
        AI can solve harder problems than the AI alone. By iterating this process:
      </p>

      <ol>
        <li>Start with a weak AI assistant</li>
        <li>Human + multiple AI copies solve harder problems</li>
        <li>Train a new AI to imitate this "amplified" human</li>
        <li>Repeat with the improved AI</li>
      </ol>

      <h2>Amplification Process</h2>

      <p>
        When facing a complex question, the human can:
      </p>

      <ul>
        <li>Break it into simpler subquestions</li>
        <li>Delegate subquestions to AI copies</li>
        <li>Synthesize the answers</li>
        <li>The result is better than any single AI could produce</li>
      </ul>

      <h2>Distillation</h2>

      <p>
        After amplification produces good answers, a new AI is trained to produce 
        similar answers directly, without the expensive decomposition process. This 
        "distilled" AI becomes the assistant for the next round.
      </p>

      <h2>Advantages</h2>

      <ul>
        <li>Maintains human oversight at each step</li>
        <li>Can potentially scale to superhuman tasks</li>
        <li>Each iteration is safe if previous iteration was safe</li>
        <li>Provides a path to aligned superintelligence</li>
      </ul>

      <h2>Challenges</h2>

      <ul>
        <li>Decomposition may not always be possible</li>
        <li>Errors might compound across iterations</li>
        <li>Practical implementation remains difficult</li>
        <li>May be too slow compared to other training methods</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/people/paul-christiano">Paul Christiano</Link></li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
        <li><Link href="/wiki/theories/debate">AI Safety via Debate</Link></li>
        <li><Link href="/wiki/theories/recursive-reward-modeling">Recursive Reward Modeling</Link></li>
        <li><Link href="/wiki/organizations/arc">Alignment Research Center</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Supervising Strong Learners by Amplifying Weak Experts (arXiv)', url: 'https://arxiv.org/abs/1810.08575', type: 'paper' },
        { title: 'Iterated Amplification - AI Alignment Forum', url: 'https://www.alignmentforum.org/s/EmDuGeRw749sD3GKd', type: 'website' },
        { title: 'Clarifying AI Alignment - Paul Christiano', url: 'https://ai-alignment.com/clarifying-ai-alignment-cec47cd69dd6', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
