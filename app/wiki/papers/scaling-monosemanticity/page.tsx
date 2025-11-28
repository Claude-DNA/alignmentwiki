import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function ScalingMonosemanticityPage() {
  return (
    <WikiArticle 
      title="Scaling Monosemanticity: Extracting Interpretable Features from Claude 3 Sonnet"
      lastUpdated="November 27, 2025"
      categories={['Paper', 'Interpretability', 'Anthropic']}
    >
      <Infobox 
        title="Paper Details"
        rows={[
          { label: 'Authors', value: 'Templeton, Conerly, et al.' },
          { label: 'Year', value: '2024' },
          { label: 'Venue', value: 'Anthropic Technical Report' },
          { label: 'Organization', value: <Link href="/wiki/organizations/anthropic">Anthropic</Link> },
        ]}
      />

      <p>
        <a href="https://transformer-circuits.pub/2024/scaling-monosemanticity/" target="_blank" rel="noopener noreferrer" className="text-wiki-accent font-medium">
          📄 Read the full paper on Transformer Circuits →
        </a>
      </p>

      <h2>Abstract</h2>
      
      <blockquote>
        We scale sparse autoencoders to extract interpretable features from Claude 3 Sonnet, 
        a state-of-the-art large language model. We find millions of features corresponding 
        to a wide variety of concepts, including cities, people, emotions, programming concepts, 
        and many others. We demonstrate that these features can be used to steer model behavior, 
        and show examples of safety-relevant features including those related to deception, 
        dangerous content, and bias.
      </blockquote>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>Scaling to frontier models</strong>: First application of sparse autoencoders to a state-of-the-art production model</li>
        <li><strong>Millions of features</strong>: Extracted interpretable features at unprecedented scale</li>
        <li><strong>Safety-relevant features</strong>: Identified features related to deception, harm, and bias</li>
        <li><strong>Behavioral steering</strong>: Demonstrated that features can be manipulated to change model behavior</li>
      </ul>

      <h2>Summary</h2>

      <p>
        This paper extends the work from <Link href="/wiki/papers/towards-monosemanticity">Towards Monosemanticity</Link> to 
        a much larger scale. The researchers trained sparse autoencoders on Claude 3 Sonnet and extracted 
        millions of interpretable features.
      </p>

      <p>
        Key findings include:
      </p>

      <ul>
        <li><strong>Abstract features</strong>: Features representing abstract concepts like "inner conflict" or "deception"</li>
        <li><strong>Multimodal features</strong>: Some features respond to both text and images</li>
        <li><strong>Safety features</strong>: Features that activate on potentially harmful content</li>
        <li><strong>Steering capabilities</strong>: Amplifying or suppressing features changes model behavior predictably</li>
      </ul>

      <h2>Implications for Safety</h2>

      <p>
        The paper demonstrates several safety-relevant applications:
      </p>

      <ul>
        <li>Detecting when models might be engaging in deception</li>
        <li>Understanding what triggers potentially harmful outputs</li>
        <li>Potentially using features for more targeted safety interventions</li>
      </ul>

      <h2>Impact</h2>

      <p>
        This represents a major milestone for <Link href="/wiki/theories/interpretability">mechanistic interpretability</Link>, 
        showing that the approach can scale to the largest and most capable models. It suggests 
        a path toward understanding and controlling AI systems by understanding their internal 
        representations.
      </p>

      <h2>Related Articles</h2>
      
      <ul>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
        <li><Link href="/wiki/papers/towards-monosemanticity">Towards Monosemanticity</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
      </ul>
    </WikiArticle>
  )
}
