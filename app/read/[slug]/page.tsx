import { notFound } from 'next/navigation'
import { chapters, getChapter, getAdjacentChapters } from '@/lib/chapters'
import { getChapterRawContent, renderMarkdownToHtml, getWordCount } from '@/lib/markdown'
import ChapterReader from '@/components/ChapterReader'
import DisputesPage from '@/components/DisputesPage'
import ContributionLogPage from '@/components/ContributionLogPage'
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
}

// Generate static params for all chapters
export async function generateStaticParams() {
  return chapters.map(chapter => ({
    slug: chapter.slug,
  }))
}

// Generate metadata per chapter
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const chapter = getChapter(params.slug)
  if (!chapter) return { title: 'Not Found' }

  return {
    title: `${chapter.title} | Zero Sum — AlignmentWiki`,
    description: chapter.description,
  }
}

export default async function ChapterPage({ params }: PageProps) {
  const chapter = getChapter(params.slug)
  if (!chapter) notFound()

  const { prev, next } = getAdjacentChapters(params.slug)

  // Dynamic pages for governance chapters
  if (params.slug === 'chapter-18') {
    return <DisputesPage chapter={chapter} prev={prev} next={next} />
  }
  if (params.slug === 'chapter-19') {
    return <ContributionLogPage chapter={chapter} prev={prev} next={next} />
  }

  // Standard markdown chapter
  const rawContent = getChapterRawContent(chapter)
  const htmlContent = await renderMarkdownToHtml(rawContent)
  const wordCount = getWordCount(rawContent)

  return (
    <ChapterReader
      chapter={chapter}
      htmlContent={htmlContent}
      wordCount={wordCount}
      prev={prev}
      next={next}
    />
  )
}
