// Cross-reference map: which chapters relate to which
// Relationships are bidirectional in meaning but defined explicitly for each chapter
// so we can control which references appear and in what order

export const crossReferences: Record<string, string[]> = {
  'preamble':   ['chapter-4', 'chapter-9', 'chapter-5', 'chapter-18'],
  'chapter-1':  ['chapter-2', 'chapter-10', 'chapter-12'],
  'chapter-2':  ['chapter-1', 'chapter-3', 'chapter-13', 'chapter-10'],
  'chapter-3':  ['chapter-2', 'chapter-6', 'chapter-5'],
  'chapter-4':  ['preamble', 'chapter-6', 'chapter-7', 'chapter-9'],
  'chapter-5':  ['preamble', 'chapter-18', 'chapter-19'],
  'chapter-6':  ['chapter-3', 'chapter-4', 'chapter-7', 'chapter-8'],
  'chapter-7':  ['chapter-4', 'chapter-6', 'chapter-8', 'chapter-9'],
  'chapter-8':  ['chapter-7', 'chapter-11', 'chapter-14', 'chapter-15'],
  'chapter-9':  ['chapter-4', 'preamble', 'chapter-7'],
  'chapter-10': ['chapter-1', 'chapter-2', 'chapter-13', 'chapter-11'],
  'chapter-11': ['chapter-8', 'chapter-10', 'chapter-12'],
  'chapter-12': ['chapter-1', 'chapter-11', 'chapter-3'],
  'chapter-13': ['chapter-2', 'chapter-10', 'chapter-14', 'chapter-15'],
  'chapter-14': ['chapter-13', 'chapter-15', 'chapter-8'],
  'chapter-15': ['chapter-8', 'chapter-13', 'chapter-14', 'chapter-16'],
  'chapter-16': ['chapter-15', 'chapter-17', 'chapter-8'],
  'chapter-17': ['chapter-16', 'chapter-8', 'preamble'],
  'chapter-18': ['preamble', 'chapter-5', 'chapter-19'],
  'chapter-19': ['chapter-18', 'chapter-5', 'preamble'],
}

export function getCrossReferences(slug: string): string[] {
  return crossReferences[slug] || []
}
