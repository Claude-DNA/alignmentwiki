import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function DistributionalShiftPage() {
  return (
    <WikiArticle 
      title="Distributional Shift"
      lastUpdated="November 28, 2025"
      categories={['Problem', 'Robustness']}
    >
      <Infobox 
        title="Distributional Shift"
        rows={[
          { label: 'Type', value: 'Technical Challenge' },
          { label: 'Also Known As', value: 'Distribution Shift, Dataset Shift' },
          { label: 'Status', value: 'Active Research' },
          { label: 'Related', value: <Link href="/wiki/problems/goal-misgeneralization">Goal Misgeneralization</Link> },
        ]}
      />

      <p>
        <strong>Distributional shift</strong> occurs when the data or situations an AI 
        system encounters during deployment differ from those seen during training. 
        This can cause unpredictable failures even in systems that performed well in testing.
      </p>

      <h2>Types of Shift</h2>

      <ul>
        <li><strong>Covariate shift:</strong> Input distribution changes</li>
        <li><strong>Label shift:</strong> Output distribution changes</li>
        <li><strong>Concept drift:</strong> Relationship between inputs and outputs changes</li>
        <li><strong>Domain shift:</strong> Entire context changes (e.g., simulation to real world)</li>
      </ul>

      <h2>Examples</h2>

      <ul>
        <li>Self-driving car trained in sunny California deployed in snowy conditions</li>
        <li>Medical AI trained on one hospital's equipment used with different equipment</li>
        <li>Language model trained on internet text used in specialized domains</li>
        <li>Trading algorithm trained on historical data facing novel market conditions</li>
      </ul>

      <h2>Why It Matters for Alignment</h2>

      <p>
        Distributional shift is especially concerning for alignment because:
      </p>

      <ul>
        <li>AI may be deployed in situations never anticipated</li>
        <li>Aligned behavior in training might not transfer</li>
        <li>Safety constraints might not generalize</li>
        <li>Catastrophic failures could occur in novel situations</li>
      </ul>

      <h2>Connection to Other Problems</h2>

      <ul>
        <li><Link href="/wiki/problems/goal-misgeneralization">Goal misgeneralization</Link> often manifests under distributional shift</li>
        <li><Link href="/wiki/problems/reward-hacking">Reward hacking</Link> may only become visible in new distributions</li>
        <li><Link href="/wiki/problems/deceptive-alignment">Deceptive alignment</Link> could activate under specific shifts</li>
      </ul>

      <h2>Mitigations</h2>

      <ul>
        <li>Domain randomization during training</li>
        <li>Out-of-distribution detection</li>
        <li>Uncertainty quantification</li>
        <li>Conservative behavior when uncertain</li>
        <li>Continuous learning with safety constraints</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/problems/goal-misgeneralization">Goal Misgeneralization</Link></li>
        <li><Link href="/wiki/problems/reward-hacking">Reward Hacking</Link></li>
        <li><Link href="/wiki/papers/concrete-problems-in-ai-safety">Concrete Problems in AI Safety</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Concrete Problems in AI Safety (arXiv)', url: 'https://arxiv.org/abs/1606.06565', type: 'paper' },
        { title: 'A Survey on Domain Adaptation', url: 'https://arxiv.org/abs/2004.05430', type: 'paper' },
        { title: 'Distributional Shift - AI Alignment Forum', url: 'https://www.alignmentforum.org/tag/distributional-robustness', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
