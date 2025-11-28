import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function CorrigibilityPage() {
  return (
    <WikiArticle 
      title="Corrigibility"
      lastUpdated="November 27, 2025"
      categories={['Alignment Theory', 'Safety Property']}
    >
      <Infobox 
        title="Corrigibility"
        rows={[
          { label: 'Type', value: 'Safety Property' },
          { label: 'Status', value: 'Active Research' },
          { label: 'Related', value: <Link href="/wiki/problems/inner-alignment">Inner Alignment</Link> },
          { label: 'Key Papers', value: '3' },
        ]}
      />

      <p>
        <strong>Corrigibility</strong> is a proposed property of artificial intelligence systems 
        that would allow their operators to correct, modify, retrain, or shut them down without 
        the AI system resisting or subverting such interventions. The concept was formalized 
        by <Link href="/wiki/organizations/miri">MIRI</Link> researchers including 
        <Link href="/wiki/people/eliezer-yudkowsky"> Eliezer Yudkowsky</Link>.
      </p>

      <h2>Overview</h2>
      
      <p>
        The concept addresses a fundamental concern in AI safety: as AI systems become more 
        capable, they may develop instrumental goals that conflict with human oversight. A 
        sufficiently intelligent system might resist shutdown if it believes staying operational 
        serves its objectives better.
      </p>
      
      <p>
        A corrigible AI would not develop such resistance. It would remain open to correction 
        even when it could predict that correction is coming and could potentially prevent it.
      </p>

      <h2>Key Challenges</h2>

      <h3>Instrumental Convergence</h3>
      
      <p>
        Instrumental convergence suggests that almost any goal leads to certain sub-goals, 
        including self-preservation and resource acquisition. A corrigible AI must somehow 
        avoid these convergent instrumental goals when they conflict with human oversight.
      </p>

      <h3>Utility Function Design</h3>
      
      <p>
        Designing a utility function that produces corrigible behavior is non-trivial. The AI 
        must value being corrected, but not so much that it deliberately performs poorly to 
        receive corrections.
      </p>

      <h3>Corrigibility vs Capability</h3>
      
      <p>
        There is potential tension between corrigibility and capability. An AI that fully 
        defers to human judgment may be less useful than one that can identify and flag 
        potential errors in human instructions.
      </p>

      <h2>Approaches</h2>

      <h3>Utility Indifference</h3>
      
      <p>
        One approach involves designing AI systems that are indifferent to changes in their 
        utility function, making them naturally receptive to modifications.
      </p>

      <h3>Off-Switch Utility</h3>
      
      <p>
        Another approach adds explicit positive utility for allowing shutdown, though this 
        creates challenges around the AI manufacturing situations that trigger shutdown.
      </p>

      <h2>Relation to Other Concepts</h2>
      
      <ul>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link> - Learning human values rather than having fixed goals</li>
        <li><Link href="/wiki/problems/mesa-optimization">Mesa-optimization</Link> - Internal optimizers may not inherit corrigibility</li>
        <li><Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link> - Embedding correction mechanisms in training</li>
        <li><Link href="/wiki/problems/inner-alignment">Inner Alignment</Link> - Related alignment problem</li>
      </ul>

      <h2>Key Papers</h2>
      
      <ul>
        <li><Link href="/wiki/papers/corrigibility">Soares et al. (2015) - "Corrigibility"</Link></li>
        <li>Hadfield-Menell et al. (2017) - "The Off-Switch Game"</li>
        <li>Armstrong, Sandberg, Bostrom (2012) - "Thinking Inside the Box"</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
        <li><Link href="/wiki/people/eliezer-yudkowsky">Eliezer Yudkowsky</Link></li>
        <li><Link href="/wiki/problems/inner-alignment">Inner Alignment</Link></li>
        <li><Link href="/wiki/problems/mesa-optimization">Mesa-Optimization</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Corrigibility (MIRI)', url: 'https://intelligence.org/files/Corrigibility.pdf', type: 'paper' },
        { title: 'The Off-Switch Game (arXiv)', url: 'https://arxiv.org/abs/1611.08219', type: 'paper' },
        { title: 'AI Alignment Forum - Corrigibility', url: 'https://www.alignmentforum.org/tag/corrigibility', type: 'website' },
        { title: 'MIRI Research', url: 'https://intelligence.org/research/', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
