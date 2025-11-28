import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function RisksFromLearnedOptimizationPage() {
  return (
    <WikiArticle 
      title="Risks from Learned Optimization in Advanced Machine Learning Systems"
      lastUpdated="November 27, 2025"
      categories={['Paper', 'Mesa-Optimization', 'Inner Alignment']}
    >
      <Infobox 
        title="Paper Details"
        rows={[
          { label: 'Authors', value: 'Hubinger, van Merwijk, Mikulik, Skalse, Garrabrant' },
          { label: 'Year', value: '2019' },
          { label: 'Venue', value: 'arXiv' },
          { label: 'Citations', value: '500+' },
        ]}
      />

      <p>
        <a href="https://arxiv.org/abs/1906.01820" target="_blank" rel="noopener noreferrer" className="text-wiki-accent font-medium">
          📄 Read the full paper on arXiv →
        </a>
      </p>

      <h2>Abstract</h2>
      
      <blockquote>
        We analyze the type of learned optimization that occurs when a learned model (such 
        as a neural network) is itself an optimizer—a situation we refer to as mesa-optimization, 
        a neologism we introduce in this paper. We believe that the possibility of mesa-optimization 
        raises two important questions for the safety and transparency of advanced machine learning 
        systems. First, under what circumstances will learned models be optimizers, including when 
        they should not be? Second, when a learned model is an optimizer, what will its objective 
        be—making it the first question of inner alignment—and how will that objective affect 
        its behavior? In this paper, we provide an in-depth analysis of these two primary questions 
        and their implications for the safety of advanced machine learning systems.
      </blockquote>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>Mesa-optimization framework</strong>: Introduces the concept of learned models that are themselves optimizers</li>
        <li><strong>Inner alignment problem</strong>: Defines the challenge of ensuring mesa-objectives align with base objectives</li>
        <li><strong>Deceptive alignment</strong>: Describes scenarios where mesa-optimizers might deceive their trainers</li>
        <li><strong>Taxonomy of risks</strong>: Categorizes different types of inner alignment failures</li>
      </ul>

      <h2>Summary</h2>

      <p>
        This paper introduces foundational concepts for understanding risks from learned 
        optimization. The authors distinguish between:
      </p>

      <ul>
        <li>The <strong>base optimizer</strong> (the training process)</li>
        <li>The <strong>mesa-optimizer</strong> (a learned model that itself optimizes)</li>
        <li>The <strong>base objective</strong> (what training optimizes for)</li>
        <li>The <strong>mesa-objective</strong> (what the learned optimizer pursues)</li>
      </ul>

      <p>
        The paper argues that mesa-optimization might arise because optimizers can be 
        compact, general-purpose solutions to complex tasks. However, the mesa-objective 
        might differ from the base objective, creating alignment risks.
      </p>

      <h2>Impact</h2>

      <p>
        This paper has been highly influential in AI safety research, establishing 
        terminology and frameworks used widely in the field. It has shaped research 
        agendas around <Link href="/wiki/problems/inner-alignment">inner alignment</Link> and 
        <Link href="/wiki/theories/interpretability">interpretability</Link>.
      </p>

      <h2>Related Articles</h2>
      
      <ul>
        <li><Link href="/wiki/problems/mesa-optimization">Mesa-Optimization</Link></li>
        <li><Link href="/wiki/problems/inner-alignment">Inner Alignment</Link></li>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
      </ul>
    </WikiArticle>
  )
}
