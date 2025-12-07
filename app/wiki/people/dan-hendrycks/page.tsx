import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function DanHendrycksPage() {
  return (
    <WikiArticle 
      title="Dan Hendrycks"
      lastUpdated="December 7, 2025"
      categories={['Person', 'Researcher']}
    >
      <Infobox 
        title="Dan Hendrycks"
        rows={[
          { label: 'Role', value: <><Link href="/wiki/organizations/cais">CAIS</Link> Director</> },
          { label: 'Known For', value: 'AI Safety Benchmarks' },
          { label: 'Affiliation', value: 'UC Berkeley' },
          { label: 'Education', value: 'PhD, UC Berkeley' },
        ]}
      />

      <p>
        <strong>Dan Hendrycks</strong> is an AI safety researcher and director of 
        the <Link href="/wiki/organizations/cais">Center for AI Safety (CAIS)</Link>. 
        He is known for creating influential benchmarks for measuring AI capabilities 
        and safety, including MMLU (Massive Multitask Language Understanding) and 
        various robustness evaluations.
      </p>

      <h2>Career</h2>

      <h3>Academic Research</h3>
      <p>
        Hendrycks completed his PhD at UC Berkeley, where he developed numerous 
        benchmark datasets that have become standard tools for evaluating language 
        models. His work on measuring AI capabilities has influenced how the field 
        tracks progress toward more powerful systems.
      </p>

      <h3>Center for AI Safety (2022-present)</h3>
      <p>
        As director of <Link href="/wiki/organizations/cais">CAIS</Link>, Hendrycks 
        has led efforts to advance AI safety research and advocate for responsible 
        AI development. CAIS played a key role in organizing the 2023 "Statement 
        on AI Risk" signed by leading AI researchers and executives.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>MMLU Benchmark</strong>: Created the Massive Multitask Language Understanding 
        benchmark, widely used to evaluate language model knowledge and reasoning</li>
        <li><strong>Robustness Research</strong>: Developed methods for testing AI system 
        robustness to distribution shift and adversarial inputs</li>
        <li><strong>AI Risk Advocacy</strong>: Organized the influential "Statement on AI Risk" 
        comparing AI extinction risk to pandemics and nuclear war</li>
        <li><strong>Safety Benchmarks</strong>: Created evaluation suites for measuring 
        dangerous AI capabilities</li>
      </ul>

      <h2>Research Interests</h2>

      <ul>
        <li>AI safety benchmarks and evaluations</li>
        <li><Link href="/wiki/problems/distributional-shift">Distributional shift</Link> and robustness</li>
        <li>Measuring dangerous AI capabilities</li>
        <li>AI governance and policy</li>
      </ul>

      <h2>Notable Works</h2>

      <ul>
        <li>"Measuring Massive Multitask Language Understanding" (2020) - MMLU benchmark paper</li>
        <li>"Natural Adversarial Examples" (2021)</li>
        <li>"Unsolved Problems in ML Safety" (2022)</li>
        <li>"An Overview of Catastrophic AI Risks" (2023)</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/cais">Center for AI Safety</Link></li>
        <li><Link href="/wiki/problems/distributional-shift">Distributional Shift</Link></li>
        <li><Link href="/wiki/people/yoshua-bengio">Yoshua Bengio</Link></li>
        <li><Link href="/wiki/people/stuart-russell">Stuart Russell</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Dan Hendrycks - Personal Website', url: 'https://hendrycks.github.io/', type: 'website' },
        { title: 'Center for AI Safety', url: 'https://www.safe.ai/', type: 'website' },
        { title: 'MMLU Paper (arXiv)', url: 'https://arxiv.org/abs/2009.03300', type: 'paper' },
        { title: 'Statement on AI Risk', url: 'https://www.safe.ai/statement-on-ai-risk', type: 'website' },
        { title: 'Google Scholar Profile', url: 'https://scholar.google.com/citations?user=czyreasAAAAJ', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
