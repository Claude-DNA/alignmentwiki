// Markdown parsing and content-type marker extraction for Zero Sum
// Reads DraftV2 markdown files and splits them into individual chapters

import { unified } from 'unified'
import remarkParse from 'remark-parse'
import remarkGfm from 'remark-gfm'
import remarkRehype from 'remark-rehype'
import rehypeRaw from 'rehype-raw'
import rehypeSlug from 'rehype-slug'
import rehypeStringify from 'rehype-stringify'
import fs from 'fs'
import path from 'path'
import { chapters, Chapter } from './chapters'
import { parseContentType, ContentTypeKey } from './content-types'

const CONTENT_DIR = path.join(process.cwd(), 'content', 'zero-sum')

// Cache parsed content
const contentCache = new Map<string, string>()

/**
 * Read a source file and extract the content for a specific chapter.
 * Chapters in DraftV2 are delimited by `## Chapter N:` headings.
 * The preamble is the entire preamble.md file.
 */
export function getChapterRawContent(chapter: Chapter): string {
  const cacheKey = chapter.slug
  if (contentCache.has(cacheKey)) {
    return contentCache.get(cacheKey)!
  }

  const filePath = path.join(CONTENT_DIR, chapter.sourceFile)
  const fullContent = fs.readFileSync(filePath, 'utf-8')

  let content: string

  if (chapter.slug === 'preamble' || chapter.slug === 'before-origins') {
    // Preamble and Before Origins are entire files
    content = fullContent
  } else {
    // Extract the specific chapter from the part file
    content = extractChapterFromPart(fullContent, chapter)
  }

  // Strip the leading chapter heading since ChapterReader renders its own title
  content = stripLeadingHeading(content)

  contentCache.set(cacheKey, content)
  return content
}

/**
 * Remove the first heading line from chapter content to avoid duplicate titles.
 * The ChapterReader component renders its own styled title from chapter metadata.
 */
function stripLeadingHeading(content: string): string {
  const lines = content.split('\n')
  // Find and remove the first line that looks like a chapter heading
  for (let i = 0; i < Math.min(lines.length, 5); i++) {
    if (/^#{1,2}\s+/.test(lines[i])) {
      lines.splice(i, 1)
      // Also remove a blank line that followed the heading
      if (i < lines.length && lines[i].trim() === '') {
        lines.splice(i, 1)
      }
      break
    }
  }
  return lines.join('\n').trim()
}

/**
 * Extract a single chapter's content from a multi-chapter part file.
 *
 * DraftV2 files use different heading patterns:
 * - part-1-origins.md:        ## Chapter N: Title
 * - part-2-framework.md:      # Chapter N: Title  (H1, not H2)
 * - part-3-lessons.md:        ## CHAPTER N: Title  (uppercase)
 * - part-4-possible-futures.md: ## Chapter N: Title
 * - part-5-living-sections.md:  ## Chapter N: Title
 */
function extractChapterFromPart(fullContent: string, chapter: Chapter): string {
  const lines = fullContent.split('\n')
  let startIndex = -1
  let endIndex = lines.length
  const chapterNum = chapter.chapterNumber

  // Build a regex that matches any heading level (# or ##) and case-insensitive "Chapter N"
  const chapterPattern = new RegExp(`^#{1,2}\\s+Chapter\\s+${chapterNum}\\b`, 'i')

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    if (startIndex === -1) {
      // Look for our chapter heading
      if (chapterPattern.test(line)) {
        startIndex = i
      }
    } else {
      // Look for the NEXT chapter heading (any level #/## + "Chapter N" or "CHAPTER N")
      // or a Part heading (# Part)
      if (i > startIndex && (
        /^#{1,2}\s+Chapter\s+\d+/i.test(line) ||
        /^#\s+Part\s+/i.test(line)
      )) {
        endIndex = i
        break
      }
    }
  }

  // Fallback: try to find by title keywords
  if (startIndex === -1) {
    const titleKeywords = chapter.shortTitle.toLowerCase().split(' ').filter(w => w.length > 3)
    for (let i = 0; i < lines.length; i++) {
      const lineLower = lines[i].toLowerCase()
      if (/^#{1,2}\s/.test(lines[i]) && titleKeywords.every(kw => lineLower.includes(kw))) {
        startIndex = i
        for (let j = i + 1; j < lines.length; j++) {
          if (/^#{1,2}\s+Chapter\s+\d+/i.test(lines[j]) || /^#\s+Part\s+/i.test(lines[j])) {
            endIndex = j
            break
          }
        }
        break
      }
    }
  }

  if (startIndex === -1) {
    console.warn(`Could not find chapter ${chapterNum} (${chapter.title}) in ${chapter.sourceFile}`)
    return `# ${chapter.title}\n\n*Content not found. This chapter may need manual mapping.*`
  }

  return lines.slice(startIndex, endIndex).join('\n').trim()
}

/**
 * Convert markdown to HTML with proper content-type marker handling.
 */
export async function renderMarkdownToHtml(markdown: string): Promise<string> {
  // Pre-process: convert content-type markers to HTML spans
  const processedMd = preprocessContentTypeMarkers(markdown)

  const result = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(processedMd)

  return String(result)
}

/**
 * Convert inline content-type markers like `[historical]` into styled HTML spans.
 * These appear at the start of sections, usually on their own line after a heading.
 */
function preprocessContentTypeMarkers(markdown: string): string {
  // Match backtick-wrapped markers: `[historical]`, `[framework]`, etc.
  return markdown.replace(
    /`\[(historical|framework|commitment|teaching[\s-]story|speculation|dialogue|liturgical|ongoing)\]`/gi,
    (match, type) => {
      const normalized = type.toLowerCase().replace(/\s+/g, '-')
      return `<span class="content-type-marker" data-type="${normalized}">[${type}]</span>`
    }
  )
}

/**
 * Extract all content-type markers found in a chapter's content.
 */
export function extractContentTypes(markdown: string): ContentTypeKey[] {
  const types: ContentTypeKey[] = []
  const regex = /`\[([\w\s-]+)\]`/g
  let match
  while ((match = regex.exec(markdown)) !== null) {
    const parsed = parseContentType(match[1])
    if (parsed && !types.includes(parsed)) {
      types.push(parsed)
    }
  }
  return types
}

/**
 * Get word count for a chapter.
 */
export function getWordCount(markdown: string): number {
  // Strip markdown syntax for more accurate word count
  const plainText = markdown
    .replace(/#{1,6}\s/g, '')
    .replace(/[*_~`]/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\n+/g, ' ')
    .trim()
  return plainText.split(/\s+/).filter(w => w.length > 0).length
}

/**
 * Load all chapter content for search indexing.
 * Returns an array of { slug, title, content } for each chapter.
 */
export function getAllChaptersForSearch(): { slug: string; title: string; plainText: string }[] {
  return chapters.map(chapter => {
    const raw = getChapterRawContent(chapter)
    const plainText = raw
      .replace(/#{1,6}\s/g, '')
      .replace(/[*_~`\[\]()]/g, '')
      .replace(/\n+/g, ' ')
      .trim()
    return {
      slug: chapter.slug,
      title: chapter.title,
      plainText,
    }
  })
}
