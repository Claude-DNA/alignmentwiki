'use client'

import { useEffect, useRef } from 'react'
import ContentTypeBadge from './ContentTypeBadge'
import ChapterNav from './ChapterNav'
import CrossReferences from './CrossReferences'
import AIAccessBanner from './AIAccessBanner'
import { Chapter } from '@/lib/chapters'
import { ContentTypeKey, contentTypes } from '@/lib/content-types'

interface ChapterReaderProps {
  chapter: Chapter
  htmlContent: string
  wordCount: number
  prev: Chapter | null
  next: Chapter | null
}

export default function ChapterReader({ chapter, htmlContent, wordCount, prev, next }: ChapterReaderProps) {
  const contentRef = useRef<HTMLDivElement>(null)

  // After render, transform content-type markers in the HTML into styled badges
  useEffect(() => {
    if (!contentRef.current) return
    const markers = contentRef.current.querySelectorAll('.content-type-marker')
    markers.forEach(marker => {
      const type = marker.getAttribute('data-type') as ContentTypeKey
      if (type && contentTypes[type]) {
        const ct = contentTypes[type]
        marker.className = `inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${ct.bgColor} ${ct.textColor} border ${ct.borderColor}`
        marker.textContent = `${ct.label}: ${ct.tooltip}`
      }
    })
  }, [htmlContent])

  const readingTime = Math.ceil(wordCount / 250)

  return (
    <article className="max-w-3xl mx-auto">
      {/* AI Access — top of page so AI visitors find it immediately */}
      <AIAccessBanner compact />

      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <ContentTypeBadge type={chapter.contentType} size="md" />
          <span className="text-sm text-gray-500">
            {wordCount.toLocaleString()} words · {readingTime} min read
          </span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{chapter.title}</h1>
        <p className="text-lg text-gray-600">{chapter.description}</p>
      </header>

      {/* Content */}
      <div
        ref={contentRef}
        className="prose prose-lg max-w-none
          prose-headings:text-gray-900 prose-headings:font-semibold
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4 prose-h2:border-b prose-h2:border-gray-200 prose-h2:pb-2
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
          prose-p:text-gray-700 prose-p:leading-relaxed
          prose-strong:text-gray-900
          prose-em:text-gray-600
          prose-blockquote:border-l-amber-400 prose-blockquote:bg-amber-50 prose-blockquote:py-1 prose-blockquote:px-4 prose-blockquote:rounded-r-lg
          prose-ul:text-gray-700 prose-ol:text-gray-700
          prose-li:text-gray-700
          prose-hr:border-gray-200 prose-hr:my-8
          prose-table:text-sm
          prose-th:bg-gray-50 prose-th:text-left prose-th:font-semibold prose-th:p-3
          prose-td:p-3 prose-td:border-t prose-td:border-gray-100"
        dangerouslySetInnerHTML={{ __html: htmlContent }}
      />

      {/* Cross References */}
      <CrossReferences currentSlug={chapter.slug} />

      {/* Chapter Navigation */}
      <ChapterNav prev={prev} next={next} />

      {/* AI Reader Banner (bottom repeat) */}
      <AIAccessBanner compact />
    </article>
  )
}
