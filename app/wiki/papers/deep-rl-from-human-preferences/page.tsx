import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function DeepRLFromHumanPreferencesPage() {
  return (
    <WikiArticle 
      title="Deep Reinforcement Learning from Human Preferences"
      lastUpdated="November 27, 2025"
      categories={['Paper', 'RLHF', 'Foundational']}
    >
      <Infobox 
        title="Paper Details"
        rows={[
          { label: 'Authors', value: 'Christiano, Leike, Brown, Martic, Legg, Amodei' },
          { label: 'Year', value: '2017' },
          { label: 'Venue', value: 'NeurIPS' },
          { label: 'Citations', value: '2000+' },
        ]}
      />

      <p>
        <a href="https://arxiv.org/abs/1706.03741" target="_blank" rel="noopener noreferrer" className="text-wiki-accent font-medium">
          📄 Read the full paper on arXiv →
        </a>
      </p>

      <h2>Abstract</h2>
      
      <blockquote>
        For sophisticated reinforcement learning (RL) systems to interact usefully with 
        real-world environments, we need to communicate complex goals to these systems. 
        In this work, we explore goals defined in terms of (non-expert) human preferences 
        between pairs of trajectory segments. We show that this approach can effectively 
        solve complex RL tasks without access to the reward function, including Atari 
        games and simulated robot locomotion, while providing feedback on less than 1% 
        of the agent's interactions with the environment. This reduces the cost of human 
        oversight far enough that it can be practically applied to state-of-the-art RL 
        systems. To demonstrate the flexibility of our approach, we show that we can 
        successfully train complex novel behaviors with about an hour of human time.
      </blockquote>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>RLHF framework</strong>: Introduces reinforcement learning from human feedback as a practical technique</li>
        <li><strong>Preference learning</strong>: Shows that comparing trajectory pairs is more efficient than rating individual outcomes</li>
        <li><strong>Reward modeling</strong>: Demonstrates learning a reward model from human preferences</li>
        <li><strong>Sample efficiency</strong>: Achieves results with minimal human feedback (less than 1% of interactions)</li>
      </ul>

      <h2>Summary</h2>

      <p>
        This paper introduces the core <Link href="/wiki/theories/rlhf">RLHF</Link> methodology 
        that would later become standard for training language models. The key insight is 
        that humans can compare two behaviors more reliably than they can assign absolute 
        scores, and these comparisons can train a reward model.
      </p>

      <p>
        The approach has three main components:
      </p>

      <ul>
        <li>An agent that learns from a reward signal</li>
        <li>A reward predictor trained on human preferences</li>
        <li>A process for collecting human comparisons</li>
      </ul>

      <h2>Impact</h2>

      <p>
        This paper is foundational to modern AI alignment practice. The RLHF technique it 
        introduces was later used to train ChatGPT, Claude, and other major language models. 
        <Link href="/wiki/people/paul-christiano">Paul Christiano</Link>, the lead author, 
        remains a central figure in alignment research.
      </p>

      <h2>Related Articles</h2>
      
      <ul>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/people/paul-christiano">Paul Christiano</Link></li>
        <li><Link href="/wiki/papers/training-language-models-to-follow-instructions">Training language models to follow instructions with human feedback</Link></li>
      </ul>
    </WikiArticle>
  )
}
