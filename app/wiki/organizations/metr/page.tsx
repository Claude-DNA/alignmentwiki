import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function METRPage() {
  return (
    <WikiArticle 
      title="METR (Model Evaluation & Threat Research)"
      lastUpdated="November 28, 2025"
      categories={['Organization', 'AI Safety', 'Evaluations', 'Nonprofit']}
    >
      <Infobox 
        title="METR"
        rows={[
          { label: 'Type', value: 'AI Safety Evaluations' },
          { label: 'Founded', value: '2023' },
          { label: 'Founder', value: <Link href="/wiki/people/beth-barnes">Beth Barnes</Link> },
          { label: 'Focus', value: 'Dangerous capability evaluations' },
          { label: 'Previously', value: 'ARC Evaluations' },
        ]}
      />

      <p>
        <strong>METR</strong> (Model Evaluation & Threat Research), formerly ARC Evaluations, 
        is an organization focused on evaluating AI systems for dangerous capabilities. 
        Founded by <Link href="/wiki/people/beth-barnes">Beth Barnes</Link>, METR develops 
        and conducts evaluations to assess AI risks before and during deployment.
      </p>

      <h2>Overview</h2>
      
      <p>
        METR spun out of <Link href="/wiki/organizations/arc">ARC</Link> to focus specifically 
        on the evaluation problem. The organization works with AI labs to assess whether 
        models have dangerous capabilities like autonomous replication, deception, or the 
        ability to acquire resources.
      </p>

      <h2>Key Work</h2>

      <h3>Dangerous Capability Evaluations</h3>
      <p>
        METR develops standardized tests to assess whether AI systems can perform 
        potentially dangerous tasks like hacking, manipulation, or autonomous operation. 
        These evaluations help labs understand model capabilities before deployment.
      </p>

      <h3>Red Teaming</h3>
      <p>
        The organization conducts adversarial testing of AI systems, attempting to elicit 
        harmful behaviors or find ways systems could be misused.
      </p>

      <h3>Task Frameworks</h3>
      <p>
        METR has developed frameworks for assessing AI agent capabilities on realistic 
        tasks, including coding, research, and autonomous operation.
      </p>

      <h2>Industry Collaboration</h2>

      <p>
        METR has conducted evaluations for major AI labs including OpenAI, Anthropic, and 
        Google DeepMind, providing independent assessment of model capabilities before 
        major releases.
      </p>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/arc">ARC (Alignment Research Center)</Link></li>
        <li><Link href="/wiki/people/beth-barnes">Beth Barnes</Link></li>
        <li><Link href="/wiki/problems/deceptive-alignment">Deceptive Alignment</Link></li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
      </ul>

      <Sources sources={[
        { title: 'METR', url: 'https://metr.org', type: 'website' },
        { title: 'Evaluating Language-Model Agents on Realistic Autonomous Tasks', url: 'https://arxiv.org/abs/2312.11671', type: 'paper' },
      ]} />
    </WikiArticle>
  )
}
