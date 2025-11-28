import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function OpenAIPage() {
  return (
    <WikiArticle 
      title="OpenAI"
      lastUpdated="November 28, 2025"
      categories={['Organization', 'AI Company', 'Research Lab']}
    >
      <Infobox 
        title="OpenAI"
        rows={[
          { label: 'Type', value: 'AI Research Company' },
          { label: 'Founded', value: '2015' },
          { label: 'Founders', value: 'Sam Altman, Elon Musk, and others' },
          { label: 'Headquarters', value: 'San Francisco, CA' },
          { label: 'Key Product', value: 'GPT series, ChatGPT' },
        ]}
      />

      <p>
        <strong>OpenAI</strong> is an AI research and deployment company founded in 2015. 
        Originally a nonprofit, it transitioned to a "capped-profit" structure in 2019. 
        OpenAI created ChatGPT and the GPT series of language models, pioneering many 
        techniques in <Link href="/wiki/theories/rlhf">RLHF</Link> and alignment.
      </p>

      <h2>Overview</h2>
      
      <p>
        OpenAI's stated mission is to ensure artificial general intelligence benefits all 
        of humanity. The company has been central to developing and popularizing large 
        language models, and many current AI safety researchers began their careers there, 
        including the founders of <Link href="/wiki/organizations/anthropic">Anthropic</Link>.
      </p>

      <h2>Safety Research</h2>

      <h3>Superalignment Team</h3>
      <p>
        OpenAI established a Superalignment team to work on aligning superintelligent AI 
        systems, led initially by <Link href="/wiki/people/jan-leike">Jan Leike</Link> and 
        Ilya Sutskever. The team focused on <Link href="/wiki/problems/scalable-oversight">scalable oversight</Link> and 
        <Link href="/wiki/problems/eliciting-latent-knowledge"> eliciting latent knowledge</Link>.
      </p>

      <h3>Red Teaming</h3>
      <p>
        OpenAI pioneered adversarial testing and red teaming for AI systems, developing 
        frameworks for identifying potential misuse and harmful capabilities before deployment.
      </p>

      <h2>Key Contributions</h2>

      <ul>
        <li>GPT series (GPT-2, GPT-3, GPT-4, GPT-4o)</li>
        <li>ChatGPT - widely adopted conversational AI</li>
        <li><Link href="/wiki/papers/training-language-models-to-follow-instructions">InstructGPT paper</Link> on RLHF</li>
        <li>DALL-E image generation</li>
        <li>Codex and GitHub Copilot</li>
      </ul>

      <h2>Notable Alumni</h2>

      <ul>
        <li><Link href="/wiki/people/dario-amodei">Dario Amodei</Link> (now at Anthropic)</li>
        <li><Link href="/wiki/people/paul-christiano">Paul Christiano</Link> (now at ARC)</li>
        <li><Link href="/wiki/people/jan-leike">Jan Leike</Link> (now at Anthropic)</li>
        <li><Link href="/wiki/people/chris-olah">Chris Olah</Link> (now at Anthropic)</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/anthropic">Anthropic</Link></li>
        <li><Link href="/wiki/organizations/deepmind">Google DeepMind</Link></li>
        <li><Link href="/wiki/theories/rlhf">RLHF</Link></li>
        <li><Link href="/wiki/papers/training-language-models-to-follow-instructions">InstructGPT Paper</Link></li>
      </ul>

      <Sources sources={[
        { title: 'OpenAI', url: 'https://openai.com', type: 'website' },
        { title: 'OpenAI Research', url: 'https://openai.com/research', type: 'website' },
        { title: 'OpenAI Charter', url: 'https://openai.com/charter', type: 'website' },
      ]} />
    </WikiArticle>
  )
}
