import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function CAISPage() {
  return (
    <WikiArticle 
      title="Center for AI Safety (CAIS)"
      lastUpdated="December 7, 2025"
      categories={['Organization', 'Nonprofit']}
    >
      <Infobox 
        title="Center for AI Safety"
        rows={[
          { label: 'Type', value: 'Nonprofit Research Organization' },
          { label: 'Founded', value: '2022' },
          { label: 'Director', value: <Link href="/wiki/people/dan-hendrycks">Dan Hendrycks</Link> },
          { label: 'Location', value: 'San Francisco, CA' },
          { label: 'Focus', value: 'AI Safety Research & Advocacy' },
        ]}
      />

      <p>
        The <strong>Center for AI Safety (CAIS)</strong> is a nonprofit organization 
        focused on reducing societal-scale risks from artificial intelligence. Founded 
        by <Link href="/wiki/people/dan-hendrycks">Dan Hendrycks</Link>, CAIS conducts 
        research, provides resources for the AI safety community, and engages in 
        public advocacy about AI risks.
      </p>

      <h2>History</h2>

      <p>
        CAIS was founded in 2022 to address what its founders saw as a critical gap 
        in organized efforts to mitigate catastrophic AI risks. The organization 
        gained significant public attention in May 2023 when it released the 
        "Statement on AI Risk," a one-sentence declaration comparing AI extinction 
        risk to pandemics and nuclear war, signed by hundreds of AI researchers 
        and executives.
      </p>

      <h2>Mission and Approach</h2>

      <p>
        CAIS takes a multi-pronged approach to AI safety:
      </p>

      <ul>
        <li><strong>Research</strong>: Conducting and funding technical AI safety research</li>
        <li><strong>Field Building</strong>: Providing compute grants and resources to safety researchers</li>
        <li><strong>Public Advocacy</strong>: Raising awareness about AI risks among policymakers and the public</li>
        <li><strong>Benchmarks</strong>: Developing evaluations for measuring AI safety and capabilities</li>
      </ul>

      <h2>Key Initiatives</h2>

      <h3>Statement on AI Risk (2023)</h3>
      <p>
        CAIS organized a widely-publicized statement declaring: "Mitigating the risk 
        of extinction from AI should be a global priority alongside other societal-scale 
        risks such as pandemics and nuclear war." Signatories included 
        <Link href="/wiki/people/yoshua-bengio"> Yoshua Bengio</Link>, 
        <Link href="/wiki/people/dario-amodei"> Dario Amodei</Link>, Sam Altman, 
        Demis Hassabis, and hundreds of other AI researchers and executives.
      </p>

      <h3>Compute Cluster</h3>
      <p>
        CAIS operates a compute cluster to provide researchers with resources for 
        AI safety experiments, helping address the resource gap between safety 
        researchers and well-funded AI labs.
      </p>

      <h3>ML Safety Course</h3>
      <p>
        CAIS developed an introductory machine learning safety course covering 
        topics including <Link href="/wiki/problems/reward-hacking">reward hacking</Link>, 
        <Link href="/wiki/problems/goal-misgeneralization">goal misgeneralization</Link>, 
        and AI governance.
      </p>

      <h2>Research Areas</h2>

      <ul>
        <li>Dangerous capability evaluations</li>
        <li><Link href="/wiki/problems/deceptive-alignment">Deceptive alignment</Link> detection</li>
        <li>Robustness and <Link href="/wiki/problems/distributional-shift">distributional shift</Link></li>
        <li>AI governance and policy</li>
        <li>Anomaly detection in AI systems</li>
      </ul>

      <h2>Leadership</h2>

      <ul>
        <li><strong><Link href="/wiki/people/dan-hendrycks">Dan Hendrycks</Link></strong> - Director</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/people/dan-hendrycks">Dan Hendrycks</Link></li>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
        <li><Link href="/wiki/organizations/arc">Alignment Research Center</Link></li>
        <li><Link href="/wiki/organizations/metr">METR</Link></li>
        <li><Link href="/wiki/problems/deceptive-alignment">Deceptive Alignment</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Center for AI Safety', url: 'https://www.safe.ai/', type: 'website' },
        { title: 'Statement on AI Risk', url: 'https://www.safe.ai/statement-on-ai-risk', type: 'website' },
        { title: 'ML Safety Course', url: 'https://course.mlsafety.org/', type: 'website' },
        { title: 'CAIS Research', url: 'https://www.safe.ai/research', type: 'website' },
        { title: 'NYT: AI Poses Extinction Risk (Statement Coverage)', url: 'https://www.nytimes.com/2023/05/30/technology/ai-threat-warning.html', type: 'article' },
      ]} />
    </WikiArticle>
  )
}
