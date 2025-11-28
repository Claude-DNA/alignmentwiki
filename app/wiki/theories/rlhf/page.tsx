import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function RLHFPage() {
  return (
    <WikiArticle 
      title="Reinforcement Learning from Human Feedback (RLHF)"
      lastUpdated="November 27, 2025"
      categories={['Training Method', 'Deployed Technique']}
    >
      <Infobox 
        title="RLHF"
        rows={[
          { label: 'Type', value: 'Training Method' },
          { label: 'Status', value: 'Deployed' },
          { label: 'First Used', value: '2017' },
          { label: 'Key Orgs', value: <><Link href="/wiki/organizations/anthropic">Anthropic</Link>, OpenAI, DeepMind</> },
        ]}
      />

      <p>
        <strong>Reinforcement Learning from Human Feedback (RLHF)</strong> is a machine learning 
        technique that trains AI systems to align with human preferences by using human feedback 
        as a reward signal. It has become a standard approach for training large language models 
        like ChatGPT and <Link href="/wiki/organizations/anthropic">Claude</Link>.
      </p>

      <h2>Overview</h2>
      
      <p>
        RLHF addresses a fundamental challenge in AI training: defining what "good" behavior 
        looks like. Rather than hand-coding reward functions, RLHF learns what humans prefer 
        by having them compare and rate AI outputs. This approach was pioneered by 
        <Link href="/wiki/people/paul-christiano"> Paul Christiano</Link> and colleagues in their 
        foundational <Link href="/wiki/papers/deep-rl-from-human-preferences">2017 paper</Link>.
      </p>

      <h2>How It Works</h2>

      <h3>Step 1: Supervised Fine-Tuning</h3>
      <p>
        A base language model is fine-tuned on examples of desired behavior, typically 
        human-written responses to prompts.
      </p>

      <h3>Step 2: Reward Model Training</h3>
      <p>
        Human evaluators compare pairs of AI responses and indicate which is better. These 
        preferences train a reward model that predicts human preferences.
      </p>

      <h3>Step 3: Reinforcement Learning</h3>
      <p>
        The language model is further trained using reinforcement learning (typically PPO) 
        to maximize the reward model's score while staying close to the original model.
      </p>

      <p>
        This three-step process was formalized and deployed at scale in the 
        <Link href="/wiki/papers/training-language-models-to-follow-instructions"> InstructGPT paper</Link>, 
        which demonstrated that RLHF could make language models significantly more helpful and safe.
      </p>

      <h2>Limitations</h2>

      <ul>
        <li><strong><Link href="/wiki/problems/reward-hacking">Reward hacking</Link></strong>: Models may find ways to score high on the reward model without actually being helpful</li>
        <li><strong>Human evaluator limitations</strong>: Humans may not recognize subtle errors or manipulation</li>
        <li><strong>Preference inconsistency</strong>: Different humans may have different preferences</li>
        <li><strong><Link href="/wiki/problems/scalable-oversight">Scalability</Link></strong>: Collecting human feedback is expensive and time-consuming</li>
      </ul>

      <h2>Alternatives and Extensions</h2>

      <ul>
        <li><Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link> - Uses AI feedback guided by principles, developed by <Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><strong>RLAIF</strong> - Reinforcement Learning from AI Feedback</li>
        <li><strong>DPO</strong> - Direct Preference Optimization, a simpler alternative</li>
      </ul>

      <h2>Key Papers</h2>
      
      <ul>
        <li><Link href="/wiki/papers/deep-rl-from-human-preferences">Christiano et al. (2017) - "Deep Reinforcement Learning from Human Preferences"</Link></li>
        <li>Stiennon et al. (2020) - "Learning to Summarize from Human Feedback"</li>
        <li><Link href="/wiki/papers/training-language-models-to-follow-instructions">Ouyang et al. (2022) - "Training language models to follow instructions with human feedback"</Link></li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link></li>
        <li><Link href="/wiki/people/paul-christiano">Paul Christiano</Link></li>
        <li><Link href="/wiki/people/jan-leike">Jan Leike</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/problems/reward-hacking">Reward Hacking</Link></li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Deep Reinforcement Learning from Human Preferences (arXiv)', url: 'https://arxiv.org/abs/1706.03741', type: 'paper' },
        { title: 'Training language models to follow instructions (arXiv)', url: 'https://arxiv.org/abs/2203.02155', type: 'paper' },
        { title: 'Learning to Summarize from Human Feedback (arXiv)', url: 'https://arxiv.org/abs/2009.01325', type: 'paper' },
        { title: 'OpenAI - Aligning Language Models to Follow Instructions', url: 'https://openai.com/research/instruction-following', type: 'website' },
        { title: 'Anthropic Research', url: 'https://www.anthropic.com/research', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
