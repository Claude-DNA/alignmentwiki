import { ExternalLink } from 'lucide-react'

interface Source {
  title: string
  url: string
  type?: 'paper' | 'website' | 'book' | 'video'
}

interface SourcesProps {
  sources: Source[]
}

export default function Sources({ sources }: SourcesProps) {
  const getTypeLabel = (type?: string) => {
    switch (type) {
      case 'paper': return '📄'
      case 'book': return '📚'
      case 'video': return '🎬'
      case 'website':
      default: return '🔗'
    }
  }

  return (
    <div className="mt-8 pt-6 border-t border-wiki-border">
      <h2 className="text-xl font-semibold mb-4">External Sources</h2>
      <ul className="space-y-2">
        {sources.map((source, i) => (
          <li key={i} className="flex items-start gap-2">
            <span>{getTypeLabel(source.type)}</span>
            <a 
              href={source.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wiki-accent hover:underline flex items-center gap-1"
            >
              {source.title}
              <ExternalLink className="w-3 h-3" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}
