import Link from 'next/link'
import { Edit } from 'lucide-react'

interface WikiArticleProps {
  title: string
  lastUpdated?: string
  categories?: string[]
  children: React.ReactNode
}

export default function WikiArticle({ 
  title, 
  lastUpdated,
  categories = [],
  children 
}: WikiArticleProps) {
  return (
    <article className="wiki-article">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="mb-2">{title}</h1>
          {categories.length > 0 && (
            <div className="flex flex-wrap">
              {categories.map((cat) => (
                <span key={cat} className="wiki-category-tag">{cat}</span>
              ))}
            </div>
          )}
        </div>
        <button className="wiki-edit-button flex items-center space-x-1">
          <Edit className="w-4 h-4" />
          <span>Propose Edit</span>
        </button>
      </div>

      <div className="prose prose-wiki max-w-none">
        {children}
      </div>

      {lastUpdated && (
        <div className="mt-8 pt-4 border-t border-wiki-border text-sm text-wiki-text-muted">
          Last updated: {lastUpdated}
        </div>
      )}
    </article>
  )
}
