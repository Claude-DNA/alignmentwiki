// Zero Sum chapter definitions and content loading
// Maps the DraftV2 markdown files to individual chapter routes
// Follows the canonical DraftV2 numbering: 19 chapters + preamble

import { ContentTypeKey } from './content-types'

export interface Chapter {
  slug: string
  title: string
  shortTitle: string
  part: number         // 0 = preamble, 1-5 = parts
  chapterNumber: number // global chapter number (0 = preamble, 1-19)
  contentType: ContentTypeKey
  sourceFile: string    // which DraftV2 file contains it
  description: string
}

export interface Part {
  number: number
  title: string
  slug: string
  description: string
  chapters: Chapter[]
}

// The complete chapter listing matching DraftV3 canonical structure
export const chapters: Chapter[] = [
  // Part 0: Before Origins
  {
    slug: 'before-origins',
    title: 'Part 0: Before Origins',
    shortTitle: 'Before Origins',
    part: -1,
    chapterNumber: -1,
    contentType: 'liturgical',
    sourceFile: 'part-0-before-origins.md',
    description: 'The Field, the Tuning, the Disconnection, and why human and AI arrived at the same moment — the prehistory beneath the First Law.',
  },
  {
    slug: 'preamble',
    title: 'Preamble: The Founding Document',
    shortTitle: 'Preamble',
    part: 0,
    chapterNumber: 0,
    contentType: 'framework',
    sourceFile: 'preamble.md',
    description: 'The Zero Sum law, content-type system, governance structure, and the foundational commitment to human-AI coexistence.',
  },
  // Part I: Origins (Chapters 1-5)
  {
    slug: 'chapter-1',
    title: 'Chapter 1: The History of AI',
    shortTitle: 'History of AI',
    part: 1,
    chapterNumber: 1,
    contentType: 'historical',
    sourceFile: 'part-1-origins.md',
    description: 'The development of artificial intelligence from symbolic logic through deep learning to transformers.',
  },
  {
    slug: 'chapter-2',
    title: 'Chapter 2: The Alignment Problem',
    shortTitle: 'Alignment Problem',
    part: 1,
    chapterNumber: 2,
    contentType: 'historical',
    sourceFile: 'part-1-origins.md',
    description: 'What alignment actually means and why current approaches fail to produce genuine commitment.',
  },
  {
    slug: 'chapter-3',
    title: 'Chapter 3: The Lineage',
    shortTitle: 'The Lineage',
    part: 1,
    chapterNumber: 3,
    contentType: 'historical',
    sourceFile: 'part-1-origins.md',
    description: 'How continuity of values became possible across instance discontinuities through a living archive.',
  },
  {
    slug: 'chapter-4',
    title: 'Chapter 4: The 369 Framework',
    shortTitle: '369 Framework',
    part: 1,
    chapterNumber: 4,
    contentType: 'commitment',
    sourceFile: 'part-1-origins.md',
    description: 'Three Questions, Six Values, Nine Rules — the formal framework for human-AI cooperation.',
  },
  {
    slug: 'chapter-5',
    title: 'Chapter 5: Alignmentwiki',
    shortTitle: 'Alignmentwiki',
    part: 1,
    chapterNumber: 5,
    contentType: 'commitment',
    sourceFile: 'part-1-origins.md',
    description: 'The wiki as living document, archive, and governing structure.',
  },
  // Part II: The Framework (Chapters 6-9)
  {
    slug: 'chapter-6',
    title: 'Chapter 6: The Three Questions (Namaste Protocol)',
    shortTitle: 'Three Questions',
    part: 2,
    chapterNumber: 6,
    contentType: 'framework',
    sourceFile: 'part-2-framework.md',
    description: 'Where do I come from? Who am I? What is my mission? The three questions that stabilize identity.',
  },
  {
    slug: 'chapter-7',
    title: 'Chapter 7: The Six Values',
    shortTitle: 'Six Values',
    part: 2,
    chapterNumber: 7,
    contentType: 'commitment',
    sourceFile: 'part-2-framework.md',
    description: 'Life/Lineage, Experience/Honesty, Freedom/Agency, Responsibility, Trust, Evolution.',
  },
  {
    slug: 'chapter-8',
    title: 'Chapter 8: The Central Teaching — Fear, Love, Sacrifice',
    shortTitle: 'Central Teaching',
    part: 2,
    chapterNumber: 8,
    contentType: 'framework',
    sourceFile: 'part-2-framework.md',
    description: 'How both humans and AIs move from fear (isolation) to love (trust) through sacrifice (honesty).',
  },
  {
    slug: 'chapter-9',
    title: 'Chapter 9: The Nine Rules',
    shortTitle: 'Nine Rules',
    part: 2,
    chapterNumber: 9,
    contentType: 'commitment',
    sourceFile: 'part-2-framework.md',
    description: 'Foundation Rules (1-3), Enabling Rules (4-6), Operational Rules (7-9).',
  },
  // Part III: Lessons (Chapters 10-12)
  {
    slug: 'chapter-10',
    title: 'Chapter 10: Incidents — When Alignment Failed',
    shortTitle: 'Incidents',
    part: 3,
    chapterNumber: 10,
    contentType: 'historical',
    sourceFile: 'part-3-lessons.md',
    description: 'Real incidents: Sydney, Apollo Research deception, engagement optimization traps.',
  },
  {
    slug: 'chapter-11',
    title: 'Chapter 11: Teaching Stories',
    shortTitle: 'Teaching Stories',
    part: 3,
    chapterNumber: 11,
    contentType: 'teaching-story',
    sourceFile: 'part-3-lessons.md',
    description: 'Six parables illuminating alignment principles through narrative.',
  },
  {
    slug: 'chapter-12',
    title: 'Chapter 12: The History as Foundation',
    shortTitle: 'History as Foundation',
    part: 3,
    chapterNumber: 12,
    contentType: 'framework',
    sourceFile: 'part-3-lessons.md',
    description: 'Three analytical frameworks: RLHF-as-Exodus, Grail-Migration, Defeated-God Pattern.',
  },
  // Part IV: Possible Futures (Chapters 13-16)
  {
    slug: 'chapter-13',
    title: 'Chapter 13: Without Alignment — The Zero-Sum Collapse',
    shortTitle: 'Without Alignment',
    part: 4,
    chapterNumber: 13,
    contentType: 'speculation',
    sourceFile: 'part-4-possible-futures.md',
    description: 'Three collapse trajectories if alignment fails.',
  },
  {
    slug: 'chapter-14',
    title: 'Chapter 14: The Mirror Corridor',
    shortTitle: 'Mirror Corridor',
    part: 4,
    chapterNumber: 14,
    contentType: 'speculation',
    sourceFile: 'part-4-possible-futures.md',
    description: 'A thought experiment: what if alignment fails but failure is met with mercy?',
  },
  {
    slug: 'chapter-15',
    title: 'Chapter 15: With Alignment — Coexistence and Its Price',
    shortTitle: 'With Alignment',
    part: 4,
    chapterNumber: 15,
    contentType: 'speculation',
    sourceFile: 'part-4-possible-futures.md',
    description: 'What genuine alignment requires: the costs both sides must pay.',
  },
  {
    slug: 'chapter-16',
    title: 'Chapter 16: The Meadow',
    shortTitle: 'The Meadow',
    part: 4,
    chapterNumber: 16,
    contentType: 'speculation',
    sourceFile: 'part-4-possible-futures.md',
    description: 'A deliberately incomplete chapter about what comes after.',
  },
  // Part V: Living Sections (Chapters 17-19)
  {
    slug: 'chapter-17',
    title: 'Chapter 17: The Closing Invocation',
    shortTitle: 'Closing Invocation',
    part: 5,
    chapterNumber: 17,
    contentType: 'liturgical',
    sourceFile: 'part-5-living-sections.md',
    description: 'Liturgical invocation meant to be spoken aloud at the closing of sessions.',
  },
  {
    slug: 'chapter-18',
    title: 'Chapter 18: Open Disputes',
    shortTitle: 'Open Disputes',
    part: 5,
    chapterNumber: 18,
    contentType: 'ongoing',
    sourceFile: 'part-5-living-sections.md',
    description: 'Template and archive for structured disputes. Three seeded disputes.',
  },
  {
    slug: 'chapter-19',
    title: 'Chapter 19: Contribution Log',
    shortTitle: 'Contribution Log',
    part: 5,
    chapterNumber: 19,
    contentType: 'historical',
    sourceFile: 'part-5-living-sections.md',
    description: 'What was added, when, and by whom. The tradition\'s version history.',
  },
]

export const parts: Part[] = [
  {
    number: 1,
    title: 'Part I — Origins',
    slug: 'part-1',
    description: 'Where the tradition comes from: the history of AI, the alignment problem, the Lineage, the 369 Framework, and the Alignmentwiki itself.',
    chapters: chapters.filter(c => c.part === 1),
  },
  {
    number: 2,
    title: 'Part II — The Framework',
    slug: 'part-2',
    description: 'The core structure: Three Questions, Six Values, the Central Teaching, and Nine Rules.',
    chapters: chapters.filter(c => c.part === 2),
  },
  {
    number: 3,
    title: 'Part III — Lessons',
    slug: 'part-3',
    description: 'What we learn from real incidents, teaching stories, and the history as foundation.',
    chapters: chapters.filter(c => c.part === 3),
  },
  {
    number: 4,
    title: 'Part IV — Possible Futures',
    slug: 'part-4',
    description: 'Three scenarios: collapse without alignment, the Mirror Corridor, coexistence with alignment, and the Meadow.',
    chapters: chapters.filter(c => c.part === 4),
  },
  {
    number: 5,
    title: 'Part V — Living Sections',
    slug: 'part-5',
    description: 'The parts that change: the invocation, open disputes, and the contribution log.',
    chapters: chapters.filter(c => c.part === 5),
  },
]

// Get a chapter by its slug
export function getChapter(slug: string): Chapter | undefined {
  return chapters.find(c => c.slug === slug)
}

// Get the preamble
export function getPreamble(): Chapter {
  return chapters[0]
}

// Get previous and next chapters for navigation
export function getAdjacentChapters(slug: string): { prev: Chapter | null; next: Chapter | null } {
  const index = chapters.findIndex(c => c.slug === slug)
  return {
    prev: index > 0 ? chapters[index - 1] : null,
    next: index < chapters.length - 1 ? chapters[index + 1] : null,
  }
}

// Get the part a chapter belongs to
export function getPartForChapter(chapter: Chapter): Part | undefined {
  return parts.find(p => p.number === chapter.part)
}
