import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function InstructGPTPage() {
  return (
    <WikiArticle 
      title="Training language models to follow instructions with human feedback"
      lastUpdated="November 27, 2025"
      categories={['Paper', 'RLHF', 'OpenAI']}
    >
      <Infobox 
        title="Paper Details"
        rows={[
          { label: 'Authors', value: 'Ouyang, Wu, Jiang, et al.' },
          { label: 'Year', value: '2022' },
          { label: 'Venue', value: 'NeurIPS' },
          { label: 'Also Known As', value: 'InstructGPT Paper' },
        ]}
      />

      <p>
        <a href="https://arxiv.org/abs/2203.02155" target="_blank" rel="noopener noreferrer" className="text-wiki-accent font-medium">
          📄 Read the full paper on arXiv →
        </a>
      </p>

      <h2>Abstract</h2>
      
      <blockquote>
        Making language models bigger does not inherently make them better at following a 
        user's intent. For example, large language models can generate outputs that are 
        untruthful, toxic, or simply not helpful to the user. In other words, these models 
        are not aligned with their users. In this paper, we show an avenue for aligning 
        language models with user intent on a wide range of tasks by fine-tuning with human 
        feedback. Starting with a set of labeler-written prompts and prompts submitted 
        through the OpenAI API, we collect a dataset of labeler demonstrations of the desired 
        model behavior, which we use to fine-tune GPT-3 using supervised learning. We then 
        collect a dataset of rankings of model outputs, which we use to further fine-tune 
        this supervised model using reinforcement learning from human feedback (RLHF).
      </blockquote>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>InstructGPT</strong>: First major deployment of RLHF at scale for language models</li>
        <li><strong>Human preference data</strong>: Large-scale collection of human rankings of model outputs</li>
        <li><strong>Alignment improvements</strong>: Demonstrated that smaller aligned models can be preferred over larger unaligned ones</li>
        <li><strong>Three-step process</strong>: Established the SFT → RM → PPO pipeline for RLHF</li>
      </ul>

      <h2>The InstructGPT Process</h2>

      <h3>Step 1: Supervised Fine-Tuning (SFT)</h3>
      <p>
        Human labelers write high-quality responses to prompts. GPT-3 is fine-tuned on 
        these demonstrations.
      </p>

      <h3>Step 2: Reward Model Training</h3>
      <p>
        Labelers rank multiple model outputs for the same prompt. These rankings train 
        a reward model to predict human preferences.
      </p>

      <h3>Step 3: RL Fine-Tuning</h3>
      <p>
        The SFT model is further trained using PPO to maximize the reward model's score, 
        with a KL penalty to prevent too much deviation from the SFT model.
      </p>

      <h2>Key Findings</h2>

      <ul>
        <li>1.3B InstructGPT was preferred to 175B GPT-3 despite being 100x smaller</li>
        <li>InstructGPT showed improvements in truthfulness and reductions in toxic output</li>
        <li>The approach generalized to held-out labelers and prompts</li>
        <li>Some "alignment tax" - slight regression on some NLP benchmarks</li>
      </ul>

      <h2>Impact</h2>

      <p>
        This paper established the template for training modern AI assistants. The 
        InstructGPT methodology was the foundation for ChatGPT and influenced Claude's 
        training. It demonstrated that <Link href="/wiki/theories/rlhf">RLHF</Link> could 
        produce dramatically more useful and aligned language models.
      </p>

      <h2>Related Articles</h2>
      
      <ul>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/papers/deep-rl-from-human-preferences">Deep Reinforcement Learning from Human Preferences</Link></li>
        <li><Link href="/wiki/papers/constitutional-ai">Constitutional AI</Link></li>
      </ul>
    </WikiArticle>
  )
}
