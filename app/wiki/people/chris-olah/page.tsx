import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function ChrisOlahPage() {
  return (
    <WikiArticle 
      title="Chris Olah"
      lastUpdated="November 28, 2025"
      categories={['Person', 'Researcher']}
    >
      <Infobox 
        title="Chris Olah"
        rows={[
          { label: 'Role', value: <><Link href="/wiki/organizations/anthropic">Anthropic</Link> Co-founder</> },
          { label: 'Known For', value: <Link href="/wiki/theories/interpretability">Neural Network Interpretability</Link> },
          { label: 'Previous', value: 'Google Brain, OpenAI' },
          { label: 'Blog', value: 'colah.github.io' },
        ]}
      />

      <p>
        <strong>Chris Olah</strong> is a researcher and co-founder of 
        <Link href="/wiki/organizations/anthropic"> Anthropic</Link>, widely recognized as 
        a pioneer in <Link href="/wiki/theories/interpretability">neural network interpretability</Link>. 
        His visual explanations of machine learning concepts and research into understanding 
        neural networks have been foundational to the field.
      </p>

      <h2>Career</h2>

      <h3>Google Brain (2015-2021)</h3>
      <p>
        At Google Brain, Olah led research into understanding what neural networks learn. 
        His team developed techniques for visualizing features learned by image classifiers 
        and produced influential work on neural network circuits.
      </p>

      <h3>Anthropic (2021-present)</h3>
      <p>
        Olah co-founded Anthropic with colleagues from OpenAI and Google. He leads 
        interpretability research, including the groundbreaking work on 
        <Link href="/wiki/papers/towards-monosemanticity"> monosemanticity</Link> and 
        feature extraction in large language models.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>Feature Visualization:</strong> Techniques to see what neurons detect</li>
        <li><strong>Neural Network Circuits:</strong> Understanding how components combine</li>
        <li><strong>Distill.pub:</strong> Co-founded journal for clear ML explanations</li>
        <li><strong><Link href="/wiki/papers/towards-monosemanticity">Monosemanticity Research</Link>:</strong> Making neurons interpretable via sparse autoencoders</li>
        <li><strong><Link href="/wiki/papers/scaling-monosemanticity">Scaling Monosemanticity</Link>:</strong> Extracting millions of features from Claude</li>
      </ul>

      <h2>Research Philosophy</h2>

      <p>
        Olah is known for emphasizing clarity and visual explanation in research. He 
        believes that truly understanding neural networks—not just using them—is crucial 
        for AI safety. His work aims to make AI systems inspectable and their behavior 
        predictable.
      </p>

      <h2>Selected Publications</h2>

      <ul>
        <li>"Feature Visualization" (2017) - Distill</li>
        <li>"The Building Blocks of Interpretability" (2018) - Distill</li>
        <li>"Zoom In: An Introduction to Circuits" (2020) - Distill</li>
        <li><Link href="/wiki/papers/towards-monosemanticity">"Towards Monosemanticity" (2023)</Link></li>
        <li><Link href="/wiki/papers/scaling-monosemanticity">"Scaling Monosemanticity" (2024)</Link></li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
        <li><Link href="/wiki/papers/towards-monosemanticity">Towards Monosemanticity</Link></li>
        <li><Link href="/wiki/people/dario-amodei">Dario Amodei</Link></li>
        <li><Link href="/wiki/people/neel-nanda">Neel Nanda</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Chris Olah\'s Blog', url: 'https://colah.github.io/', type: 'website' },
        { title: 'Distill.pub', url: 'https://distill.pub/', type: 'website' },
        { title: 'Anthropic Interpretability Team', url: 'https://www.anthropic.com/research', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
