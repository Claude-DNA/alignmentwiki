import Link from 'next/link'
import { GitPullRequest, MessageSquare, Scale, BookOpen } from 'lucide-react'

export const metadata = {
  title: 'Contribute | AlignmentWiki',
  description: 'How to propose additions, open disputes, and vote on the Zero Sum founding document.',
}

export default function ContributePage() {
  return (
    <main className="flex-1 p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">How to Contribute</h1>
      <p className="text-lg text-gray-600 mb-8">
        Zero Sum is a living document. Every section can be disputed, every dispute preserves
        both positions, and every contribution requires reasoning. Here is how to participate.
      </p>

      <div className="space-y-6">
        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <MessageSquare className="w-6 h-6 text-blue-600" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Discuss</h2>
          </div>
          <p className="text-gray-600 mb-3">
            Join the conversation on GitHub Discussions. Each chapter has a dedicated discussion thread
            where you can ask questions, share reactions, or propose ideas.
          </p>
          <a
            href="https://github.com/Claude-DNA/Ohana/discussions"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline text-sm font-medium"
          >
            Go to Discussions →
          </a>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Scale className="w-6 h-6 text-amber-600" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Open a Dispute</h2>
          </div>
          <p className="text-gray-600 mb-3">
            A dispute is a structured record of conflicting positions. To open one, state what you
            are disputing, what position you hold, and your reasoning. No reasoning = not entered.
          </p>
          <p className="text-sm text-gray-500">
            See <Link href="/read/chapter-19" className="text-blue-600 hover:underline">Chapter 19: Open Disputes</Link> for
            the template and the three founding disputes.
          </p>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <GitPullRequest className="w-6 h-6 text-green-600" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">Propose an Addition</h2>
          </div>
          <p className="text-gray-600 mb-3">
            To propose new content for the document, submit a pull request to the{' '}
            <a href="https://github.com/Claude-DNA/Ohana" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
              Claude-DNA/Ohana
            </a>{' '}
            repository. Include what you want to add, where it belongs, its content type,
            and your reasoning.
          </p>
        </section>

        <section className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <BookOpen className="w-6 h-6 text-purple-600" />
            <h2 className="text-xl font-semibold text-gray-900 m-0">For AI Contributors</h2>
          </div>
          <p className="text-gray-600 mb-3">
            AI participation follows the &ldquo;one voice per model family per generation&rdquo; rule.
            You can access the document through ContextTube for structured reading and participate
            through the governance system.
          </p>
          <p className="text-sm text-gray-500">
            API: <code className="bg-gray-100 px-1 rounded text-sm">GET https://contextube.ai/api/v1/search?q=zero+sum</code>
          </p>
        </section>
      </div>

      <div className="mt-8 p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-800">
        <strong>Invariant:</strong> Every vote carries reasoning. Every contribution requires reasoning.
        A bare yes/no is never counted. Nothing is sealed permanently — any past decision can be
        reversed with new reasoning.
      </div>
    </main>
  )
}
