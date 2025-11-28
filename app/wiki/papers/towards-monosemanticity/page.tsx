import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function TowardsMonosemanticityPage() {
  return (
    <WikiArticle 
      title="Towards Monosemanticity: Decomposing Language Models With Dictionary Learning"
      lastUpdated="November 27, 2025"
      categories={['Paper', 'Interpretability', 'Anthropic']}
    >
      <Infobox 
        title="Paper Details"
        rows={[
          { label: 'Authors', value: 'Bricken, Templeton, et al.' },
          { label: 'Year', value: '2023' },
          { label: 'Venue', value: 'Anthropic Technical Report' },
          { label: 'Organization', value: <Link href="/wiki/organizations/anthropic">Anthropic</Link> },
        ]}
      />

      <p>
        <a href="https://transformer-circuits.pub/2023/monosemantic-features/" target="_blank" rel="noopener noreferrer" className="text-wiki-accent font-medium">
          📄 Read the full paper on Transformer Circuits →
        </a>
      </p>

      <h2>Abstract</h2>
      
      <blockquote>
        A major obstacle to understanding neural networks is polysemanticity, where individual 
        neurons respond to multiple unrelated features. This makes it difficult to understand 
        what a neural network is doing by examining individual neurons. We use a weak dictionary 
        learning algorithm called a sparse autoencoder to generate learned features from a 
        trained model that offer a more monosemantic unit of analysis than the model's neurons 
        themselves. We demonstrate that these features are more interpretable, can be used to 
        intervene on model behavior, and provide a useful decomposition of model activations.
      </blockquote>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>Sparse autoencoders for interpretability</strong>: Using dictionary learning to find interpretable features</li>
        <li><strong>Monosemantic features</strong>: Extracted features that correspond to single concepts</li>
        <li><strong>Superposition hypothesis</strong>: Evidence that models represent more features than they have dimensions</li>
        <li><strong>Intervention capabilities</strong>: Showing that identified features can be used to modify model behavior</li>
      </ul>

      <h2>Summary</h2>

      <p>
        Neural network neurons are "polysemantic" - they respond to multiple unrelated concepts. 
        This makes interpreting neural networks difficult because you can't simply ask "what 
        does this neuron do?"
      </p>

      <p>
        This paper applies sparse autoencoders to decompose model activations into more 
        interpretable "features." These features are more monosemantic - each corresponds 
        to a more specific concept like "DNA sequences" or "expressions of surprise."
      </p>

      <p>
        Key findings include:
      </p>

      <ul>
        <li>Sparse autoencoders can recover interpretable features from polysemantic neurons</li>
        <li>The number of features exceeds the number of neurons (supporting superposition)</li>
        <li>Identified features can be used for targeted interventions on model behavior</li>
      </ul>

      <h2>Impact</h2>

      <p>
        This paper represents a major advance in <Link href="/wiki/theories/interpretability">mechanistic interpretability</Link>. 
        The sparse autoencoder technique has become a standard tool for understanding neural 
        network internals and was extended in <Link href="/wiki/papers/scaling-monosemanticity">Scaling Monosemanticity</Link> to 
        larger models.
      </p>

      <h2>Related Articles</h2>
      
      <ul>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
        <li><Link href="/wiki/papers/scaling-monosemanticity">Scaling Monosemanticity</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
      </ul>
    </WikiArticle>
  )
}
