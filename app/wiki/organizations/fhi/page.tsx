import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function FHIPage() {
  return (
    <WikiArticle 
      title="Future of Humanity Institute"
      lastUpdated="November 28, 2025"
      categories={['Organization', 'Research', 'Academia']}
    >
      <Infobox 
        title="Future of Humanity Institute"
        rows={[
          { label: 'Type', value: 'Academic Research Institute' },
          { label: 'Founded', value: '2005' },
          { label: 'Location', value: 'Oxford, UK' },
          { label: 'Founder', value: 'Nick Bostrom' },
          { label: 'Status', value: 'Closed (2024)' },
        ]}
      />

      <p>
        The <strong>Future of Humanity Institute</strong> (FHI) was a multidisciplinary 
        research institute at the University of Oxford, focused on big-picture questions 
        about humanity's future, including existential risks from advanced AI.
      </p>

      <h2>History</h2>

      <p>
        FHI was founded in 2005 by philosopher <Link href="/wiki/people/nick-bostrom">Nick Bostrom</Link> 
        within Oxford's Faculty of Philosophy. It became one of the first academic institutions 
        to take AI existential risk seriously as a research topic.
      </p>

      <p>
        In 2024, FHI closed its doors after years of administrative difficulties with 
        the university. Many of its researchers moved to other organizations focused 
        on AI safety and existential risk.
      </p>

      <h2>Research Areas</h2>

      <ul>
        <li>Existential risk analysis</li>
        <li>AI safety and alignment</li>
        <li>Macrostrategy and global priorities</li>
        <li>Human enhancement ethics</li>
        <li>Simulation argument and anthropics</li>
      </ul>

      <h2>Notable Contributions</h2>

      <ul>
        <li>Early framing of AI existential risk</li>
        <li>Development of existential risk as academic field</li>
        <li>Training many researchers now working in AI safety</li>
        <li>Bostrom's <em>Superintelligence</em> book</li>
      </ul>

      <h2>Legacy</h2>

      <p>
        Despite its closure, FHI's influence continues through its alumni network 
        and the research paradigms it established. Many leading AI safety researchers 
        either worked at FHI or were influenced by its work.
      </p>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/people/nick-bostrom">Nick Bostrom</Link></li>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
        <li><Link href="/wiki/problems/value-lock-in">Value Lock-in</Link></li>
      </ul>
    </WikiArticle>
  )
}
