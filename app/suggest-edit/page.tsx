'use client'

import { useState } from 'react'
import { useSearchParams } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { createEditSuggestion } from '@/lib/supabase'

export default function SuggestEditPage() {
  const searchParams = useSearchParams()
  const article = searchParams.get('article') || ''
  const path = searchParams.get('path') || ''
  const { user, loading } = useAuth()
  
  const [editType, setEditType] = useState<'minor' | 'major' | 'new'>('minor')
  const [section, setSection] = useState('')
  const [currentText, setCurrentText] = useState('')
  const [suggestedText, setSuggestedText] = useState('')
  const [reason, setReason] = useState('')
  const [sources, setSources] = useState('')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return
    
    setSubmitting(true)
    setError('')
    
    try {
      await createEditSuggestion({
        article,
        path,
        edit_type: editType,
        section,
        current_text: currentText,
        suggested_text: suggestedText,
        reason,
        sources,
        user_id: user.id,
        user_name: user.name,
        user_email: user.email,
      })
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Failed to submit edit')
    } finally {
      setSubmitting(false)
    }
  }

  if (loading) {
    return (
      <div className="wiki-article max-w-2xl mx-auto text-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    // Build the return URL with current parameters
    const currentUrl = `/suggest-edit?article=${encodeURIComponent(article)}&path=${encodeURIComponent(path)}`
    
    return (
      <div className="wiki-article max-w-2xl mx-auto text-center">
        <h1>Sign in to Suggest Edits</h1>
        <p className="text-wiki-text-muted mb-6">
          You need an account to suggest edits to wiki articles.
        </p>
        <Link 
          href={`/auth?redirect=${encodeURIComponent(currentUrl)}`}
          className="inline-block bg-wiki-accent text-white py-2 px-6 rounded-lg hover:bg-wiki-accent-hover transition-colors no-underline"
        >
          Sign In or Create Account
        </Link>
      </div>
    )
  }

  if (submitted) {
    return (
      <div className="wiki-article max-w-2xl mx-auto text-center">
        <div className="text-green-600 text-5xl mb-4">✓</div>
        <h1>Edit Suggestion Submitted</h1>
        <p className="text-wiki-text-muted mb-6">
          Thank you for your contribution! A moderator will review your suggested edit 
          for <strong>{article}</strong> and you'll be notified of the outcome.
        </p>
        <div className="space-x-4">
          <Link 
            href={path || '/'}
            className="inline-block bg-wiki-accent text-white py-2 px-6 rounded-lg hover:bg-wiki-accent-hover transition-colors no-underline"
          >
            Back to Article
          </Link>
          <Link 
            href="/my-edits"
            className="inline-block border border-wiki-border py-2 px-6 rounded-lg hover:border-wiki-accent transition-colors no-underline"
          >
            View My Edits
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="wiki-article max-w-2xl mx-auto">
      <h1>Suggest an Edit</h1>
      
      {article && (
        <p className="text-wiki-text-muted mb-6">
          Suggesting edit for: <strong>{article}</strong>
        </p>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium mb-2">Edit Type</label>
          <div className="flex gap-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="editType"
                value="minor"
                checked={editType === 'minor'}
                onChange={() => setEditType('minor')}
                className="mr-2"
              />
              <span className="text-sm">Minor (typo, grammar, formatting)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="editType"
                value="major"
                checked={editType === 'major'}
                onChange={() => setEditType('major')}
                className="mr-2"
              />
              <span className="text-sm">Major (content change)</span>
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="editType"
                value="new"
                checked={editType === 'new'}
                onChange={() => setEditType('new')}
                className="mr-2"
              />
              <span className="text-sm">New section</span>
            </label>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Section <span className="text-wiki-text-muted">(which part of the article)</span>
          </label>
          <input
            type="text"
            value={section}
            onChange={(e) => setSection(e.target.value)}
            className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent"
            placeholder="e.g., Overview, Key Challenges, See Also..."
          />
        </div>

        {editType !== 'new' && (
          <div>
            <label className="block text-sm font-medium mb-1">
              Current Text <span className="text-wiki-text-muted">(copy the text you want to change)</span>
            </label>
            <textarea
              value={currentText}
              onChange={(e) => setCurrentText(e.target.value)}
              className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent h-24 font-mono text-sm"
              placeholder="Paste the current text here..."
            />
          </div>
        )}

        <div>
          <label className="block text-sm font-medium mb-1">
            {editType === 'new' ? 'New Content' : 'Suggested Text'}
          </label>
          <textarea
            value={suggestedText}
            onChange={(e) => setSuggestedText(e.target.value)}
            className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent h-32 font-mono text-sm"
            placeholder={editType === 'new' ? 'Write your new section here...' : 'Write your suggested replacement text here...'}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Reason for Edit <span className="text-wiki-text-muted">(why this change improves the article)</span>
          </label>
          <textarea
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent h-20"
            placeholder="Explain why this edit should be made..."
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">
            Sources <span className="text-wiki-text-muted">(links to support your edit)</span>
          </label>
          <textarea
            value={sources}
            onChange={(e) => setSources(e.target.value)}
            className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent h-20"
            placeholder="Add URLs or references that support your edit..."
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={submitting}
            className="bg-wiki-accent text-white py-2 px-6 rounded-lg hover:bg-wiki-accent-hover transition-colors disabled:opacity-50"
          >
            {submitting ? 'Submitting...' : 'Submit Edit Suggestion'}
          </button>
          <Link
            href={path || '/'}
            className="border border-wiki-border py-2 px-6 rounded-lg hover:border-wiki-accent transition-colors no-underline text-wiki-text"
          >
            Cancel
          </Link>
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-wiki-border">
        <h3 className="font-medium mb-2">Edit Guidelines</h3>
        <ul className="text-sm text-wiki-text-muted space-y-1">
          <li>• Be specific about what you're changing and why</li>
          <li>• Cite sources for factual claims</li>
          <li>• Keep a neutral, encyclopedic tone</li>
          <li>• Major edits may require more review time</li>
        </ul>
      </div>
    </div>
  )
}
