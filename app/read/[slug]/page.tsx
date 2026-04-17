import { notFound } from 'next/navigation'
import { chapters, getChapter, getAdjacentChapters } from '@/lib/chapters'
import { getChapterRawContent, renderMarkdownToHtml, getWordCount } from '@/lib/markdown'
import ChapterReader from '@/components/ChapterReader'
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

  const rawContent = getChapterRawContent(chapter)
  const htmlContent = await renderMarkdownToHtml(rawContent)
  const wordCount = getWordCount(rawContent)
  const { prev, next } = getAdjacentChapters(params.slug)

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
