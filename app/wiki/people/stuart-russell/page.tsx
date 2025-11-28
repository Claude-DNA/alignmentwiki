import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function StuartRussellPage() {
  return (
    <WikiArticle 
      title="Stuart Russell"
      lastUpdated="November 27, 2025"
      categories={['Person', 'Researcher', 'Academic']}
    >
      <Infobox 
        title="Stuart Russell"
        rows={[
          { label: 'Role', value: 'Professor, UC Berkeley' },
          { label: 'Known For', value: 'AI Textbook, Value Alignment' },
          { label: 'Education', value: 'PhD, Stanford' },
          { label: 'Notable Book', value: 'Human Compatible (2019)' },
        ]}
      />

      <p>
        <strong>Stuart Russell</strong> is a British computer scientist and professor 
        at UC Berkeley, known for co-authoring the standard AI textbook "Artificial 
        Intelligence: A Modern Approach" and for his work on AI safety and value alignment.
      </p>

      <h2>Career</h2>

      <h3>Academia</h3>
      <p>
        Russell has been a professor at UC Berkeley since 1986. He founded the Center 
        for Human-Compatible AI (CHAI) to research approaches to building beneficial AI.
      </p>

      <h3>AI Safety Advocacy</h3>
      <p>
        Russell has been a prominent public voice on AI risk, arguing that the standard 
        model of AI optimization is fundamentally flawed and proposing alternative 
        approaches based on uncertainty about human preferences.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>AI Textbook</strong>: "Artificial Intelligence: A Modern Approach" (with Peter Norvig) - the most widely used AI textbook</li>
        <li><strong>Inverse Reinforcement Learning</strong>: Techniques for learning reward functions from behavior</li>
        <li><strong>Cooperative Inverse Reinforcement Learning (CIRL)</strong>: Framework for human-AI cooperation</li>
        <li><strong>CHAI</strong>: Founded the Center for Human-Compatible AI at Berkeley</li>
      </ul>

      <h2>Views on AI Safety</h2>

      <p>
        Russell argues that the fundamental problem with AI is the "standard model" of 
        optimization: giving AI systems fixed objectives to maximize. He proposes instead 
        that AI systems should be uncertain about human preferences and seek to learn them.
      </p>
      
      <p>
        His book "Human Compatible" (2019) presents this vision and argues for rebuilding 
        AI on new foundations that make machines inherently beneficial.
      </p>

      <h2>Books</h2>

      <ul>
        <li>"Artificial Intelligence: A Modern Approach" (1995, with Peter Norvig)</li>
        <li>"Human Compatible: Artificial Intelligence and the Problem of Control" (2019)</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/theories/corrigibility">Corrigibility</Link></li>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
      </ul>
    </WikiArticle>
  )
}
