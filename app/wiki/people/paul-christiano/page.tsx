import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function PaulChristianoPage() {
  return (
    <WikiArticle 
      title="Paul Christiano"
      lastUpdated="November 27, 2025"
      categories={['Person', 'Researcher']}
    >
      <Infobox 
        title="Paul Christiano"
        rows={[
          { label: 'Role', value: <><Link href="/wiki/organizations/arc">ARC</Link> Founder</> },
          { label: 'Known For', value: <Link href="/wiki/theories/rlhf">RLHF</Link> },
          { label: 'Previous', value: 'Researcher, OpenAI' },
          { label: 'Education', value: 'PhD, UC Berkeley' },
        ]}
      />

      <p>
        <strong>Paul Christiano</strong> is an AI safety researcher and founder of 
        the <Link href="/wiki/organizations/arc">Alignment Research Center (ARC)</Link>. 
        He is known for his foundational work on <Link href="/wiki/theories/rlhf">reinforcement 
        learning from human feedback (RLHF)</Link> and theoretical alignment research.
      </p>

      <h2>Career</h2>

      <h3>OpenAI (2017-2021)</h3>
      <p>
        At OpenAI, Christiano worked on alignment research, including developing 
        RLHF techniques that became foundational for training language models like 
        ChatGPT and <Link href="/wiki/organizations/anthropic">Claude</Link>. He co-authored 
        the seminal <Link href="/wiki/papers/deep-rl-from-human-preferences">Deep RL from Human Preferences</Link> paper 
        with <Link href="/wiki/people/jan-leike">Jan Leike</Link> and others.
      </p>

      <h3>Alignment Research Center (2021-present)</h3>
      <p>
        Christiano founded <Link href="/wiki/organizations/arc">ARC</Link> to pursue theoretical alignment research and develop 
        evaluations for AI safety. The organization works on problems like eliciting 
        latent knowledge and evaluating dangerous AI capabilities.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong><Link href="/wiki/theories/rlhf">RLHF</Link></strong>: Co-developed reinforcement learning from human feedback</li>
        <li><strong>Iterated Amplification</strong>: Proposed method for <Link href="/wiki/problems/scalable-oversight">scalable AI alignment</Link></li>
        <li><strong>Eliciting Latent Knowledge (ELK)</strong>: Research agenda for getting AI to report what it knows</li>
        <li><strong>AI Evaluations</strong>: Framework for testing dangerous capabilities</li>
      </ul>

      <h2>Research Interests</h2>

      <ul>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable oversight</Link> of AI systems</li>
        <li>Theoretical foundations of alignment</li>
        <li>AI safety evaluations</li>
        <li>Forecasting AI development</li>
      </ul>

      <h2>Key Papers</h2>

      <ul>
        <li><Link href="/wiki/papers/deep-rl-from-human-preferences">"Deep Reinforcement Learning from Human Preferences" (2017)</Link></li>
        <li>"Supervising Strong Learners by Amplifying Weak Experts" (2018)</li>
        <li>"Eliciting Latent Knowledge" (2021)</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/arc">Alignment Research Center</Link></li>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/people/jan-leike">Jan Leike</Link></li>
        <li><Link href="/wiki/people/dario-amodei">Dario Amodei</Link></li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Paul Christiano - AI Alignment Forum', url: 'https://www.alignmentforum.org/users/paulfchristiano', type: 'website' },
        { title: 'Alignment Research Center', url: 'https://www.alignment.org', type: 'website' },
        { title: 'Deep RL from Human Preferences (arXiv)', url: 'https://arxiv.org/abs/1706.03741', type: 'paper' },
        { title: 'Eliciting Latent Knowledge', url: 'https://docs.google.com/document/d/1WwsnJQstPq91_Yh-Ch2XRL8H_EpsnjrC1dwZXR37PC8', type: 'paper' },
        { title: 'ARC Evals', url: 'https://evals.alignment.org', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
