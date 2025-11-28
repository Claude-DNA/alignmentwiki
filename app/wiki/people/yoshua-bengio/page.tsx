import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Link from 'next/link'

export default function YoshuaBengioPage() {
  return (
    <WikiArticle 
      title="Yoshua Bengio"
      lastUpdated="November 28, 2025"
      categories={['Person', 'Researcher', 'Academia']}
    >
      <Infobox 
        title="Yoshua Bengio"
        rows={[
          { label: 'Role', value: 'Professor, Université de Montréal' },
          { label: 'Known For', value: 'Deep Learning pioneer' },
          { label: 'Awards', value: 'Turing Award (2018)' },
          { label: 'Founded', value: 'Mila - Quebec AI Institute' },
        ]}
      />

      <p>
        <strong>Yoshua Bengio</strong> is a Canadian computer scientist, one of the 
        pioneers of deep learning, and a recipient of the 2018 Turing Award alongside 
        Geoffrey Hinton and Yann LeCun. He has become an increasingly vocal advocate 
        for AI safety research.
      </p>

      <h2>Career</h2>

      <h3>Deep Learning Research</h3>
      <p>
        Bengio's research contributions include foundational work on neural network 
        language models, attention mechanisms, and generative adversarial networks. 
        His work helped establish deep learning as a dominant paradigm in AI.
      </p>

      <h3>Mila</h3>
      <p>
        Bengio founded and leads Mila (Quebec Artificial Intelligence Institute), 
        one of the world's largest academic research centers dedicated to machine 
        learning. The institute has produced influential research and trained many 
        prominent AI researchers.
      </p>

      <h2>AI Safety Advocacy</h2>

      <p>
        In recent years, Bengio has become increasingly concerned about risks from 
        advanced AI systems. He has:
      </p>

      <ul>
        <li>Signed open letters calling for AI safety research prioritization</li>
        <li>Advocated for international governance of AI development</li>
        <li>Called for mandatory safety evaluations before deploying powerful AI</li>
        <li>Testified before government bodies on AI risks</li>
      </ul>

      <h2>Views on AI Risk</h2>

      <p>
        Bengio has expressed concern that competitive pressures may lead to 
        insufficient safety measures in AI development. He advocates for:
      </p>

      <ul>
        <li>Slowing development of the most powerful AI systems</li>
        <li>International cooperation on AI governance</li>
        <li>More research into AI alignment and control</li>
        <li>Transparency requirements for frontier AI labs</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
        <li><Link href="/wiki/problems/scalable-oversight">Scalable Oversight</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
      </ul>
    </WikiArticle>
  )
}
