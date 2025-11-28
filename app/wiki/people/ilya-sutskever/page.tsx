import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function IlyaSutskeverPage() {
  return (
    <WikiArticle 
      title="Ilya Sutskever"
      lastUpdated="November 28, 2025"
      categories={['Person', 'Researcher', 'Industry']}
    >
      <Infobox 
        title="Ilya Sutskever"
        rows={[
          { label: 'Role', value: 'Co-founder, SSI' },
          { label: 'Previous', value: 'Chief Scientist, OpenAI' },
          { label: 'Known For', value: 'AlexNet, GPT research' },
          { label: 'Education', value: 'PhD, University of Toronto' },
        ]}
      />

      <p>
        <strong>Ilya Sutskever</strong> is a leading AI researcher and co-founder of 
        Safe Superintelligence Inc. (SSI). He was previously co-founder and Chief 
        Scientist at <Link href="/wiki/organizations/openai">OpenAI</Link>, where he 
        led research efforts on GPT models.
      </p>

      <h2>Career</h2>

      <h3>Early Research</h3>
      <p>
        Sutskever studied under Geoffrey Hinton at the University of Toronto and was 
        a co-author of the influential AlexNet paper (2012), which demonstrated the 
        power of deep convolutional networks and sparked the modern deep learning era.
      </p>

      <h3>OpenAI (2015-2024)</h3>
      <p>
        As Chief Scientist at OpenAI, Sutskever oversaw the development of the GPT 
        series of language models. He led the Superalignment team, a research effort 
        focused on ensuring superintelligent AI systems remain aligned with human values.
      </p>

      <h3>Safe Superintelligence Inc. (2024-present)</h3>
      <p>
        In 2024, Sutskever departed OpenAI to co-found SSI, a company focused 
        exclusively on developing safe superintelligence. The company's singular focus 
        on safety-first AI development reflects Sutskever's growing concern about 
        alignment challenges.
      </p>

      <h2>Views on AI Safety</h2>

      <p>
        Sutskever has emphasized that:
      </p>

      <ul>
        <li>Superintelligence is coming sooner than many expect</li>
        <li>Alignment research is critically important</li>
        <li>Current approaches may be insufficient for superintelligent systems</li>
        <li>Safety and capabilities research should proceed together</li>
      </ul>

      <h2>Key Contributions</h2>

      <ul>
        <li>AlexNet (with Krizhevsky and Hinton)</li>
        <li>Sequence-to-sequence learning</li>
        <li>GPT architecture development</li>
        <li>Superalignment research program</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/openai">OpenAI</Link></li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
      </ul>
    </WikiArticle>
  )
}
