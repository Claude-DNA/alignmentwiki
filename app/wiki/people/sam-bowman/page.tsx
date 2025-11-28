import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function SamBowmanPage() {
  return (
    <WikiArticle 
      title="Sam Bowman"
      lastUpdated="November 28, 2025"
      categories={['Person', 'Researcher']}
    >
      <Infobox 
        title="Sam Bowman"
        rows={[
          { label: 'Role', value: <><Link href="/wiki/organizations/anthropic">Anthropic</Link> Research Scientist</> },
          { label: 'Known For', value: 'NLP Evaluation, Safety Benchmarks' },
          { label: 'Previous', value: 'Professor, NYU' },
          { label: 'Education', value: 'PhD, Stanford' },
        ]}
      />

      <p>
        <strong>Sam Bowman</strong> is a researcher at <Link href="/wiki/organizations/anthropic">Anthropic</Link> 
        specializing in natural language processing and AI evaluation. He is known for 
        creating influential benchmarks for measuring language model capabilities and safety.
      </p>

      <h2>Career</h2>

      <h3>New York University (2016-2023)</h3>
      <p>
        As a professor at NYU, Bowman led the ML² (Machine Learning for Language) lab. 
        His group developed important benchmarks including SNLI, MultiNLI, and contributed 
        to SuperGLUE.
      </p>

      <h3>Anthropic (2023-present)</h3>
      <p>
        At Anthropic, Bowman works on model evaluation, safety benchmarks, and understanding 
        language model capabilities and limitations.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>SNLI/MultiNLI:</strong> Standard natural language inference benchmarks</li>
        <li><strong>SuperGLUE:</strong> Contributed to difficult language understanding benchmark</li>
        <li><strong>Evaluation Methods:</strong> Techniques for measuring model capabilities</li>
        <li><strong>Safety Benchmarks:</strong> Methods for testing dangerous capabilities</li>
        <li><strong>Sycophancy Research:</strong> Studying when models tell users what they want to hear</li>
      </ul>

      <h2>Research Focus</h2>

      <p>
        Bowman's research addresses critical questions:
      </p>

      <ul>
        <li>How do we measure what language models can actually do?</li>
        <li>When do models exhibit dangerous capabilities?</li>
        <li>How can we detect deception or sycophancy?</li>
        <li>What evaluation methods scale to more capable systems?</li>
      </ul>

      <h2>Selected Publications</h2>

      <ul>
        <li>"A large annotated corpus for learning natural language inference" (2015)</li>
        <li>"A Broad-Coverage Challenge Corpus for Sentence Understanding" (2018)</li>
        <li>"Towards Detecting Whether Language Models Can Be Trusted" (2023)</li>
        <li>"Language Models Don't Always Say What They Think" (2023)</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
        <li><Link href="/wiki/problems/deceptive-alignment">Deceptive Alignment</Link></li>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Sam Bowman - Google Scholar', url: 'https://scholar.google.com/citations?user=kV9XRxYAAAAJ', type: 'website' },
        { title: 'NYU ML² Lab', url: 'https://wp.nyu.edu/ml2/', type: 'website' },
        { title: 'Anthropic Research', url: 'https://www.anthropic.com/research', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
