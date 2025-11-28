'use client'

import Link from 'next/link'
import { Search } from 'lucide-react'
import { useState } from 'react'

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <nav className="bg-wiki-surface border-b border-wiki-border sticky top-0 z-50">
      <div className="flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center space-x-2 no-underline">
          <span className="text-xl font-semibold text-wiki-text">Alignment Wiki</span>
        </Link>

        <div className="flex-1 max-w-xl mx-8">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wiki-text-muted w-4 h-4" />
            <input
              type="text"
              placeholder="Search wiki..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-wiki-bg border border-wiki-border rounded-lg text-sm focus:outline-none focus:border-wiki-accent"
            />
          </div>
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <Link href="/about" className="text-wiki-text-muted hover:text-wiki-text">
            About
          </Link>
        </div>
      </div>
    </nav>
  )
}
