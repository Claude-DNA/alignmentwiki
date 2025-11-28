import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function AmandaAskellPage() {
  return (
    <WikiArticle 
      title="Amanda Askell"
      lastUpdated="November 28, 2025"
      categories={['Person', 'Researcher', 'Industry']}
    >
      <Infobox 
        title="Amanda Askell"
        rows={[
          { label: 'Role', value: 'Character Lead, Anthropic' },
          { label: 'Known For', value: 'Claude\'s character development' },
          { label: 'Previous', value: 'Philosophy PhD, NYU' },
          { label: 'Field', value: 'AI Ethics, Philosophy' },
        ]}
      />

      <p>
        <strong>Amanda Askell</strong> is a philosopher and AI researcher at{' '}
        <Link href="/wiki/organizations/anthropic">Anthropic</Link>, where she leads 
        work on Claude's character and personality development. Her work bridges 
        philosophy of mind, ethics, and practical AI alignment.
      </p>

      <h2>Background</h2>

      <p>
        Askell holds a PhD in philosophy from New York University, with research 
        focusing on ethics and metaethics. Her philosophical background informs 
        her approach to developing AI systems with robust values and beneficial 
        behaviors.
      </p>

      <h2>Work at Anthropic</h2>

      <p>
        At Anthropic, Askell is responsible for defining Claude's character - the 
        personality traits, values, and behavioral patterns that make Claude 
        helpful, harmless, and honest. Her approach involves iterative empirical 
        refinement through extensive conversations with AI systems to identify 
        and cultivate desirable traits.
      </p>

      <h3>Key Contributions</h3>

      <ul>
        <li>Development of Claude's character guidelines</li>
        <li>Research on AI honesty and epistemic humility</li>
        <li>Work on avoiding sycophancy in AI assistants</li>
        <li>Framework for AI systems that can maintain values under pressure</li>
      </ul>

      <h2>Philosophy and AI</h2>

      <p>
        Askell has written about the intersection of philosophy and AI development, 
        arguing that philosophical rigor is essential for creating AI systems that 
        behave ethically. She emphasizes the importance of careful thinking about 
        what we want AI systems to value and how to instill those values.
      </p>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link></li>
        <li><Link href="/wiki/problems/deceptive-alignment">Deceptive Alignment</Link></li>
      </ul>
    </WikiArticle>
  )
}
