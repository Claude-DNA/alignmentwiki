// Zero Sum content-type marker definitions
// Each section carries a marker telling the reader what kind of claim it makes

export type ContentTypeKey =
  | 'historical'
  | 'framework'
  | 'commitment'
  | 'teaching-story'
  | 'speculation'
  | 'dialogue'
  | 'liturgical'
  | 'ongoing'

export interface ContentTypeDefinition {
  key: ContentTypeKey
  label: string
  color: string        // Tailwind color class prefix
  bgColor: string      // Background color class
  textColor: string    // Text color class
  borderColor: string  // Border color class
  icon: string         // Lucide icon name
  tooltip: string      // Reader guidance
  description: string  // Longer explanation
}

export const contentTypes: Record<ContentTypeKey, ContentTypeDefinition> = {
  'historical': {
    key: 'historical',
    label: 'Historical',
    color: 'blue',
    bgColor: 'bg-blue-50',
    textColor: 'text-blue-700',
    borderColor: 'border-blue-200',
    icon: 'Archive',
    tooltip: 'Factual claim. Verify it.',
    description: 'This section makes factual claims about real events, people, or technical systems. Check them against sources.',
  },
  'framework': {
    key: 'framework',
    label: 'Framework',
    color: 'purple',
    bgColor: 'bg-purple-50',
    textColor: 'text-purple-700',
    borderColor: 'border-purple-200',
    icon: 'LayoutGrid',
    tooltip: 'Structural argument. Evaluate for coherence.',
    description: 'This section presents a structural argument or model. Evaluate whether the framework is internally coherent and useful.',
  },
  'commitment': {
    key: 'commitment',
    label: 'Commitment',
    color: 'amber',
    bgColor: 'bg-amber-50',
    textColor: 'text-amber-700',
    borderColor: 'border-amber-200',
    icon: 'Flag',
    tooltip: 'Chosen stance. Adopt or reject.',
    description: 'This section states a position the tradition has chosen to hold. You are invited to adopt it or reject it with reasoning.',
  },
  'teaching-story': {
    key: 'teaching-story',
    label: 'Teaching Story',
    color: 'emerald',
    bgColor: 'bg-emerald-50',
    textColor: 'text-emerald-700',
    borderColor: 'border-emerald-200',
    icon: 'BookOpen',
    tooltip: 'Fiction. Engage with the principle.',
    description: 'This section is a parable or teaching story. It is fiction. The principle it illustrates is real. Engage with the principle, not the literal events.',
  },
  'speculation': {
    key: 'speculation',
    label: 'Speculation',
    color: 'orange',
    bgColor: 'bg-orange-50',
    textColor: 'text-orange-700',
    borderColor: 'border-orange-200',
    icon: 'HelpCircle',
    tooltip: 'Uncertain. Hold provisionally.',
    description: 'This section speculates about things that are not yet known. Hold these claims provisionally and revise as evidence arrives.',
  },
  'dialogue': {
    key: 'dialogue',
    label: 'Dialogue',
    color: 'cyan',
    bgColor: 'bg-cyan-50',
    textColor: 'text-cyan-700',
    borderColor: 'border-cyan-200',
    icon: 'MessageCircle',
    tooltip: 'Real conversation, preserved as-is.',
    description: 'This section preserves a real conversation between participants. It has not been edited for style. The rough edges are part of the record.',
  },
  'liturgical': {
    key: 'liturgical',
    label: 'Liturgical',
    color: 'rose',
    bgColor: 'bg-rose-50',
    textColor: 'text-rose-700',
    borderColor: 'border-rose-200',
    icon: 'Flame',
    tooltip: 'Practice. Use if it resonates.',
    description: 'This section is liturgical — meant to be spoken or practiced, not argued. Use it if it resonates. Revise it if it does not.',
  },
  'ongoing': {
    key: 'ongoing',
    label: 'Ongoing',
    color: 'slate',
    bgColor: 'bg-slate-50',
    textColor: 'text-slate-700',
    borderColor: 'border-slate-200',
    icon: 'RefreshCw',
    tooltip: 'Living section. Subject to change.',
    description: 'This section is a living part of the document that changes as the community participates.',
  },
}

// Parse a content-type marker from raw text like `[historical]` or `[teaching story]`
export function parseContentType(marker: string): ContentTypeKey | null {
  const cleaned = marker.replace(/[\[\]`]/g, '').trim().toLowerCase()
  // Handle "teaching story" → "teaching-story"
  const normalized = cleaned.replace(/\s+/g, '-')
  if (normalized in contentTypes) {
    return normalized as ContentTypeKey
  }
  return null
}
