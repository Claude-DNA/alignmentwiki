'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { signIn, signUp } from '@/lib/supabase'
import { useAuth } from '@/lib/auth-context'

export default function AuthPage() {
  const router = useRouter()
  const { refreshUser } = useAuth()
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      if (isLogin) {
        await signIn(email, password)
        await refreshUser()
        setSuccess('Logged in successfully! Redirecting...')
        setTimeout(() => router.push('/'), 1000)
      } else {
        if (!name || !email || !password) {
          setError('All fields are required')
          setLoading(false)
          return
        }
        if (password.length < 6) {
          setError('Password must be at least 6 characters')
          setLoading(false)
          return
        }
        
        await signUp(email, password, name)
        setSuccess('Account created! Please check your email to confirm, then sign in.')
        setIsLogin(true)
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="wiki-article max-w-md mx-auto">
      <h1>{isLogin ? 'Sign In' : 'Create Account'}</h1>
      
      <p className="text-wiki-text-muted mb-6">
        {isLogin 
          ? 'Sign in to suggest edits to wiki articles.' 
          : 'Create an account to contribute to Alignment Wiki.'}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        {!isLogin && (
          <div>
            <label className="block text-sm font-medium mb-1">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent"
              placeholder="Your name"
              disabled={loading}
            />
          </div>
        )}
        
        <div>
          <label className="block text-sm font-medium mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent"
            placeholder="you@example.com"
            disabled={loading}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent"
            placeholder="••••••••"
            disabled={loading}
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        {success && (
          <div className="text-green-600 text-sm bg-green-50 p-3 rounded-lg">
            {success}
          </div>
        )}

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-wiki-accent text-white py-2 px-4 rounded-lg hover:bg-wiki-accent-hover transition-colors disabled:opacity-50"
        >
          {loading ? 'Please wait...' : (isLogin ? 'Sign In' : 'Create Account')}
        </button>
      </form>

      <div className="mt-6 text-center text-sm">
        {isLogin ? (
          <p>
            Don't have an account?{' '}
            <button 
              onClick={() => setIsLogin(false)}
              className="text-wiki-accent hover:underline"
            >
              Create one
            </button>
          </p>
        ) : (
          <p>
            Already have an account?{' '}
            <button 
              onClick={() => setIsLogin(true)}
              className="text-wiki-accent hover:underline"
            >
              Sign in
            </button>
          </p>
        )}
      </div>

      <div className="mt-8 pt-6 border-t border-wiki-border">
        <h3 className="font-medium mb-2">Why create an account?</h3>
        <ul className="text-sm text-wiki-text-muted space-y-1">
          <li>• Suggest edits to any article</li>
          <li>• Track your contributions</li>
          <li>• Get notified when your edits are reviewed</li>
          <li>• Build reputation as a contributor</li>
        </ul>
      </div>
    </div>
  )
}
