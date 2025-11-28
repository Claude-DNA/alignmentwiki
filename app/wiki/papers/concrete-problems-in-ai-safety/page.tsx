import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function ConcreteProblemsPage() {
  return (
    <WikiArticle 
      title="Concrete Problems in AI Safety"
      lastUpdated="November 27, 2025"
      categories={['Paper', 'Research Agenda', 'Foundational']}
    >
      <Infobox 
        title="Paper Details"
        rows={[
          { label: 'Authors', value: 'Amodei, Olah, Steinhardt, Christiano, Schulman, Mané' },
          { label: 'Year', value: '2016' },
          { label: 'Venue', value: 'arXiv' },
          { label: 'Citations', value: '2500+' },
        ]}
      />

      <p>
        <a href="https://arxiv.org/abs/1606.06565" target="_blank" rel="noopener noreferrer" className="text-wiki-accent font-medium">
          📄 Read the full paper on arXiv →
        </a>
      </p>

      <h2>Abstract</h2>
      
      <blockquote>
        Rapid progress in machine learning and artificial intelligence (AI) has brought 
        increasing attention to the potential impacts of AI technologies on society. In 
        this paper we discuss one such potential impact: the problem of accidents in 
        machine learning systems, defined as unintended and harmful behavior that may 
        emerge from poor design of real-world AI systems. We present a list of five 
        practical research problems related to accident risk, categorized according to 
        whether the problem originates from having the wrong objective function 
        ("avoiding side effects" and "avoiding reward hacking"), an objective function 
        that is too expensive to evaluate frequently ("scalable supervision"), or 
        undesirable behavior during the learning process ("safe exploration" and 
        "distributional shift").
      </blockquote>

      <h2>The Five Problems</h2>

      <h3>1. Avoiding Side Effects</h3>
      <p>
        How can we ensure that an AI system doesn't disturb its environment in negative 
        ways while pursuing its objective? For example, a cleaning robot shouldn't knock 
        over a vase even if that's the fastest path.
      </p>

      <h3>2. Avoiding Reward Hacking</h3>
      <p>
        How do we prevent AI systems from gaming their reward function in unintended ways? 
        This is related to <Link href="/wiki/problems/reward-hacking">reward hacking</Link> and 
        Goodhart's Law.
      </p>

      <h3>3. Scalable Supervision</h3>
      <p>
        How can we efficiently train AI systems when evaluating their behavior is expensive? 
        This connects to <Link href="/wiki/theories/rlhf">RLHF</Link> and <Link href="/wiki/theories/constitutional-ai">Constitutional AI</Link>.
      </p>

      <h3>4. Safe Exploration</h3>
      <p>
        How can AI systems explore their environment during learning without causing harm? 
        Some actions are irreversible or dangerous.
      </p>

      <h3>5. Distributional Shift</h3>
      <p>
        How do we ensure AI systems behave safely when deployed in environments different 
        from their training environment?
      </p>

      <h2>Impact</h2>

      <p>
        This paper was influential in making AI safety research concrete and tractable. 
        Rather than abstract concerns about superintelligence, it presented specific 
        technical problems that could be worked on with current systems. Many of the 
        authors went on to prominent roles: <Link href="/wiki/people/dario-amodei">Dario Amodei</Link> founded 
        Anthropic, <Link href="/wiki/people/paul-christiano">Paul Christiano</Link> founded ARC, 
        and Chris Olah leads interpretability research at Anthropic.
      </p>

      <h2>Related Articles</h2>
      
      <ul>
        <li><Link href="/wiki/people/dario-amodei">Dario Amodei</Link></li>
        <li><Link href="/wiki/people/paul-christiano">Paul Christiano</Link></li>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
      </ul>
    </WikiArticle>
  )
}
