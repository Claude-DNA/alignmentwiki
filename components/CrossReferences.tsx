import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { getChapter } from '@/lib/chapters'
import ContentTypeBadge from './ContentTypeBadge'
import { getCrossReferences } from '@/lib/cross-references'

interface CrossReferencesProps {
  currentSlug: string
}

export default function CrossReferences({ currentSlug }: CrossReferencesProps) {
  const refs = getCrossReferences(currentSlug)
  if (refs.length === 0) return null

  const relatedChapters = refs
    .map(slug => getChapter(slug))
    .filter(Boolean)

  if (relatedChapters.length === 0) return null

  return (
    <div className="mt-10 pt-8 border-t border-gray-200">
      <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-4">
        Related Chapters
      </h3>
      <div className="grid gap-3">
        {relatedChapters.map(ch => (
          <Link
            key={ch!.slug}
            href={`/read/${ch!.slug}`}
            className="group flex items-center gap-3 p-3 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg no-underline transition-colors"
          >
            <ContentTypeBadge type={ch!.contentType} size="sm" />
            <div className="flex-1 min-w-0">
              <span className="text-sm font-medium text-gray-900 group-hover:text-blue-700 transition-colors">
                {ch!.shortTitle}
              </span>
              <p className="text-xs text-gray-500 truncate mt-0.5">{ch!.description}</p>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 shrink-0 transition-colors" />
          </Link>
        ))}
      </div>
    </div>
  )
}
