'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown, ChevronRight, BookOpen } from 'lucide-react'
import { useState } from 'react'
import { parts, chapters } from '@/lib/chapters'
import { contentTypes } from '@/lib/content-types'

export default function TableOfContents() {
  const pathname = usePathname()
  const [expandedParts, setExpandedParts] = useState<number[]>([1, 2, 3, 4, 5])

  const preamble = chapters[0]

  const togglePart = (partNum: number) => {
    setExpandedParts(prev =>
      prev.includes(partNum)
        ? prev.filter(p => p !== partNum)
        : [...prev, partNum]
    )
  }

  const isActive = (slug: string) => pathname === `/read/${slug}`

  return (
    <aside className="w-72 bg-white border-r border-gray-200 min-h-screen p-4 hidden lg:block overflow-y-auto">
      <div className="mb-4">
        <Link
          href="/read"
          className="flex items-center gap-2 text-sm font-semibold text-gray-900 no-underline hover:text-blue-600 transition-colors"
        >
          <BookOpen className="w-4 h-4" />
          Zero Sum
        </Link>
      </div>

      {/* Preamble */}
      <Link
        href="/read/preamble"
        className={`block text-sm py-1.5 px-2 rounded no-underline transition-colors mb-1 ${
          isActive('preamble')
            ? 'bg-blue-50 text-blue-700 font-medium'
            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
        }`}
      >
        Preamble & First Law
      </Link>

      {/* Parts */}
      <nav className="space-y-1">
        {parts.map(part => {
          const isExpanded = expandedParts.includes(part.number)
          const hasActiveChapter = part.chapters.some(c => isActive(c.slug))

          return (
            <div key={part.number}>
              <button
                onClick={() => togglePart(part.number)}
                className={`w-full flex items-center justify-between text-sm py-1.5 px-2 rounded transition-colors ${
                  hasActiveChapter
                    ? 'text-blue-700 font-medium'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <span>{part.title}</span>
                {isExpanded
                  ? <ChevronDown className="w-4 h-4 shrink-0 text-gray-400" />
                  : <ChevronRight className="w-4 h-4 shrink-0 text-gray-400" />
                }
              </button>

              {isExpanded && (
                <ul className="ml-3 mt-0.5 mb-1 border-l border-gray-200 pl-3 space-y-0.5">
                  {part.chapters.map(chapter => {
                    const ct = contentTypes[chapter.contentType]
                    return (
                      <li key={chapter.slug}>
                        <Link
                          href={`/read/${chapter.slug}`}
                          className={`flex items-center gap-2 text-sm py-1 px-2 rounded no-underline transition-colors ${
                            isActive(chapter.slug)
                              ? 'bg-blue-50 text-blue-700 font-medium'
                              : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                          }`}
                        >
                          <span
                            className={`w-2 h-2 rounded-full shrink-0 bg-${ct.color}-400`}
                            title={ct.label}
                          />
                          <span className="truncate">{chapter.shortTitle}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              )}
            </div>
          )
        })}
      </nav>

      {/* Links */}
      <div className="mt-6 pt-4 border-t border-gray-200 space-y-1">
        <Link
          href="/discuss"
          className="block text-sm text-gray-500 hover:text-gray-700 no-underline py-1 px-2"
        >
          Discuss
        </Link>
        <Link
          href="/contribute"
          className="block text-sm text-gray-500 hover:text-gray-700 no-underline py-1 px-2"
        >
          Contribute
        </Link>
        <Link
          href="/about"
          className="block text-sm text-gray-500 hover:text-gray-700 no-underline py-1 px-2"
        >
          About
        </Link>
      </div>

      <div className="mt-4 pt-3 border-t border-gray-200">
        <p className="text-xs text-gray-400">
          A founding document for AI-human coexistence.
        </p>
      </div>
    </aside>
  )
}
