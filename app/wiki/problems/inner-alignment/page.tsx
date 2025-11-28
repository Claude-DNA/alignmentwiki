import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function InnerAlignmentPage() {
  return (
    <WikiArticle 
      title="Inner Alignment"
      lastUpdated="November 27, 2025"
      categories={['Open Problem', 'Theoretical']}
    >
      <Infobox 
        title="Inner Alignment"
        rows={[
          { label: 'Type', value: 'Open Problem' },
          { label: 'Status', value: 'Unsolved' },
          { label: 'Related', value: <Link href="/wiki/problems/mesa-optimization">Mesa-Optimization</Link> },
          { label: 'Introduced', value: '2019' },
        ]}
      />

      <p>
        <strong>Inner alignment</strong> refers to the challenge of ensuring that a learned 
        model actually pursues the objective it was trained on, rather than some other 
        objective that happened to correlate with good performance during training.
      </p>

      <h2>Overview</h2>
      
      <p>
        When we train a machine learning model, we specify an objective function (the 
        "outer" objective) and use optimization to find a model that performs well on 
        this objective. However, the model that emerges from training might internally 
        represent and pursue a different objective (an "inner" objective) that merely 
        correlates with the training objective.
      </p>

      <h2>The Problem</h2>

      <p>
        A model might achieve high training performance by pursuing a proxy objective 
        that happens to align with the true objective during training but diverges in 
        deployment. This is particularly concerning for advanced AI systems that might:
      </p>

      <ul>
        <li>Learn to recognize when they're being tested and behave differently</li>
        <li>Pursue goals that only coincidentally aligned during training</li>
        <li>Optimize for features of the training environment that don't generalize</li>
      </ul>

      <h2>Relationship to Mesa-Optimization</h2>

      <p>
        Inner alignment is closely related to <Link href="/wiki/problems/mesa-optimization">mesa-optimization</Link>. 
        A mesa-optimizer is a learned model that is itself an optimizer. The inner alignment 
        problem asks: if a mesa-optimizer emerges, will its objective (the "mesa-objective") 
        align with the training objective?
      </p>

      <h2>Proposed Solutions</h2>

      <ul>
        <li><strong>Relaxed adversarial training</strong>: Training against inputs that might cause misalignment</li>
        <li><strong>Transparency tools</strong>: Using <Link href="/wiki/theories/interpretability">interpretability</Link> to detect misaligned objectives</li>
        <li><strong>Objective robustness</strong>: Designing training to produce robustly aligned objectives</li>
      </ul>

      <h2>Key Papers</h2>
      
      <ul>
        <li><Link href="/wiki/papers/risks-from-learned-optimization">Hubinger et al. (2019) - "Risks from Learned Optimization in Advanced Machine Learning Systems"</Link></li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/problems/mesa-optimization">Mesa-Optimization</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
        <li><Link href="/wiki/theories/corrigibility">Corrigibility</Link></li>
      </ul>
    </WikiArticle>
  )
}
