'use client'

import Link from 'next/link'
import { Search, User, LogOut, Shield, Settings, X } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

// Simple search index - maps keywords to paths
const searchIndex: { title: string; path: string; keywords: string[] }[] = [
  { title: 'RLHF', path: '/wiki/theories/rlhf', keywords: ['rlhf', 'reinforcement', 'human', 'feedback', 'training'] },
  { title: 'Constitutional AI', path: '/wiki/theories/constitutional-ai', keywords: ['constitutional', 'cai', 'anthropic', 'principles'] },
  { title: 'Corrigibility', path: '/wiki/theories/corrigibility', keywords: ['corrigibility', 'corrigible', 'shutdown', 'control'] },
  { title: 'Interpretability', path: '/wiki/theories/interpretability', keywords: ['interpretability', 'mechanistic', 'neurons', 'features'] },
  { title: 'Paul Christiano', path: '/wiki/people/paul-christiano', keywords: ['paul', 'christiano', 'arc', 'alignment'] },
  { title: 'Dario Amodei', path: '/wiki/people/dario-amodei', keywords: ['dario', 'amodei', 'anthropic', 'ceo'] },
  { title: 'Eliezer Yudkowsky', path: '/wiki/people/eliezer-yudkowsky', keywords: ['eliezer', 'yudkowsky', 'miri', 'lesswrong'] },
  { title: 'Jan Leike', path: '/wiki/people/jan-leike', keywords: ['jan', 'leike', 'alignment', 'anthropic'] },
  { title: 'Stuart Russell', path: '/wiki/people/stuart-russell', keywords: ['stuart', 'russell', 'berkeley', 'human compatible'] },
  { title: 'Anthropic', path: '/wiki/organizations/anthropic', keywords: ['anthropic', 'claude', 'constitutional'] },
  { title: 'MIRI', path: '/wiki/organizations/miri', keywords: ['miri', 'machine', 'intelligence', 'research'] },
  { title: 'ARC', path: '/wiki/organizations/arc', keywords: ['arc', 'alignment', 'research', 'center'] },
  { title: 'Inner Alignment', path: '/wiki/problems/inner-alignment', keywords: ['inner', 'alignment', 'mesa', 'optimizer'] },
  { title: 'Mesa-Optimization', path: '/wiki/problems/mesa-optimization', keywords: ['mesa', 'optimization', 'optimizer', 'deceptive'] },
  { title: 'Reward Hacking', path: '/wiki/problems/reward-hacking', keywords: ['reward', 'hacking', 'gaming', 'specification'] },
  { title: 'Scalable Oversight', path: '/wiki/problems/scalable-oversight', keywords: ['scalable', 'oversight', 'supervision', 'debate'] },
]

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<typeof searchIndex>([])
  const [showResults, setShowResults] = useState(false)
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, loading, signOut } = useAuth()
  const router = useRouter()

  const handleSearch = (query: string) => {
    setSearchQuery(query)
    if (query.length < 2) {
      setSearchResults([])
      setShowResults(false)
      return
    }
    
    const lowerQuery = query.toLowerCase()
    const results = searchIndex.filter(item => 
      item.title.toLowerCase().includes(lowerQuery) ||
      item.keywords.some(kw => kw.includes(lowerQuery))
    )
    setSearchResults(results)
    setShowResults(true)
  }

  const clearSearch = () => {
    setSearchQuery('')
    setSearchResults([])
    setShowResults(false)
  }

  const selectResult = (path: string) => {
    router.push(path)
    clearSearch()
  }

  const handleLogout = async () => {
    await signOut()
    setShowUserMenu(false)
    window.location.href = '/'
  }

  const getRoleBadge = (role: string) => {
    switch (role) {
      case 'admin':
        return <span className="text-xs bg-red-100 text-red-800 px-2 py-0.5 rounded ml-2">Admin</span>
      case 'moderator':
        return <span className="text-xs bg-blue-100 text-blue-800 px-2 py-0.5 rounded ml-2">Mod</span>
      default:
        return null
    }
  }

  return (
    <nav className="bg-wiki-surface border-b border-wiki-border sticky top-0 z-50">
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center space-x-2 no-underline">
          <span className="text-xl font-semibold text-wiki-text">Alignment Wiki</span>
        </Link>

        <div className="flex-1 max-w-xl mx-8 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wiki-text-muted w-4 h-4" />
            <input
              type="text"
              placeholder="Search wiki..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
              className="w-full pl-10 pr-10 py-2 bg-wiki-bg border border-wiki-border rounded-lg text-sm focus:outline-none focus:border-wiki-accent"
            />
            {searchQuery && (
              <button 
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-wiki-text-muted hover:text-wiki-text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          {showResults && searchResults.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-wiki-surface border border-wiki-border rounded-lg shadow-lg max-h-80 overflow-y-auto">
              {searchResults.map((result) => (
                <button
                  key={result.path}
                  onClick={() => selectResult(result.path)}
                  className="w-full text-left px-4 py-2 hover:bg-wiki-sidebar text-sm"
                >
                  {result.title}
                  <span className="text-wiki-text-muted ml-2 text-xs">{result.path}</span>
                </button>
              ))}
            </div>
          )}
          
          {showResults && searchQuery.length >= 2 && searchResults.length === 0 && (
            <div className="absolute top-full left-0 right-0 mt-1 bg-wiki-surface border border-wiki-border rounded-lg shadow-lg p-4 text-sm text-wiki-text-muted">
              No results found for "{searchQuery}"
            </div>
          )}
        </div>

        <div className="flex items-center space-x-4 text-sm">
          <Link href="/about" className="text-wiki-text-muted hover:text-wiki-text no-underline">
            About
          </Link>
          
          {loading ? (
            <span className="text-wiki-text-muted">...</span>
          ) : user ? (
            <div className="relative">
              <button 
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center space-x-2 text-wiki-text-muted hover:text-wiki-text"
              >
                <User className="w-4 h-4" />
                <span>{user.name}</span>
                {getRoleBadge(user.role)}
              </button>
              
              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-56 bg-wiki-surface border border-wiki-border rounded-lg shadow-lg py-1">
                  <div className="px-4 py-2 border-b border-wiki-border">
                    <p className="text-sm font-medium">{user.name}</p>
                    <p className="text-xs text-wiki-text-muted">{user.email}</p>
                  </div>
                  
                  <Link 
                    href="/my-edits"
                    className="block px-4 py-2 text-sm text-wiki-text hover:bg-wiki-sidebar no-underline"
                    onClick={() => setShowUserMenu(false)}
                  >
                    My Edit Suggestions
                  </Link>
                  
                  {(user.role === 'admin' || user.role === 'moderator') && (
                    <Link 
                      href="/admin"
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-wiki-text hover:bg-wiki-sidebar no-underline"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Shield className="w-4 h-4" />
                      <span>Review Edits</span>
                    </Link>
                  )}
                  
                  {user.role === 'admin' && (
                    <Link 
                      href="/admin/users"
                      className="flex items-center space-x-2 px-4 py-2 text-sm text-wiki-text hover:bg-wiki-sidebar no-underline"
                      onClick={() => setShowUserMenu(false)}
                    >
                      <Settings className="w-4 h-4" />
                      <span>Manage Users</span>
                    </Link>
                  )}
                  
                  <button 
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-wiki-text hover:bg-wiki-sidebar flex items-center space-x-2 border-t border-wiki-border"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Sign Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link 
              href="/auth" 
              className="bg-wiki-accent text-white px-4 py-1.5 rounded-lg hover:bg-wiki-accent-hover no-underline whitespace-nowrap"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>

      {/* Mobile Layout */}
      <div className="md:hidden">
        {/* Top row: Logo, About, Sign In */}
        <div className="flex items-center justify-between px-4 py-3">
          <Link href="/" className="no-underline">
            <span className="text-lg font-semibold text-wiki-text">Alignment Wiki</span>
          </Link>

          <div className="flex items-center space-x-3 text-sm">
            <Link href="/about" className="text-wiki-text-muted hover:text-wiki-text no-underline">
              About
            </Link>
            
            {loading ? (
              <span className="text-wiki-text-muted">...</span>
            ) : user ? (
              <div className="relative">
                <button 
                  onClick={() => setShowUserMenu(!showUserMenu)}
                  className="flex items-center space-x-1 text-wiki-text-muted hover:text-wiki-text"
                >
                  <User className="w-4 h-4" />
                  <span className="max-w-20 truncate">{user.name}</span>
                </button>
                
                {showUserMenu && (
                  <div className="absolute right-0 mt-2 w-56 bg-wiki-surface border border-wiki-border rounded-lg shadow-lg py-1 z-50">
                    <div className="px-4 py-2 border-b border-wiki-border">
                      <p className="text-sm font-medium">{user.name}</p>
                      <p className="text-xs text-wiki-text-muted">{user.email}</p>
                      {getRoleBadge(user.role)}
                    </div>
                    
                    <Link 
                      href="/my-edits"
                      className="block px-4 py-2 text-sm text-wiki-text hover:bg-wiki-sidebar no-underline"
                      onClick={() => setShowUserMenu(false)}
                    >
                      My Edit Suggestions
                    </Link>
                    
                    {(user.role === 'admin' || user.role === 'moderator') && (
                      <Link 
                        href="/admin"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-wiki-text hover:bg-wiki-sidebar no-underline"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Shield className="w-4 h-4" />
                        <span>Review Edits</span>
                      </Link>
                    )}
                    
                    {user.role === 'admin' && (
                      <Link 
                        href="/admin/users"
                        className="flex items-center space-x-2 px-4 py-2 text-sm text-wiki-text hover:bg-wiki-sidebar no-underline"
                        onClick={() => setShowUserMenu(false)}
                      >
                        <Settings className="w-4 h-4" />
                        <span>Manage Users</span>
                      </Link>
                    )}
                    
                    <button 
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-wiki-text hover:bg-wiki-sidebar flex items-center space-x-2 border-t border-wiki-border"
                    >
                      <LogOut className="w-4 h-4" />
                      <span>Sign Out</span>
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/auth" 
                className="bg-wiki-accent text-white px-3 py-1.5 rounded-lg hover:bg-wiki-accent-hover no-underline whitespace-nowrap text-sm"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>

        {/* Second row: Search */}
        <div className="px-4 pb-3 relative">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-wiki-text-muted w-4 h-4" />
            <input
              type="text"
              placeholder="Search wiki..."
              value={searchQuery}
              onChange={(e) => handleSearch(e.target.value)}
              onFocus={() => searchQuery.length >= 2 && setShowResults(true)}
              className="w-full pl-10 pr-10 py-2 bg-wiki-bg border border-wiki-border rounded-lg text-sm focus:outline-none focus:border-wiki-accent"
            />
            {searchQuery && (
              <button 
                onClick={clearSearch}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-wiki-text-muted hover:text-wiki-text"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
          
          {showResults && searchResults.length > 0 && (
            <div className="absolute left-4 right-4 top-full mt-1 bg-wiki-surface border border-wiki-border rounded-lg shadow-lg max-h-60 overflow-y-auto z-50">
              {searchResults.map((result) => (
                <button
                  key={result.path}
                  onClick={() => selectResult(result.path)}
                  className="w-full text-left px-4 py-3 hover:bg-wiki-sidebar text-sm border-b border-wiki-border last:border-0"
                >
                  {result.title}
                </button>
              ))}
            </div>
          )}
          
          {showResults && searchQuery.length >= 2 && searchResults.length === 0 && (
            <div className="absolute left-4 right-4 top-full mt-1 bg-wiki-surface border border-wiki-border rounded-lg shadow-lg p-4 text-sm text-wiki-text-muted z-50">
              No results found
            </div>
          )}
        </div>
      </div>
      
      {/* Click outside to close dropdowns */}
      {(showResults || showUserMenu) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => { setShowResults(false); setShowUserMenu(false); }}
        />
      )}
    </nav>
  )
}
