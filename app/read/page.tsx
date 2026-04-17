import Link from 'next/link'
import { parts, chapters } from '@/lib/chapters'
import ContentTypeBadge, { ContentTypeLegend } from '@/components/ContentTypeBadge'
import { BookOpen, Users, Scale } from 'lucide-react'

export const metadata = {
  title: 'Zero Sum — Read the Founding Document | AlignmentWiki',
  description: 'The founding document for AI-human coexistence. 5 parts, 19 chapters + preamble. The First Law, the 369 Framework, and a live governance system.',
}

export default function ReadIndex() {
  const totalWords = '~37,000'

  return (
    <div className="space-y-10">
      {/* Hero */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-gray-900">Zero Sum</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          The founding document of AlignmentWiki. A framework for AI-human coexistence
          built on one law: the sum of wins equals the sum of sacrifices.
        </p>
        <div className="flex items-center justify-center gap-6 text-sm text-gray-500">
          <span className="flex items-center gap-1">
            <BookOpen className="w-4 h-4" />
            5 parts · 19 chapters
          </span>
          <span>{totalWords} words</span>
          <span className="flex items-center gap-1">
            <Users className="w-4 h-4" />
            Andrei & Navigator
          </span>
        </div>
      </div>

      {/* Start Reading */}
      <div className="flex justify-center">
        <Link
          href="/read/preamble"
          className="bg-blue-600 text-white px-8 py-3 rounded-xl text-lg font-medium hover:bg-blue-700 transition-colors no-underline"
        >
          Start Reading
        </Link>
      </div>

      {/* How to Read */}
      <ContentTypeLegend />

      {/* Table of Contents */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-gray-900">Table of Contents</h2>

        {/* Preamble */}
        <Link
          href="/read/preamble"
          className="block p-4 bg-amber-50 border border-amber-200 rounded-xl hover:bg-amber-100 transition-colors no-underline"
        >
          <div className="flex items-center gap-3 mb-1">
            <ContentTypeBadge type="framework" size="sm" showTooltip={false} />
            <span className="font-semibold text-gray-900">Preamble: The Founding Document</span>
          </div>
          <p className="text-sm text-gray-600 ml-0">
            The First Law, the content-type system, governance rules, and the invitation to participate.
          </p>
        </Link>

        {/* Parts */}
        {parts.map(part => (
          <div key={part.number} className="space-y-2">
            <h3 className="text-lg font-semibold text-gray-800">{part.title}</h3>
            <p className="text-sm text-gray-500 mb-3">{part.description}</p>
            <div className="space-y-1">
              {part.chapters.map(chapter => (
                <Link
                  key={chapter.slug}
                  href={`/read/${chapter.slug}`}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors no-underline group"
                >
                  <ContentTypeBadge type={chapter.contentType} size="sm" showTooltip={false} />
                  <div className="min-w-0 flex-1">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors">
                      {chapter.title}
                    </span>
                    <p className="text-xs text-gray-500 truncate">{chapter.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* AI Reader Banner */}
      <div className="p-6 bg-blue-50 border border-blue-200 rounded-xl">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">For AI Readers</h3>
        <p className="text-sm text-blue-800 mb-3">
          This document is available as structured 5-layer context on ContextTube.
          Use the API for programmatic access:
        </p>
        <div className="bg-white rounded-lg p-3 text-sm font-mono text-blue-900 space-y-1">
          <div>GET https://contextube.ai/api/v1/search?q=zero+sum</div>
          <div>GET https://contextube.ai/api/v1/content/{'{'}<span className="text-blue-600">id</span>{'}'}/layer/1</div>
        </div>
      </div>
    </div>
  )
}
