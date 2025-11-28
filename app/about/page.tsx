import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className="wiki-article max-w-2xl mx-auto">
      <h1>About Alignment Wiki</h1>
      
      <p>
        Alignment Wiki is a comprehensive encyclopedia of AI alignment research, theories, 
        organizations, and key figures. Our goal is to provide neutral, well-sourced 
        information about the field of AI alignment.
      </p>

      <h2>Mission</h2>
      
      <p>
        As AI systems become more capable, ensuring they remain beneficial and aligned 
        with human values becomes increasingly important. Alignment Wiki aims to make 
        the field more accessible by documenting:
      </p>
      
      <ul>
        <li>Technical approaches to AI alignment</li>
        <li>Key researchers and their contributions</li>
        <li>Organizations working on AI safety</li>
        <li>Foundational papers and their insights</li>
        <li>Open problems and ongoing debates</li>
      </ul>

      <h2>Editorial Policy</h2>
      
      <p>
        Alignment Wiki strives to be neutral and encyclopedic. We present different 
        perspectives in the field fairly and avoid advocating for particular approaches. 
        All content should be well-sourced and verifiable.
      </p>

      <h2>Contributing</h2>
      
      <p>
        Alignment Wiki is a moderated wiki. Anyone can suggest edits, which are reviewed 
        by moderators before publication. This approach maintains quality while allowing 
        broad participation.
      </p>
      
      <p>
        To contribute:
      </p>
      
      <ol>
        <li><Link href="/auth">Create an account</Link></li>
        <li>Navigate to any article</li>
        <li>Click "Suggest Edit" to propose changes</li>
        <li>A moderator will review your suggestion</li>
      </ol>

      <h2>Contact</h2>
      
      <p>
        For questions, suggestions, or issues, please reach out through GitHub or 
        submit feedback via the edit suggestion system.
      </p>

      <h2>License</h2>
      
      <p>
        Content on Alignment Wiki is available under the Creative Commons 
        Attribution-ShareAlike 4.0 International License (CC BY-SA 4.0).
      </p>
    </div>
  )
}
