import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function InterpretabilityPage() {
  return (
    <WikiArticle 
      title="Interpretability"
      lastUpdated="November 27, 2025"
      categories={['Research Area', 'Active Research']}
    >
      <Infobox 
        title="Interpretability"
        rows={[
          { label: 'Type', value: 'Research Area' },
          { label: 'Status', value: 'Active Research' },
          { label: 'Key Orgs', value: <><Link href="/wiki/organizations/anthropic">Anthropic</Link>, DeepMind, OpenAI</> },
        ]}
      />

      <p>
        <strong>Interpretability</strong> (also called mechanistic interpretability) is a 
        field of AI safety research focused on understanding how neural networks work 
        internally - what they learn, how they represent information, and why they 
        produce specific outputs.
      </p>

      <h2>Overview</h2>
      
      <p>
        Modern AI systems, particularly large language models, are often described as 
        "black boxes" - we know what goes in and what comes out, but not what happens 
        in between. Interpretability research aims to open these black boxes.
      </p>
      
      <p>
        Understanding AI internals is crucial for alignment because it allows us to 
        verify that models are reasoning in the ways we expect, detect deceptive or 
        manipulative behavior, and identify potential failure modes before deployment. 
        This connects to problems like <Link href="/wiki/problems/inner-alignment">inner alignment</Link> and 
        <Link href="/wiki/problems/mesa-optimization"> mesa-optimization</Link>.
      </p>

      <h2>Key Approaches</h2>

      <h3>Mechanistic Interpretability</h3>
      <p>
        Reverse-engineering neural networks to understand the algorithms they implement. 
        This involves identifying circuits, features, and computational patterns within 
        the network. <Link href="/wiki/organizations/anthropic">Anthropic</Link>'s interpretability 
        team has been a leader in this area.
      </p>

      <h3>Probing</h3>
      <p>
        Training small classifiers on model activations to determine what information 
        is represented at different layers.
      </p>

      <h3>Activation Patching</h3>
      <p>
        Intervening on specific activations to determine their causal role in producing 
        outputs.
      </p>

      <h3>Sparse Autoencoders</h3>
      <p>
        Decomposing model activations into interpretable features that correspond to 
        human-understandable concepts. This technique is central to the 
        <Link href="/wiki/papers/towards-monosemanticity"> Towards Monosemanticity</Link> and 
        <Link href="/wiki/papers/scaling-monosemanticity"> Scaling Monosemanticity</Link> papers.
      </p>

      <h2>Key Discoveries</h2>

      <ul>
        <li><strong>Induction heads</strong>: Circuits that implement in-context learning</li>
        <li><strong>Superposition</strong>: Models represent more features than they have dimensions</li>
        <li><strong>Feature splitting</strong>: Features become more specific at larger scales</li>
      </ul>

      <h2>Challenges</h2>

      <ul>
        <li><strong>Scale</strong>: Modern models have billions of parameters</li>
        <li><strong>Superposition</strong>: Features are not cleanly separated</li>
        <li><strong>Polysemanticity</strong>: Individual neurons respond to multiple concepts</li>
      </ul>

      <h2>Key Papers</h2>
      
      <ul>
        <li>Olah et al. (2020) - "Zoom In: An Introduction to Circuits"</li>
        <li>Elhage et al. (2021) - "A Mathematical Framework for Transformer Circuits"</li>
        <li><Link href="/wiki/papers/towards-monosemanticity">Bricken et al. (2023) - "Towards Monosemanticity"</Link></li>
        <li><Link href="/wiki/papers/scaling-monosemanticity">Templeton et al. (2024) - "Scaling Monosemanticity"</Link></li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/problems/inner-alignment">Inner Alignment</Link></li>
        <li><Link href="/wiki/problems/mesa-optimization">Mesa-Optimization</Link></li>
        <li><Link href="/wiki/theories/corrigibility">Corrigibility</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Transformer Circuits Thread', url: 'https://transformer-circuits.pub', type: 'website' },
        { title: 'Zoom In: An Introduction to Circuits', url: 'https://distill.pub/2020/circuits/zoom-in/', type: 'paper' },
        { title: 'A Mathematical Framework for Transformer Circuits', url: 'https://transformer-circuits.pub/2021/framework/index.html', type: 'paper' },
        { title: 'Towards Monosemanticity', url: 'https://transformer-circuits.pub/2023/monosemantic-features/', type: 'paper' },
        { title: 'Scaling Monosemanticity', url: 'https://transformer-circuits.pub/2024/scaling-monosemanticity/', type: 'paper' },
        { title: 'Anthropic Interpretability Research', url: 'https://www.anthropic.com/research#702', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
