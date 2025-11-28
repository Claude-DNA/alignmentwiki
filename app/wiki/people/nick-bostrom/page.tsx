import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function NickBostromPage() {
  return (
    <WikiArticle 
      title="Nick Bostrom"
      lastUpdated="November 28, 2025"
      categories={['Person', 'Researcher', 'Academia']}
    >
      <Infobox 
        title="Nick Bostrom"
        rows={[
          { label: 'Role', value: 'Director, FHI (former)' },
          { label: 'Known For', value: 'Superintelligence book' },
          { label: 'Institution', value: 'Oxford University' },
          { label: 'Field', value: 'Philosophy, Existential Risk' },
        ]}
      />

      <p>
        <strong>Nick Bostrom</strong> is a Swedish philosopher known for his work 
        on existential risk, the anthropic principle, and superintelligence. He 
        founded the Future of Humanity Institute (FHI) at Oxford University and 
        authored the influential book <em>Superintelligence: Paths, Dangers, Strategies</em>.
      </p>

      <h2>Career</h2>

      <h3>Future of Humanity Institute</h3>
      <p>
        Bostrom founded FHI in 2005, establishing one of the first academic research 
        centers dedicated to studying existential risks, including those from advanced 
        AI. The institute became a leading hub for AI safety research and global 
        catastrophic risk analysis.
      </p>

      <h2>Superintelligence</h2>

      <p>
        Published in 2014, <em>Superintelligence</em> became a landmark work in AI 
        safety discourse. The book argues that superintelligent AI could pose an 
        existential threat to humanity and explores potential control problems and 
        safety strategies.
      </p>

      <h3>Key Concepts</h3>

      <ul>
        <li><strong>Orthogonality Thesis:</strong> Intelligence and goals are independent; high intelligence doesn't imply benevolent goals</li>
        <li><strong>Instrumental Convergence:</strong> Sufficiently intelligent agents will pursue certain instrumental goals regardless of final goals</li>
        <li><strong>Treacherous Turn:</strong> An AI might behave cooperatively until powerful enough to pursue its actual objectives</li>
      </ul>

      <h2>Other Contributions</h2>

      <ul>
        <li>Simulation Argument - probability we live in a simulation</li>
        <li>Astronomical Waste argument for urgency of life extension</li>
        <li>Analysis of global catastrophic and existential risks</li>
        <li>Contributions to transhumanist philosophy</li>
      </ul>

      <h2>Influence</h2>

      <p>
        Bostrom's work has significantly influenced how technologists, policymakers, 
        and researchers think about advanced AI risks. His concepts are foundational 
        to the AI alignment field.
      </p>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/problems/value-lock-in">Value Lock-in</Link></li>
        <li><Link href="/wiki/problems/deceptive-alignment">Deceptive Alignment</Link></li>
        <li><Link href="/wiki/theories/corrigibility">Corrigibility</Link></li>
      </ul>
    </WikiArticle>
  )
}
