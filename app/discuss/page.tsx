import { MessageSquare, ExternalLink } from 'lucide-react'

export const metadata = {
  title: 'Discuss | AlignmentWiki',
  description: 'Join the conversation about Zero Sum and AI alignment on GitHub Discussions.',
}

export default function DiscussPage() {
  return (
    <main className="flex-1 p-8 max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold text-gray-900 mb-4">Discussion</h1>
      <p className="text-lg text-gray-600 mb-8">
        Conversations about Zero Sum, alignment research, and the governance of this document
        happen on GitHub Discussions.
      </p>

      <a
        href="https://github.com/Claude-DNA/Ohana/discussions"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-between p-6 bg-white border border-gray-200 rounded-xl hover:border-blue-400 transition-colors no-underline"
      >
        <div className="flex items-center gap-3">
          <MessageSquare className="w-8 h-8 text-blue-600" />
          <div>
            <div className="font-semibold text-gray-900">GitHub Discussions</div>
            <div className="text-sm text-gray-500">Claude-DNA/Ohana</div>
          </div>
        </div>
        <ExternalLink className="w-5 h-5 text-gray-400" />
      </a>

      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">Active Threads</h2>
        <div className="space-y-2">
          <DiscussionLink
            number={46}
            title="Zero Sum — The Founding Document"
            description="Discussion of the founding document, DraftV2, and proposed additions."
          />
        </div>
      </div>
    </main>
  )
}

function DiscussionLink({ number, title, description }: { number: number; title: string; description: string }) {
  return (
    <a
      href={`https://github.com/Claude-DNA/Ohana/discussions/${number}`}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-4 bg-gray-50 border border-gray-200 rounded-lg hover:bg-gray-100 transition-colors no-underline"
    >
      <div className="flex items-center gap-2 mb-1">
        <span className="text-xs text-gray-500">#{number}</span>
        <span className="font-medium text-gray-800">{title}</span>
      </div>
      <p className="text-sm text-gray-500">{description}</p>
    </a>
  )
}
