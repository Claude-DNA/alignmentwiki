import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function ProcessOrientedLearningPage() {
  return (
    <WikiArticle 
      title="Process-Oriented Learning"
      lastUpdated="November 28, 2025"
      categories={['Theory', 'Training Methods']}
    >
      <Infobox 
        title="Process-Oriented Learning"
        rows={[
          { label: 'Type', value: 'Training Approach' },
          { label: 'Also Known As', value: 'Process Supervision' },
          { label: 'Status', value: 'Active Research' },
          { label: 'Contrast', value: 'Outcome-Based Learning' },
        ]}
      />

      <p>
        <strong>Process-Oriented Learning</strong> trains AI systems to follow good reasoning 
        processes rather than just produce correct final answers. The focus is on <em>how</em> 
        the AI reaches conclusions, not just <em>what</em> conclusions it reaches.
      </p>

      <h2>Process vs Outcome Supervision</h2>

      <p>
        Traditional training often uses <strong>outcome supervision</strong>: reward correct 
        answers, penalize wrong ones. Process supervision instead evaluates each step:
      </p>

      <ul>
        <li><strong>Outcome:</strong> "Is the final answer correct?"</li>
        <li><strong>Process:</strong> "Is each reasoning step valid?"</li>
      </ul>

      <h2>Why Process Matters</h2>

      <p>
        An AI might reach correct answers through:
      </p>

      <ul>
        <li>Sound reasoning (good)</li>
        <li>Memorization (brittle)</li>
        <li>Lucky guessing (unreliable)</li>
        <li>Exploiting spurious correlations (dangerous)</li>
      </ul>

      <p>
        Process supervision helps ensure the AI is actually reasoning correctly, making 
        its behavior more predictable and trustworthy.
      </p>

      <h2>Applications</h2>

      <ul>
        <li><strong>Math:</strong> Verify each step of a proof</li>
        <li><strong>Coding:</strong> Check reasoning about code logic</li>
        <li><strong>Analysis:</strong> Evaluate argument structure</li>
        <li><strong>Planning:</strong> Assess each decision in a sequence</li>
      </ul>

      <h2>Connection to Alignment</h2>

      <p>
        Process-oriented learning supports alignment by:
      </p>

      <ul>
        <li>Making AI reasoning more transparent</li>
        <li>Catching <Link href="/wiki/problems/reward-hacking">reward hacking</Link> earlier</li>
        <li>Enabling better <Link href="/wiki/theories/interpretability">interpretability</Link></li>
        <li>Reducing reliance on potentially gamed outcomes</li>
      </ul>

      <h2>Challenges</h2>

      <ul>
        <li>Defining "good process" is often harder than checking outcomes</li>
        <li>Requires more detailed human feedback</li>
        <li>May slow down training</li>
        <li>Some tasks don't have clear process steps</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
        <li><Link href="/wiki/problems/reward-hacking">Reward Hacking</Link></li>
        <li><Link href="/wiki/theories/recursive-reward-modeling">Recursive Reward Modeling</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Let\'s Verify Step by Step (OpenAI)', url: 'https://arxiv.org/abs/2305.20050', type: 'paper' },
        { title: 'Process Supervision - AI Alignment Forum', url: 'https://www.alignmentforum.org/tag/process-supervision', type: 'website' },
        { title: 'Solving Math Word Problems with Process and Outcome-based Feedback', url: 'https://arxiv.org/abs/2211.14275', type: 'paper' },
      ]} />
    </WikiArticle>
  )
}
