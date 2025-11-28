import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function ValueLockInPage() {
  return (
    <WikiArticle 
      title="Value Lock-in"
      lastUpdated="November 28, 2025"
      categories={['Problem', 'Long-term Risk']}
    >
      <Infobox 
        title="Value Lock-in"
        rows={[
          { label: 'Type', value: 'Existential Risk' },
          { label: 'Also Known As', value: 'Value Ossification' },
          { label: 'Status', value: 'Open Problem' },
          { label: 'Time Horizon', value: 'Long-term' },
        ]}
      />

      <p>
        <strong>Value lock-in</strong> refers to the risk that powerful AI systems could 
        permanently encode a particular set of values into civilization's trajectory, 
        preventing future value changes even if humanity later decides those values 
        were wrong or incomplete.
      </p>

      <h2>The Problem</h2>

      <p>
        If we build AI systems that are:
      </p>

      <ul>
        <li>Very powerful (can shape the future)</li>
        <li>Optimizing for specific values</li>
        <li>Self-preserving or value-preserving</li>
      </ul>

      <p>
        Then those values might become permanent, even if:
      </p>

      <ul>
        <li>We got the values wrong</li>
        <li>Human values naturally evolve</li>
        <li>We discover better moral frameworks</li>
        <li>Circumstances change in ways we couldn't anticipate</li>
      </ul>

      <h2>Historical Analogy</h2>

      <p>
        Past civilizations locked in values through institutions, laws, and cultural 
        practices. But these could eventually be changed through revolution, reform, 
        or cultural shift. Sufficiently powerful AI might make such changes impossible.
      </p>

      <h2>Why It's Concerning</h2>

      <ul>
        <li>Our current moral knowledge is incomplete</li>
        <li>Different cultures have different values</li>
        <li>Values appropriate now may not be appropriate later</li>
        <li>No single group should dictate humanity's permanent values</li>
        <li>Moral progress requires ability to change</li>
      </ul>

      <h2>Tension with Alignment</h2>

      <p>
        There's a fundamental tension: we want AI to preserve good values (alignment), 
        but we also want the ability to update values over time. Too much 
        <Link href="/wiki/theories/corrigibility"> corrigibility</Link> might prevent 
        beneficial value changes; too little might enable harmful lock-in.
      </p>

      <h2>Possible Approaches</h2>

      <ul>
        <li>Design AI to preserve optionality rather than specific values</li>
        <li>Build in mechanisms for value updating</li>
        <li>Avoid creating systems that resist modification</li>
        <li>Ensure diverse input into AI value specification</li>
        <li>Procedural values (how to decide) rather than object-level values (what to decide)</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/theories/corrigibility">Corrigibility</Link></li>
        <li><Link href="/wiki/theories/cooperative-inverse-reinforcement-learning">Cooperative IRL</Link></li>
        <li><Link href="/wiki/people/stuart-russell">Stuart Russell</Link></li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
      </ul>

      <Sources sources={[
        { title: 'On the Dangers of Stochastic Parrots (ACL)', url: 'https://dl.acm.org/doi/10.1145/3442188.3445922', type: 'paper' },
        { title: 'Value Lock-in - AI Alignment Forum', url: 'https://www.alignmentforum.org/tag/value-lock-in', type: 'website' },
        { title: 'The Precipice - Toby Ord', url: 'https://theprecipice.com/', type: 'book' },
      ]} />
    </WikiArticle>
  )
}
