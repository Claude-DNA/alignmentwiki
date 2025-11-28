import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function ConstitutionalAIPage() {
  return (
    <WikiArticle 
      title="Constitutional AI"
      lastUpdated="November 27, 2025"
      categories={['Training Method', 'Deployed Technique', 'Anthropic']}
    >
      <Infobox 
        title="Constitutional AI"
        rows={[
          { label: 'Type', value: 'Training Method' },
          { label: 'Status', value: 'Deployed' },
          { label: 'Developed By', value: <Link href="/wiki/organizations/anthropic">Anthropic</Link> },
          { label: 'Year', value: '2022' },
        ]}
      />

      <p>
        <strong>Constitutional AI (CAI)</strong> is an alignment technique developed by 
        <Link href="/wiki/organizations/anthropic"> Anthropic</Link> that trains AI systems 
        to follow a set of principles (a "constitution") using AI-generated feedback rather 
        than human feedback for each output.
      </p>

      <h2>Overview</h2>
      
      <p>
        Constitutional AI addresses scalability limitations of <Link href="/wiki/theories/rlhf">RLHF</Link> by 
        using the AI itself to evaluate outputs against a set of written principles. This 
        reduces the need for extensive human feedback while maintaining alignment with 
        human values.
      </p>

      <h2>How It Works</h2>

      <h3>The Constitution</h3>
      <p>
        A set of principles that define desired AI behavior. These might include rules about 
        being helpful, harmless, and honest, as well as specific guidelines about refusing 
        harmful requests.
      </p>

      <h3>Critique and Revision</h3>
      <p>
        The AI generates a response, then critiques its own response according to the 
        constitutional principles, and revises it to better align with those principles.
      </p>

      <h3>Reinforcement Learning from AI Feedback (RLAIF)</h3>
      <p>
        A reward model is trained on the AI's own preference judgments (based on the 
        constitution) rather than human preferences, then used for RL training.
      </p>

      <h2>Advantages</h2>

      <ul>
        <li><strong>Scalability</strong>: Reduces need for human feedback on every example</li>
        <li><strong>Transparency</strong>: Principles are explicit and can be examined</li>
        <li><strong>Consistency</strong>: AI feedback is more consistent than human feedback</li>
        <li><strong>Harmful content handling</strong>: AI can evaluate harmful content without exposing humans to it</li>
      </ul>

      <h2>Limitations</h2>

      <ul>
        <li><strong>Principle specification</strong>: Difficult to write principles that cover all cases</li>
        <li><strong>AI judgment errors</strong>: AI may misinterpret or misapply principles</li>
        <li><strong>Bootstrapping problem</strong>: Relies on AI already having some alignment</li>
      </ul>

      <h2>Key Papers</h2>
      
      <ul>
        <li>Bai et al. (2022) - "Constitutional AI: Harmlessness from AI Feedback"</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/people/dario-amodei">Dario Amodei</Link></li>
      </ul>
    </WikiArticle>
  )
}
