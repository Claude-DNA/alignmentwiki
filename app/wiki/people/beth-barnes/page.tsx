import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function BethBarnesPage() {
  return (
    <WikiArticle 
      title="Beth Barnes"
      lastUpdated="November 28, 2025"
      categories={['Person', 'Researcher']}
    >
      <Infobox 
        title="Beth Barnes"
        rows={[
          { label: 'Role', value: 'Founder, METR' },
          { label: 'Known For', value: 'AI Evaluations' },
          { label: 'Previous', value: <Link href="/wiki/organizations/arc">ARC Evals</Link> },
          { label: 'Focus', value: 'Dangerous Capability Testing' },
        ]}
      />

      <p>
        <strong>Beth Barnes</strong> is the founder of METR (Model Evaluation and Threat Research), 
        an organization focused on evaluating AI systems for dangerous capabilities. She previously 
        led ARC Evals at the <Link href="/wiki/organizations/arc">Alignment Research Center</Link>.
      </p>

      <h2>Career</h2>

      <h3>Alignment Research Center (2022-2023)</h3>
      <p>
        At <Link href="/wiki/organizations/arc">ARC</Link>, Barnes founded and led ARC Evals, developing 
        methods to test whether AI models could perform dangerous tasks like acquiring resources, 
        self-replication, or evading shutdown.
      </p>

      <h3>METR (2023-present)</h3>
      <p>
        METR continues and expands the evaluation work, partnering with AI labs to test 
        frontier models before deployment and developing standardized evaluation protocols.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>Dangerous Capability Evaluations:</strong> Methods to test if AI can perform harmful tasks</li>
        <li><strong>Autonomous Replication Testing:</strong> Can AI copy itself and acquire resources?</li>
        <li><strong>Pre-deployment Testing:</strong> Evaluating models before public release</li>
        <li><strong>Evaluation Methodology:</strong> Standardizing how we test AI capabilities</li>
        <li><strong>Lab Partnerships:</strong> Working with major AI companies on safety testing</li>
      </ul>

      <h2>Evaluation Philosophy</h2>

      <p>
        Barnes argues that we need concrete tests for dangerous capabilities:
      </p>

      <ul>
        <li>Don't just theorize about risks—test for them</li>
        <li>Develop evaluations before capabilities emerge</li>
        <li>Create standardized protocols labs can adopt</li>
        <li>Make results comparable across models</li>
      </ul>

      <h2>Notable Evaluations</h2>

      <ul>
        <li>Testing GPT-4 for autonomous replication ability</li>
        <li>Evaluating models for manipulation capabilities</li>
        <li>Assessing ability to acquire resources independently</li>
        <li>Testing resistance to shutdown attempts</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/arc">Alignment Research Center</Link></li>
        <li><Link href="/wiki/people/paul-christiano">Paul Christiano</Link></li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
        <li><Link href="/wiki/problems/deceptive-alignment">Deceptive Alignment</Link></li>
      </ul>

      <Sources sources={[
        { title: 'METR - Model Evaluation and Threat Research', url: 'https://metr.org/', type: 'website' },
        { title: 'ARC Evals', url: 'https://evals.alignment.org/', type: 'website' },
        { title: 'Evaluating Language-Model Agents on Realistic Autonomous Tasks', url: 'https://arxiv.org/abs/2312.11671', type: 'paper' },
      ]} />
    </WikiArticle>
  )
}
