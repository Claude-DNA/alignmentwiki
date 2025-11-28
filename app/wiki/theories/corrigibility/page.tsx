import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
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
          { label: 'Key Papers', value: '3' },
        ]}
      />

      <p>
        <strong>Corrigibility</strong> is a proposed property of artificial intelligence systems 
        that would allow their operators to correct, modify, retrain, or shut them down without 
        the AI system resisting or subverting such interventions.
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

      <h2>Key Papers</h2>
      
      <ul>
        <li>Soares et al. (2015) - "Corrigibility"</li>
        <li>Hadfield-Menell et al. (2017) - "The Off-Switch Game"</li>
        <li>Armstrong, Sandberg, Bostrom (2012) - "Thinking Inside the Box"</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
      </ul>
    </WikiArticle>
  )
}
