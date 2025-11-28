import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function DarioAmodeiPage() {
  return (
    <WikiArticle 
      title="Dario Amodei"
      lastUpdated="November 27, 2025"
      categories={['Person', 'Researcher', 'Industry']}
    >
      <Infobox 
        title="Dario Amodei"
        rows={[
          { label: 'Role', value: 'CEO, Anthropic' },
          { label: 'Known For', value: 'Co-founding Anthropic' },
          { label: 'Previous', value: 'VP Research, OpenAI' },
          { label: 'Education', value: 'PhD, Princeton' },
        ]}
      />

      <p>
        <strong>Dario Amodei</strong> is an AI researcher and entrepreneur, serving as 
        CEO of <Link href="/wiki/organizations/anthropic">Anthropic</Link>. He previously 
        served as Vice President of Research at OpenAI before co-founding Anthropic in 2021.
      </p>

      <h2>Career</h2>

      <h3>OpenAI (2016-2021)</h3>
      <p>
        At OpenAI, Amodei led research efforts including work on GPT-2 and GPT-3. He 
        served as VP of Research, overseeing the development of large language models 
        and safety research.
      </p>

      <h3>Anthropic (2021-present)</h3>
      <p>
        Amodei co-founded Anthropic with his sister Daniela Amodei and several other 
        former OpenAI researchers. The company focuses on AI safety research and has 
        developed Claude, an AI assistant trained using Constitutional AI techniques.
      </p>

      <h2>Research Contributions</h2>

      <ul>
        <li>Scaling laws for language models</li>
        <li><Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link></li>
        <li>Work on AI safety and alignment</li>
      </ul>

      <h2>Views on AI Safety</h2>

      <p>
        Amodei has expressed concern about potential risks from advanced AI systems 
        while advocating for continued development with appropriate safety measures. 
        He has argued for the importance of interpretability research and robust 
        safety evaluations.
      </p>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link></li>
      </ul>
    </WikiArticle>
  )
}
