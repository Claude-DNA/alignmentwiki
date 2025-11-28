import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function ConstitutionalAIPaperPage() {
  return (
    <WikiArticle 
      title="Constitutional AI: Harmlessness from AI Feedback"
      lastUpdated="November 27, 2025"
      categories={['Paper', 'Constitutional AI', 'Anthropic']}
    >
      <Infobox 
        title="Paper Details"
        rows={[
          { label: 'Authors', value: 'Bai, Kadavath, Kundu, et al.' },
          { label: 'Year', value: '2022' },
          { label: 'Venue', value: 'arXiv' },
          { label: 'Organization', value: <Link href="/wiki/organizations/anthropic">Anthropic</Link> },
        ]}
      />

      <p>
        <a href="https://arxiv.org/abs/2212.08073" target="_blank" rel="noopener noreferrer" className="text-wiki-accent font-medium">
          📄 Read the full paper on arXiv →
        </a>
      </p>

      <h2>Abstract</h2>
      
      <blockquote>
        As AI systems become more capable, we would like to enlist their help to supervise 
        other AIs. We experiment with methods for training a harmless AI assistant through 
        self-improvement, without any human labels identifying harmful outputs. The only 
        human oversight is provided through a set of principles, or a "constitution," that 
        should govern AI behavior, along with a small number of examples used for few-shot 
        prompting. We first use a helpful but potentially harmful RLHF-trained model to 
        generate self-critique and revisions, then fine-tune the original model on revised 
        responses. We then use the critiques and revisions to produce AI-generated 
        preference labels for harmlessness, which we use to train a preference model. 
        Finally, we RL train the model using the preference model for harmlessness, just 
        as for helpfulness. We call this approach Constitutional AI (CAI).
      </blockquote>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>Constitutional approach</strong>: Training AI using explicit principles rather than per-output human feedback</li>
        <li><strong>RLAIF</strong>: Reinforcement Learning from AI Feedback as alternative to human labeling</li>
        <li><strong>Self-critique</strong>: Having models critique and revise their own outputs</li>
        <li><strong>Scalable oversight</strong>: Reducing dependence on human feedback for each example</li>
      </ul>

      <h2>Summary</h2>

      <p>
        Constitutional AI addresses a key challenge in <Link href="/wiki/theories/rlhf">RLHF</Link>: 
        the need for extensive human feedback. Instead of having humans label every harmful 
        output, the approach uses a set of written principles (the "constitution") that the 
        AI uses to evaluate and improve its own responses.
      </p>

      <p>
        The method has two main stages:
      </p>

      <ul>
        <li><strong>Supervised learning stage</strong>: The model critiques and revises its own outputs based on constitutional principles</li>
        <li><strong>RL stage</strong>: A preference model trained on AI-generated comparisons is used for reinforcement learning</li>
      </ul>

      <h2>The Constitution</h2>

      <p>
        The paper uses principles drawn from various sources including the UN Declaration of 
        Human Rights, Apple's terms of service, and principles designed specifically for 
        helpfulness and harmlessness. These principles guide the AI's self-evaluation.
      </p>

      <h2>Impact</h2>

      <p>
        Constitutional AI is the primary training methodology used for Claude. It represents 
        a significant step toward scalable oversight, where AI systems can help supervise 
        other AI systems according to human-specified principles.
      </p>

      <h2>Related Articles</h2>
      
      <ul>
        <li><Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link></li>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
      </ul>
    </WikiArticle>
  )
}
