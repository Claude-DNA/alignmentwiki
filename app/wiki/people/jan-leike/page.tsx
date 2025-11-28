import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function JanLeikePage() {
  return (
    <WikiArticle 
      title="Jan Leike"
      lastUpdated="November 27, 2025"
      categories={['Person', 'Researcher']}
    >
      <Infobox 
        title="Jan Leike"
        rows={[
          { label: 'Role', value: 'Alignment Lead, Anthropic' },
          { label: 'Previous', value: 'Co-lead Superalignment, OpenAI' },
          { label: 'Known For', value: 'RLHF, Scalable Oversight' },
          { label: 'Education', value: 'PhD, ANU' },
        ]}
      />

      <p>
        <strong>Jan Leike</strong> is an AI safety researcher currently serving as Alignment 
        Lead at <Link href="/wiki/organizations/anthropic">Anthropic</Link>. Previously, he 
        co-led the Superalignment team at OpenAI alongside Ilya Sutskever.
      </p>

      <h2>Career</h2>

      <h3>DeepMind (2017-2021)</h3>
      <p>
        Leike worked on AI safety research at DeepMind, contributing to foundational work 
        on <Link href="/wiki/theories/rlhf">RLHF</Link> and reward modeling.
      </p>

      <h3>OpenAI (2021-2024)</h3>
      <p>
        At OpenAI, Leike co-led the Superalignment team, which was formed to address the 
        challenge of aligning superintelligent AI systems. He departed OpenAI in 2024 along 
        with several other safety researchers.
      </p>

      <h3>Anthropic (2024-present)</h3>
      <p>
        Leike joined Anthropic as Alignment Lead, overseeing the company's alignment 
        research efforts.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong><Link href="/wiki/papers/deep-rl-from-human-preferences">RLHF paper</Link></strong>: Co-author on the foundational 2017 paper</li>
        <li><strong>Scalable oversight</strong>: Research on supervising AI systems more capable than humans</li>
        <li><strong>Reward modeling</strong>: Work on learning reward functions from human preferences</li>
        <li><strong>AI safety via debate</strong>: Research on using debate for alignment</li>
      </ul>

      <h2>Research Interests</h2>

      <ul>
        <li>Scalable alignment techniques</li>
        <li>Reward learning and preference modeling</li>
        <li>Safe exploration in RL</li>
        <li>Recursive reward modeling</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/papers/deep-rl-from-human-preferences">Deep RL from Human Preferences</Link></li>
      </ul>
    </WikiArticle>
  )
}
