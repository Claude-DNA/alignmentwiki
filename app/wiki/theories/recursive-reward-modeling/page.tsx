import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function RecursiveRewardModelingPage() {
  return (
    <WikiArticle 
      title="Recursive Reward Modeling"
      lastUpdated="November 28, 2025"
      categories={['Theory', 'Scalable Oversight']}
    >
      <Infobox 
        title="Recursive Reward Modeling"
        rows={[
          { label: 'Type', value: 'Alignment Approach' },
          { label: 'Proposed By', value: <Link href="/wiki/people/jan-leike">Jan Leike</Link> },
          { label: 'Year', value: '2018' },
          { label: 'Status', value: 'Active Research' },
          { label: 'Organization', value: <Link href="/wiki/organizations/anthropic">Anthropic</Link> },
        ]}
      />

      <p>
        <strong>Recursive Reward Modeling</strong> (RRM) is an approach to 
        <Link href="/wiki/problems/scalable-oversight"> scalable oversight</Link> that uses AI 
        assistants to help humans provide better feedback for training AI systems.
      </p>

      <h2>Core Concept</h2>

      <p>
        The key insight is that humans can provide higher-quality feedback when assisted 
        by AI. This creates a virtuous cycle:
      </p>

      <ol>
        <li>Train AI assistant using human feedback</li>
        <li>Use AI assistant to help humans evaluate harder tasks</li>
        <li>Better evaluations enable training on harder tasks</li>
        <li>Improved AI becomes better assistant for evaluation</li>
      </ol>

      <h2>Relationship to RLHF</h2>

      <p>
        RRM extends <Link href="/wiki/theories/rlhf">RLHF</Link> to handle tasks where humans 
        struggle to provide good feedback directly. Instead of replacing human judgment, 
        AI assists human judgment to scale to more complex domains.
      </p>

      <h2>Key Components</h2>

      <ul>
        <li><strong>Reward Model:</strong> Trained to predict human preferences</li>
        <li><strong>Assistant:</strong> Helps humans understand and evaluate outputs</li>
        <li><strong>Recursion:</strong> Each iteration improves both components</li>
      </ul>

      <h2>Advantages</h2>

      <ul>
        <li>Maintains human oversight while scaling</li>
        <li>Builds on proven <Link href="/wiki/theories/rlhf">RLHF</Link> techniques</li>
        <li>Addresses limitations of unaided human feedback</li>
        <li>Natural path to more capable aligned systems</li>
      </ul>

      <h2>Challenges</h2>

      <ul>
        <li>AI assistance might bias human judgments</li>
        <li>Errors could compound across iterations</li>
        <li>Requires careful design of assistance interface</li>
        <li>Hard to verify alignment is preserved</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/people/jan-leike">Jan Leike</Link></li>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
        <li><Link href="/wiki/theories/iterated-amplification">Iterated Amplification</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Scalable Agent Alignment via Reward Modeling (arXiv)', url: 'https://arxiv.org/abs/1811.07871', type: 'paper' },
        { title: 'Jan Leike - DeepMind Alignment Team', url: 'https://jan.leike.name/', type: 'website' },
        { title: 'Recursive Reward Modeling - AI Alignment Forum', url: 'https://www.alignmentforum.org/tag/recursive-reward-modeling', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
