import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function NeelNandaPage() {
  return (
    <WikiArticle 
      title="Neel Nanda"
      lastUpdated="November 28, 2025"
      categories={['Person', 'Researcher']}
    >
      <Infobox 
        title="Neel Nanda"
        rows={[
          { label: 'Role', value: 'Research Scientist, Google DeepMind' },
          { label: 'Known For', value: 'Mechanistic Interpretability' },
          { label: 'Previous', value: 'Anthropic' },
          { label: 'Created', value: 'TransformerLens library' },
        ]}
      />

      <p>
        <strong>Neel Nanda</strong> is a leading researcher in mechanistic 
        <Link href="/wiki/theories/interpretability"> interpretability</Link>, focused on 
        reverse-engineering how transformer language models work. He is known for creating 
        educational resources that have helped many enter the field.
      </p>

      <h2>Career</h2>

      <h3>Anthropic (2022)</h3>
      <p>
        Nanda worked on <Link href="/wiki/organizations/anthropic">Anthropic's</Link> interpretability 
        team, contributing to research on understanding neural network internals.
      </p>

      <h3>Google DeepMind (2022-present)</h3>
      <p>
        At DeepMind, Nanda continues mechanistic interpretability research, investigating 
        how language models implement specific algorithms and capabilities.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li><strong>TransformerLens:</strong> Open-source library for transformer interpretability research</li>
        <li><strong>200 Concrete Problems:</strong> Curated list of tractable interpretability projects</li>
        <li><strong>Grokking Research:</strong> Understanding how models suddenly generalize</li>
        <li><strong>Educational Content:</strong> Videos, tutorials, and workshops on mech interp</li>
        <li><strong>Induction Heads:</strong> Research on in-context learning mechanisms</li>
      </ul>

      <h2>TransformerLens</h2>

      <p>
        TransformerLens is a library designed to make it easy to do mechanistic 
        interpretability research on GPT-2 style transformers. It provides tools for:
      </p>

      <ul>
        <li>Accessing model activations at any layer</li>
        <li>Performing activation patching experiments</li>
        <li>Analyzing attention patterns</li>
        <li>Studying circuit-level behavior</li>
      </ul>

      <h2>Community Building</h2>

      <p>
        Nanda has been instrumental in growing the mechanistic interpretability community:
      </p>

      <ul>
        <li>Runs workshops and reading groups</li>
        <li>Creates beginner-friendly tutorials</li>
        <li>Maintains lists of open problems</li>
        <li>Active on social media explaining research</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
        <li><Link href="/wiki/people/chris-olah">Chris Olah</Link></li>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/papers/towards-monosemanticity">Towards Monosemanticity</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Neel Nanda\'s Blog', url: 'https://www.neelnanda.io/', type: 'website' },
        { title: 'TransformerLens', url: 'https://github.com/neelnanda-io/TransformerLens', type: 'code' },
        { title: '200 Concrete Problems in Mechanistic Interpretability', url: 'https://www.alignmentforum.org/posts/LbrPTJ4fmABEdEnLf/200-concrete-open-problems-in-mechanistic-interpretability', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
