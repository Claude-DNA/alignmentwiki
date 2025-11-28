import WikiArticle from '@/components/WikiArticle'
import Infobox from '@/components/Infobox'
import Sources from '@/components/Sources'
import Link from 'next/link'

export default function RedwoodResearchPage() {
  return (
    <WikiArticle 
      title="Redwood Research"
      lastUpdated="November 28, 2025"
      categories={['Organization', 'AI Safety', 'Research Lab', 'Nonprofit']}
    >
      <Infobox 
        title="Redwood Research"
        rows={[
          { label: 'Type', value: 'AI Safety Research Lab' },
          { label: 'Founded', value: '2021' },
          { label: 'Founders', value: 'Nate Thomas, Buck Shlegeris' },
          { label: 'Headquarters', value: 'Berkeley, CA' },
          { label: 'Focus', value: 'Applied alignment research' },
        ]}
      />

      <p>
        <strong>Redwood Research</strong> is a nonprofit AI safety research lab focused on 
        applied alignment research. The organization works on practical techniques for 
        making AI systems safer, with a focus on empirical approaches rather than 
        theoretical frameworks.
      </p>

      <h2>Overview</h2>
      
      <p>
        Founded by researchers from the effective altruism community, Redwood Research 
        takes a hands-on approach to alignment. They work directly with language models 
        to develop and test safety techniques that can be applied to current systems.
      </p>

      <h2>Key Research Areas</h2>

      <h3>Adversarial Training</h3>
      <p>
        Redwood developed techniques for training models to be robust against adversarial 
        inputs, including methods for preventing language models from producing harmful 
        outputs even when prompted to do so.
      </p>

      <h3>Causal Scrubbing</h3>
      <p>
        The lab developed "causal scrubbing," a technique for rigorously testing claims 
        about how neural networks work internally. This contributes to the broader field of 
        <Link href="/wiki/theories/interpretability">interpretability</Link>.
      </p>

      <h3>Activation Engineering</h3>
      <p>
        Research on directly manipulating model activations to control behavior, related to 
        steering vectors and representation engineering approaches.
      </p>

      <h2>Notable Projects</h2>

      <ul>
        <li>Adversarial training for language models</li>
        <li>Causal scrubbing methodology</li>
        <li>Injury classifier project</li>
        <li>Representation engineering research</li>
      </ul>

      <h2>See Also</h2>
      
      <ul>
        <li><Link href="/wiki/organizations/arc">ARC (Alignment Research Center)</Link></li>
        <li><Link href="/wiki/organizations/miri">MIRI</Link></li>
        <li><Link href="/wiki/theories/interpretability">Interpretability</Link></li>
        <li><Link href="/wiki/problems/deceptive-alignment">Deceptive Alignment</Link></li>
      </ul>

      <Sources sources={[
        { title: 'Redwood Research', url: 'https://www.redwoodresearch.org', type: 'website' },
        { title: 'Causal Scrubbing Blog Post', url: 'https://www.alignmentforum.org/posts/JvZhhzycHu2Yd57RN/causal-scrubbing-a-method-for-rigorously-testing', type: 'paper' },
      ]} />
    </WikiArticle>
  )
}
