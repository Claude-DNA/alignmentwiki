import Link from 'next/link'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Chapter } from '@/lib/chapters'

interface ChapterNavProps {
  prev: Chapter | null
  next: Chapter | null
}

export default function ChapterNav({ prev, next }: ChapterNavProps) {
  return (
    <nav className="flex justify-between items-stretch gap-4 mt-12 pt-8 border-t border-gray-200">
      {prev ? (
        <Link
          href={`/read/${prev.slug}`}
          className="flex items-center gap-3 px-5 py-4 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-xl no-underline text-gray-700 transition-colors flex-1 max-w-[48%]"
        >
          <ChevronLeft className="w-5 h-5 shrink-0 text-gray-400" />
          <div className="min-w-0">
            <div className="text-xs text-gray-500 uppercase tracking-wide">Previous</div>
            <div className="text-sm font-medium truncate">{prev.shortTitle}</div>
          </div>
        </Link>
      ) : (
        <div className="flex-1" />
      )}

      {next ? (
        <Link
          href={`/read/${next.slug}`}
          className="flex items-center justify-end gap-3 px-5 py-4 bg-blue-600 hover:bg-blue-700 border border-blue-700 rounded-xl no-underline text-white transition-colors flex-1 max-w-[48%] text-right shadow-sm"
        >
          <div className="min-w-0">
            <div className="text-xs text-blue-200 uppercase tracking-wide font-medium">Continue Reading</div>
            <div className="text-sm font-semibold truncate">{next.shortTitle}</div>
          </div>
          <ChevronRight className="w-5 h-5 shrink-0 text-blue-200" />
        </Link>
      ) : (
        <div className="flex-1" />
      )}
    </nav>
  )
}
