import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function DeepMindPage() {
  return (
    <WikiArticle 
      title="Google DeepMind"
      lastUpdated="November 28, 2025"
      categories={['Organization', 'AI Company', 'Research Lab']}
    >
      <Infobox 
        title="Google DeepMind"
        rows={[
          { label: 'Type', value: 'AI Research Lab' },
          { label: 'Founded', value: '2010 (acquired by Google 2014)' },
          { label: 'Founders', value: 'Demis Hassabis, Shane Legg, Mustafa Suleyman' },
          { label: 'Headquarters', value: 'London, UK' },
          { label: 'Parent', value: 'Alphabet Inc.' },
        ]}
      />

      <p>
        <strong>Google DeepMind</strong> is a leading AI research laboratory owned by Alphabet Inc. 
        In 2023, Google Brain and DeepMind merged to form Google DeepMind. The lab has made 
        significant contributions to both AI capabilities and safety research.
      </p>

      <h2>Overview</h2>
      
      <p>
        DeepMind was founded with the mission of "solving intelligence" and using it to benefit 
        humanity. The organization has produced landmark AI systems including AlphaGo, AlphaFold, 
        and Gemini. They maintain active safety and alignment research programs alongside 
        capabilities work.
      </p>

      <h2>Safety Research</h2>

      <h3>Alignment Team</h3>
      <p>
        DeepMind's alignment team works on ensuring AI systems behave as intended. Key research 
        areas include <Link href="/wiki/problems/scalable-oversight">scalable oversight</Link>, 
        reward modeling, and <Link href="/wiki/theories/debate">debate</Link> as an alignment strategy.
      </p>

      <h3>Interpretability</h3>
      <p>
        The lab has a dedicated <Link href="/wiki/theories/interpretability">interpretability</Link> team 
        including researchers like <Link href="/wiki/people/neel-nanda">Neel Nanda</Link> working on 
        mechanistic interpretability of neural networks.
      </p>

      <h2>Notable Contributions</h2>

      <ul>
        <li>AlphaGo - First AI to defeat world champion in Go</li>
        <li>AlphaFold - Protein structure prediction (Nobel Prize 2024)</li>
        <li>Gemini - Multimodal AI model series</li>
        <li>Influential research on <Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li>Safety evaluations and red-teaming frameworks</li>
      </ul>

      <h2>Key People</h2>

      <ul>
        <li>Demis Hassabis - CEO</li>
        <li>Shane Legg - Chief AGI Scientist (coined term "AGI")</li>
        <li><Link href="/wiki/people/neel-nanda">Neel Nanda</Link> - Mechanistic Interpretability</li>
        <li>Rohin Shah - Alignment researcher</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/organizations/openai">OpenAI</Link></li>
        <li><Link href="/wiki/theories/debate">Debate</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Google DeepMind', url: 'https://deepmind.google', type: 'website' },
        { title: 'DeepMind Safety Research', url: 'https://deepmind.google/safety-and-responsibility', type: 'website' },
        { title: 'AlphaFold Protein Structure Database', url: 'https://alphafold.ebi.ac.uk', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
