import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function EliezerYudkowskyPage() {
  return (
    <WikiArticle 
      title="Eliezer Yudkowsky"
      lastUpdated="November 27, 2025"
      categories={['Person', 'Researcher', 'Writer']}
    >
      <Infobox 
        title="Eliezer Yudkowsky"
        rows={[
          { label: 'Role', value: 'Research Fellow, MIRI' },
          { label: 'Known For', value: 'AI Safety Advocacy, LessWrong' },
          { label: 'Founded', value: <Link href="/wiki/organizations/miri">MIRI</Link> },
        ]}
      />

      <p>
        <strong>Eliezer Yudkowsky</strong> is an AI safety researcher and writer who 
        co-founded the <Link href="/wiki/organizations/miri">Machine Intelligence 
        Research Institute (MIRI)</Link>. He is one of the earliest and most influential 
        advocates for taking AI existential risk seriously.
      </p>

      <h2>Career</h2>

      <h3>MIRI (2000-present)</h3>
      <p>
        Yudkowsky co-founded the Singularity Institute (now MIRI) in 2000, making it 
        one of the first organizations dedicated to AI safety research. He continues 
        to serve as a Research Fellow.
      </p>

      <h3>LessWrong</h3>
      <p>
        Founded the LessWrong community blog focused on rationality, which became an 
        influential hub for discussions of AI safety and effective altruism.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>AI Risk Awareness</strong>: Pioneered public discourse on existential risk from AI</li>
        <li><strong>Coherent Extrapolated Volition</strong>: Proposed approach to value alignment</li>
        <li><strong>Rationality Writing</strong>: Extensive writings on human reasoning and decision-making</li>
        <li><strong><Link href="/wiki/theories/corrigibility">Corrigibility</Link></strong>: Contributed to foundational concepts</li>
      </ul>

      <h2>Views</h2>

      <p>
        Yudkowsky holds a pessimistic view of humanity's prospects for surviving the 
        development of superintelligent AI. He has argued that current approaches to 
        AI safety are insufficient and that alignment is fundamentally difficult.
      </p>
      
      <p>
        He has been critical of large AI labs for what he sees as insufficient attention 
        to safety concerns and has called for pausing AI development.
      </p>

      <h2>Writing</h2>

      <ul>
        <li>"Rationality: From AI to Zombies" (2015) - Collection of essays on rationality</li>
        <li>"Harry Potter and the Methods of Rationality" - Popular fanfiction exploring rationalist themes</li>
        <li>Extensive posts on LessWrong and the AI Alignment Forum</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
        <li><Link href="/wiki/theories/corrigibility">Corrigibility</Link></li>
      </ul>
    </WikiArticle>
  )
}
