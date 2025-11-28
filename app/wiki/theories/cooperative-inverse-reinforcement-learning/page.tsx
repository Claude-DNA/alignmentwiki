import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function CooperativeIRLPage() {
  return (
    <WikiArticle 
      title="Cooperative Inverse Reinforcement Learning"
      lastUpdated="November 28, 2025"
      categories={['Theory', 'Value Learning']}
    >
      <Infobox 
        title="Cooperative IRL"
        rows={[
          { label: 'Type', value: 'Value Learning Approach' },
          { label: 'Proposed By', value: <Link href="/wiki/people/stuart-russell">Stuart Russell</Link> },
          { label: 'Year', value: '2016' },
          { label: 'Status', value: 'Active Research' },
          { label: 'Institution', value: 'UC Berkeley' },
        ]}
      />

      <p>
        <strong>Cooperative Inverse Reinforcement Learning</strong> (CIRL) is an alignment 
        framework where the AI and human work together in a two-player game. The AI is 
        uncertain about human values and learns them through interaction, while optimizing 
        for the human's true (unknown) reward function.
      </p>

      <h2>Key Insight</h2>

      <p>
        Unlike standard IRL where the AI passively observes, CIRL treats value learning 
        as a cooperative game. The AI has an incentive to:
      </p>

      <ul>
        <li>Ask clarifying questions</li>
        <li>Defer to humans when uncertain</li>
        <li>Avoid irreversible actions until confident</li>
        <li>Actively elicit information about preferences</li>
      </ul>

      <h2>Game Structure</h2>

      <p>
        In a CIRL game:
      </p>

      <ul>
        <li>Human knows the reward function, AI doesn't</li>
        <li>Both players want to maximize human's reward</li>
        <li>Human's actions reveal information about preferences</li>
        <li>Optimal AI strategy involves learning and deferring</li>
      </ul>

      <h2>Benefits Over Standard IRL</h2>

      <ul>
        <li>AI naturally becomes <Link href="/wiki/theories/corrigibility">corrigible</Link></li>
        <li>Handles uncertainty about values gracefully</li>
        <li>AI doesn't assume it knows better than humans</li>
        <li>Incentivizes transparency and communication</li>
      </ul>

      <h2>Connection to Assistance Games</h2>

      <p>
        CIRL is part of a broader framework <Link href="/wiki/people/stuart-russell">Stuart Russell</Link> calls 
        "assistance games" or "human-compatible AI." The core principle: AI should be 
        designed to maximize human preferences while being uncertain about what those 
        preferences are.
      </p>

      <h2>Limitations</h2>

      <ul>
        <li>Assumes humans can provide good feedback</li>
        <li>Doesn't address manipulation or deception</li>
        <li>Scaling to complex real-world settings is hard</li>
        <li>May be too deferential in some contexts</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/people/stuart-russell">Stuart Russell</Link></li>
        <li><Link href="/wiki/theories/corrigibility">Corrigibility</Link></li>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/problems/reward-hacking">Reward Hacking</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Cooperative Inverse Reinforcement Learning (arXiv)', url: 'https://arxiv.org/abs/1606.03137', type: 'paper' },
        { title: 'Human Compatible - Stuart Russell', url: 'https://www.humancompatible.ai/', type: 'website' },
        { title: 'CHAI - Center for Human-Compatible AI', url: 'https://humancompatible.ai/', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
