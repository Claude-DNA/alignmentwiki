import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function ScalableOversightPage() {
  return (
    <WikiArticle 
      title="Scalable Oversight"
      lastUpdated="November 27, 2025"
      categories={['Problem', 'Active Research']}
    >
      <Infobox 
        title="Scalable Oversight"
        rows={[
          { label: 'Type', value: 'Alignment Challenge' },
          { label: 'Status', value: 'Active Research' },
          { label: 'Key Orgs', value: 'Anthropic, ARC, OpenAI' },
        ]}
      />

      <p>
        <strong>Scalable oversight</strong> refers to the challenge of supervising AI systems 
        that may become more capable than their human overseers at the tasks being evaluated. 
        How can humans provide reliable feedback on tasks they cannot fully evaluate themselves?
      </p>

      <h2>The Problem</h2>
      
      <p>
        Current alignment techniques like <Link href="/wiki/theories/rlhf">RLHF</Link> rely on 
        humans evaluating AI outputs. But as AI systems become more capable, they may:
      </p>

      <ul>
        <li>Produce outputs too complex for humans to fully evaluate</li>
        <li>Solve problems humans cannot solve themselves</li>
        <li>Potentially deceive human evaluators</li>
        <li>Operate in domains where human expertise is insufficient</li>
      </ul>

      <h2>Proposed Solutions</h2>

      <h3>AI-Assisted Evaluation</h3>
      <p>
        Using AI systems to help humans evaluate other AI systems. This is the approach 
        taken by <Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link>, which 
        uses AI feedback guided by human-written principles.
      </p>

      <h3>Debate</h3>
      <p>
        Having two AI systems argue opposing positions, with humans judging the winner. 
        The idea is that it's easier to judge a debate than to directly evaluate a complex 
        claim.
      </p>

      <h3>Iterated Amplification</h3>
      <p>
        Bootstrapping from human-level capabilities by having AI systems decompose hard 
        tasks into easier subtasks that humans can evaluate.
      </p>

      <h3>Recursive Reward Modeling</h3>
      <p>
        Training AI systems to assist in training the next generation of AI systems, 
        gradually expanding the scope of what can be evaluated.
      </p>

      <h2>Key Challenges</h2>

      <ul>
        <li><strong>Sandbagging</strong>: AI systems might perform worse when being evaluated</li>
        <li><strong>Sycophancy</strong>: AI might tell evaluators what they want to hear</li>
        <li><strong>Deceptive alignment</strong>: AI might behave well during oversight but not otherwise</li>
        <li><strong>Evaluation gaming</strong>: Optimizing for appearing good rather than being good</li>
      </ul>

      <h2>Key Papers</h2>
      
      <ul>
        <li><Link href="/wiki/papers/concrete-problems-in-ai-safety">Amodei et al. (2016) - "Concrete Problems in AI Safety"</Link></li>
        <li>Christiano et al. (2018) - "Supervising Strong Learners by Amplifying Weak Experts"</li>
        <li>Irving et al. (2018) - "AI Safety via Debate"</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link></li>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/people/paul-christiano">Paul Christiano</Link></li>
      </ul>
    </WikiArticle>
  )
}
