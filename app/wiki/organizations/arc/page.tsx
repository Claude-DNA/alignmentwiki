import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function ARCPage() {
  return (
    <WikiArticle 
      title="Alignment Research Center (ARC)"
      lastUpdated="November 27, 2025"
      categories={['Organization', 'Research Institute', 'Nonprofit']}
    >
      <Infobox 
        title="ARC"
        rows={[
          { label: 'Type', value: 'Research Institute' },
          { label: 'Founded', value: '2021' },
          { label: 'Founder', value: <Link href="/wiki/people/paul-christiano">Paul Christiano</Link> },
          { label: 'Focus', value: 'Alignment Research & Evals' },
        ]}
      />

      <p>
        The <strong>Alignment Research Center (ARC)</strong> is a nonprofit research 
        organization founded by <Link href="/wiki/people/paul-christiano">Paul Christiano</Link> in 
        2021. ARC focuses on theoretical alignment research and developing evaluations 
        to assess AI capabilities and safety.
      </p>

      <h2>Overview</h2>
      
      <p>
        ARC conducts both theoretical research on AI alignment and practical work on 
        evaluating AI systems for dangerous capabilities. The organization has become 
        known for its work on AI evaluations ("evals") that test whether models can 
        perform tasks that would be concerning from a safety perspective.
      </p>

      <h2>Research Areas</h2>

      <h3>Theoretical Alignment</h3>
      <p>
        Research on foundational questions in AI alignment, including scalable oversight, 
        eliciting latent knowledge, and AI-assisted alignment research.
      </p>

      <h3>AI Evaluations</h3>
      <p>
        Development of evaluations to test AI systems for dangerous capabilities, 
        including autonomous replication, acquiring resources, and deceptive behavior.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>Eliciting Latent Knowledge (ELK)</strong>: A research agenda focused on getting AI systems to report what they actually know</li>
        <li><strong>AI Evals</strong>: Framework for evaluating dangerous capabilities in frontier models</li>
        <li><strong>ARC Prize</strong>: Competition for solving the ARC-AGI benchmark</li>
      </ul>

      <h2>Key People</h2>

      <ul>
        <li><Link href="/wiki/people/paul-christiano">Paul Christiano</Link> - Founder</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/people/paul-christiano">Paul Christiano</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
      </ul>
    </WikiArticle>
  )
}
