'use client'

import Link from 'next/link'
import { Search, User, LogOut, Shield, Settings } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '@/lib/auth-context'

export default function Navigation() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showUserMenu, setShowUserMenu] = useState(false)
  const { user, loading, signOut } = useAuth()

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
          <Link href="/about" className="text-wiki-text-muted hover:text-wiki-text no-underline">
            About
          </Link>
          
          {loading ? (
            <span className="text-wiki-text-muted">Loading...</span>
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
              className="bg-wiki-accent text-white px-4 py-1.5 rounded-lg hover:bg-wiki-accent-hover no-underline"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  )
}
