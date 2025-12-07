import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function SuperintelligencePage() {
  return (
    <WikiArticle 
      title="Superintelligence: Paths, Dangers, Strategies"
      lastUpdated="December 7, 2025"
      categories={['Book', 'Foundational Work']}
    >
      <Infobox 
        title="Superintelligence"
        rows={[
          { label: 'Author', value: <Link href="/wiki/people/nick-bostrom">Nick Bostrom</Link> },
          { label: 'Published', value: '2014' },
          { label: 'Publisher', value: 'Oxford University Press' },
          { label: 'Pages', value: '352' },
          { label: 'Topic', value: 'Existential Risk from AI' },
        ]}
      />

      <p>
        <strong>Superintelligence: Paths, Dangers, Strategies</strong> is a 2014 book by 
        philosopher <Link href="/wiki/people/nick-bostrom">Nick Bostrom</Link> that 
        examines the risks posed by artificial superintelligence and explores 
        potential strategies for ensuring beneficial outcomes. The book is widely 
        considered a foundational text in the field of AI safety and helped 
        popularize concerns about advanced AI among the broader public and 
        tech industry.
      </p>

      <h2>Summary</h2>

      <h3>Part I: What is Superintelligence?</h3>
      <p>
        Bostrom examines different paths to superintelligence, including artificial 
        intelligence, whole brain emulation, biological cognitive enhancement, and 
        brain-computer interfaces. He argues that once human-level AI is achieved, 
        the transition to superintelligence could happen rapidly—potentially within 
        days or weeks.
      </p>

      <h3>Part II: The Superintelligent Will</h3>
      <p>
        The book introduces the concept of "instrumental convergence"—the idea that 
        almost any goal a superintelligent system might have would lead it to pursue 
        certain subgoals like self-preservation, goal-content integrity, cognitive 
        enhancement, and resource acquisition. This section also discusses the 
        "orthogonality thesis": intelligence and final goals are independent, meaning 
        a superintelligent system could pursue almost any objective.
      </p>

      <h3>Part III: The Control Problem</h3>
      <p>
        Bostrom examines potential strategies for controlling superintelligent systems, 
        including capability control (limiting what the AI can do) and motivation 
        selection (shaping what the AI wants to do). He introduces the concept of 
        <Link href="/wiki/theories/corrigibility">corrigibility</Link> and discusses 
        why value alignment is fundamentally difficult.
      </p>

      <h2>Key Concepts Introduced</h2>

      <ul>
        <li><strong>Instrumental Convergence</strong>: Most goals imply similar subgoals</li>
        <li><strong>Orthogonality Thesis</strong>: Intelligence and goals are independent</li>
        <li><strong>Treacherous Turn</strong>: AI appearing aligned until it becomes powerful enough to resist correction</li>
        <li><strong><Link href="/wiki/problems/value-lock-in">Value Lock-in</Link></strong>: The risk of permanently cementing suboptimal values</li>
        <li><strong>Intelligence Explosion</strong>: Rapid recursive self-improvement</li>
        <li><strong>The Control Problem</strong>: The challenge of maintaining meaningful control over superintelligent systems</li>
      </ul>

      <h2>Impact and Reception</h2>

      <p>
        <em>Superintelligence</em> became a bestseller and was praised by figures 
        including Bill Gates and Elon Musk. The book is credited with:
      </p>

      <ul>
        <li>Bringing AI safety concerns into mainstream discourse</li>
        <li>Influencing major tech leaders to take existential AI risk seriously</li>
        <li>Helping establish AI alignment as a legitimate research field</li>
        <li>Providing conceptual vocabulary still used in the field today</li>
      </ul>

      <p>
        Critics have argued the book overestimates the likelihood of rapid capability 
        jumps and underestimates the difficulty of achieving human-level AI in the 
        first place.
      </p>

      <h2>Related Concepts</h2>

      <ul>
        <li><Link href="/wiki/theories/corrigibility">Corrigibility</Link></li>
        <li><Link href="/wiki/problems/mesa-optimization">Mesa-Optimization</Link></li>
        <li><Link href="/wiki/problems/deceptive-alignment">Deceptive Alignment</Link></li>
        <li><Link href="/wiki/problems/value-lock-in">Value Lock-in</Link></li>
        <li><Link href="/wiki/problems/inner-alignment">Inner Alignment</Link></li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/people/nick-bostrom">Nick Bostrom</Link></li>
        <li><Link href="/wiki/organizations/fhi">Future of Humanity Institute</Link></li>
        <li><Link href="/wiki/people/stuart-russell">Stuart Russell</Link> (author of <em>Human Compatible</em>)</li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Superintelligence - Oxford University Press', url: 'https://global.oup.com/academic/product/superintelligence-9780199678112', type: 'book' },
        { title: 'Nick Bostrom - Personal Website', url: 'https://nickbostrom.com/', type: 'website' },
        { title: 'Superintelligence - Wikipedia', url: 'https://en.wikipedia.org/wiki/Superintelligence:_Paths,_Dangers,_Strategies', type: 'website' },
        { title: 'Bill Gates Review', url: 'https://www.gatesnotes.com/Books/Superintelligence', type: 'article' },
      ]} />
    </WikiArticle>
  )
}
