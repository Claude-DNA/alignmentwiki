import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function MIRIPage() {
  return (
    <WikiArticle 
      title="Machine Intelligence Research Institute (MIRI)"
      lastUpdated="November 27, 2025"
      categories={['Organization', 'Research Institute', 'Nonprofit']}
    >
      <Infobox 
        title="MIRI"
        rows={[
          { label: 'Type', value: 'Research Institute' },
          { label: 'Founded', value: '2000' },
          { label: 'Founder', value: <Link href="/wiki/people/eliezer-yudkowsky">Eliezer Yudkowsky</Link> },
          { label: 'Headquarters', value: 'Berkeley, CA' },
          { label: 'Focus', value: 'Foundational AI Safety' },
        ]}
      />

      <p>
        The <strong>Machine Intelligence Research Institute (MIRI)</strong> is a nonprofit 
        research organization focused on ensuring that advanced artificial intelligence 
        has a positive impact on humanity. Originally founded as the Singularity Institute 
        for Artificial Intelligence in 2000, it was renamed to MIRI in 2013.
      </p>

      <h2>Overview</h2>
      
      <p>
        MIRI was one of the earliest organizations dedicated to AI safety research. The 
        institute focuses on foundational mathematical research aimed at understanding 
        and solving the core challenges of building aligned AI systems.
      </p>

      <h2>Research Focus</h2>

      <h3>Agent Foundations</h3>
      <p>
        Research on the mathematical foundations of rational agency, including decision 
        theory, logical uncertainty, and embedded agency.
      </p>

      <h3>Alignment Theory</h3>
      <p>
        Work on <Link href="/wiki/theories/corrigibility">corrigibility</Link>, value 
        learning, and other theoretical frameworks for building AI systems that remain 
        aligned with human values.
      </p>

      <h3>AI Forecasting</h3>
      <p>
        Research on predicting AI development trajectories and potential risks.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li>Early advocacy for AI safety as a research priority</li>
        <li>Development of the concept of <Link href="/wiki/theories/corrigibility">corrigibility</Link></li>
        <li>Research on logical uncertainty and decision theory</li>
        <li>Training and supporting AI safety researchers</li>
      </ul>

      <h2>Notable Publications</h2>

      <ul>
        <li>"Corrigibility" (Soares et al., 2015)</li>
        <li>"Agent Foundations for Aligning Machine Intelligence with Human Interests" (2014)</li>
        <li>"Embedded Agency" (Demski & Garrabrant, 2019)</li>
      </ul>

      <h2>Key People</h2>

      <ul>
        <li><Link href="/wiki/people/eliezer-yudkowsky">Eliezer Yudkowsky</Link> - Co-founder, Research Fellow</li>
        <li>Nate Soares - Executive Director</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/theories/corrigibility">Corrigibility</Link></li>
        <li><Link href="/wiki/people/eliezer-yudkowsky">Eliezer Yudkowsky</Link></li>
        <li><Link href="/wiki/organizations/arc">ARC</Link></li>
      </ul>
    </WikiArticle>
  )
}
