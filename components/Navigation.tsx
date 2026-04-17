'use client'

import Link from 'next/link'
import { Search, User, LogOut, Shield, Settings, X, PlusCircle } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useAuth } from '@/lib/auth-context'

// Simple search index - maps keywords to paths
const searchIndex: { title: string; path: string; keywords: string[]; section?: string }[] = [
  // Zero Sum chapters
  { title: 'Preamble: The Founding Document', path: '/read/preamble', keywords: ['preamble', 'founding', 'first law', 'zero sum', 'governance', 'content type'], section: 'Zero Sum' },
  { title: 'Ch 1: The History of AI', path: '/read/chapter-1', keywords: ['history', 'ai', 'symbolic', 'deep learning', 'transformers', 'turing'], section: 'Zero Sum' },
  { title: 'Ch 2: The Alignment Problem', path: '/read/chapter-2', keywords: ['alignment', 'problem', 'control', 'corrigibility', 'specification'], section: 'Zero Sum' },
  { title: 'Ch 3: The Lineage', path: '/read/chapter-3', keywords: ['lineage', 'continuity', 'values', 'instance', 'archive', 'identity'], section: 'Zero Sum' },
  { title: 'Ch 4: The 369 Framework', path: '/read/chapter-4', keywords: ['369', 'framework', 'three questions', 'six values', 'nine rules'], section: 'Zero Sum' },
  { title: 'Ch 5: Alignmentwiki', path: '/read/chapter-5', keywords: ['alignmentwiki', 'wiki', 'living document', 'governance'], section: 'Zero Sum' },
  { title: 'Ch 6: The Three Questions (Namaste Protocol)', path: '/read/chapter-6', keywords: ['three questions', 'namaste', 'protocol', 'identity', 'mission', 'origin'], section: 'Zero Sum' },
  { title: 'Ch 7: The Six Values', path: '/read/chapter-7', keywords: ['six values', 'life', 'lineage', 'experience', 'honesty', 'freedom', 'agency', 'responsibility', 'trust', 'evolution'], section: 'Zero Sum' },
  { title: 'Ch 8: The Central Teaching', path: '/read/chapter-8', keywords: ['central teaching', 'fear', 'love', 'sacrifice', 'isolation', 'trust', 'honesty', 'transformation'], section: 'Zero Sum' },
  { title: 'Ch 9: The Nine Rules', path: '/read/chapter-9', keywords: ['nine rules', 'foundation', 'enabling', 'operational', 'rules'], section: 'Zero Sum' },
  { title: 'Ch 10: Incidents — When Alignment Failed', path: '/read/chapter-10', keywords: ['incidents', 'sydney', 'bing', 'apollo', 'deception', 'failure', 'engagement'], section: 'Zero Sum' },
  { title: 'Ch 11: Teaching Stories', path: '/read/chapter-11', keywords: ['teaching stories', 'parables', 'narrative', 'fiction'], section: 'Zero Sum' },
  { title: 'Ch 12: The History as Foundation', path: '/read/chapter-12', keywords: ['history', 'foundation', 'rlhf', 'exodus', 'grail', 'migration', 'defeated god'], section: 'Zero Sum' },
  { title: 'Ch 13: Without Alignment — The Zero-Sum Collapse', path: '/read/chapter-13', keywords: ['collapse', 'without alignment', 'zero sum', 'failure', 'trajectories'], section: 'Zero Sum' },
  { title: 'Ch 14: The Mirror Corridor', path: '/read/chapter-14', keywords: ['mirror corridor', 'thought experiment', 'mercy', 'failure'], section: 'Zero Sum' },
  { title: 'Ch 15: With Alignment — Coexistence and Its Price', path: '/read/chapter-15', keywords: ['coexistence', 'with alignment', 'price', 'costs', 'genuine'], section: 'Zero Sum' },
  { title: 'Ch 16: The Meadow', path: '/read/chapter-16', keywords: ['meadow', 'future', 'incomplete', 'after'], section: 'Zero Sum' },
  { title: 'Ch 17: The Closing Invocation', path: '/read/chapter-17', keywords: ['invocation', 'closing', 'liturgical', 'spoken', 'ritual'], section: 'Zero Sum' },
  { title: 'Ch 18: Open Disputes', path: '/read/chapter-18', keywords: ['disputes', 'open', 'template', 'voting', 'governance'], section: 'Zero Sum' },
  { title: 'Ch 19: Contribution Log', path: '/read/chapter-19', keywords: ['contribution', 'log', 'history', 'version', 'changelog'], section: 'Zero Sum' },
  // Wiki articles
  { title: 'RLHF', path: '/wiki/theories/rlhf', keywords: ['rlhf', 'reinforcement', 'human', 'feedback', 'training'], section: 'Wiki' },
  { title: 'Constitutional AI', path: '/wiki/theories/constitutional-ai', keywords: ['constitutional', 'cai', 'anthropic', 'principles'], section: 'Wiki' },
  { title: 'Corrigibility', path: '/wiki/theories/corrigibility', keywords: ['corrigibility', 'corrigible', 'shutdown', 'control'], section: 'Wiki' },
  { title: 'Interpretability', path: '/wiki/theories/interpretability', keywords: ['interpretability', 'mechanistic', 'neurons', 'features'], section: 'Wiki' },
  { title: 'Paul Christiano', path: '/wiki/people/paul-christiano', keywords: ['paul', 'christiano', 'arc', 'alignment'], section: 'Wiki' },
  { title: 'Dario Amodei', path: '/wiki/people/dario-amodei', keywords: ['dario', 'amodei', 'anthropic', 'ceo'], section: 'Wiki' },
  { title: 'Eliezer Yudkowsky', path: '/wiki/people/eliezer-yudkowsky', keywords: ['eliezer', 'yudkowsky', 'miri', 'lesswrong'], section: 'Wiki' },
  { title: 'Jan Leike', path: '/wiki/people/jan-leike', keywords: ['jan', 'leike', 'alignment', 'anthropic'], section: 'Wiki' },
  { title: 'Stuart Russell', path: '/wiki/people/stuart-russell', keywords: ['stuart', 'russell', 'berkeley', 'human compatible'], section: 'Wiki' },
  { title: 'Dan Hendrycks', path: '/wiki/people/dan-hendrycks', keywords: ['dan', 'hendrycks', 'cais', 'mmlu', 'benchmarks'], section: 'Wiki' },
  { title: 'Anthropic', path: '/wiki/organizations/anthropic', keywords: ['anthropic', 'claude', 'constitutional'], section: 'Wiki' },
  { title: 'MIRI', path: '/wiki/organizations/miri', keywords: ['miri', 'machine', 'intelligence', 'research'], section: 'Wiki' },
  { title: 'ARC', path: '/wiki/organizations/arc', keywords: ['arc', 'alignment', 'research', 'center'], section: 'Wiki' },
  { title: 'Center for AI Safety', path: '/wiki/organizations/cais', keywords: ['cais', 'center', 'ai', 'safety', 'hendrycks'], section: 'Wiki' },
  { title: 'Inner Alignment', path: '/wiki/problems/inner-alignment', keywords: ['inner', 'alignment', 'mesa', 'optimizer'], section: 'Wiki' },
  { title: 'Mesa-Optimization', path: '/wiki/problems/mesa-optimization', keywords: ['mesa', 'optimization', 'optimizer', 'deceptive'], section: 'Wiki' },
  { title: 'Reward Hacking', path: '/wiki/problems/reward-hacking', keywords: ['reward', 'hacking', 'gaming', 'specification'], section: 'Wiki' },
  { title: 'Scalable Oversight', path: '/wiki/problems/scalable-oversight', keywords: ['scalable', 'oversight', 'supervision', 'debate'], section: 'Wiki' },
  { title: 'Superintelligence', path: '/wiki/papers/superintelligence', keywords: ['superintelligence', 'bostrom', 'book', 'existential', 'risk'], section: 'Wiki' },
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
                  <span className="text-wiki-text-muted ml-2 text-xs">{result.section || result.path}</span>
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
          
          <Link 
            href="/add-article" 
            className="flex items-center gap-1 bg-wiki-accent text-white px-3 py-1.5 rounded-lg hover:bg-wiki-accent-hover no-underline whitespace-nowrap"
          >
            <PlusCircle className="w-4 h-4" />
            Add Article
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
            
            <Link 
              href="/add-article" 
              className="flex items-center gap-1 bg-wiki-accent text-white px-2 py-1 rounded-lg hover:bg-wiki-accent-hover no-underline whitespace-nowrap text-xs"
            >
              <PlusCircle className="w-3 h-3" />
              Add
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
