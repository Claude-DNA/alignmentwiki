'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { CheckCircle, XCircle, Clock, ExternalLink, AlertTriangle } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { getEditSuggestions, updateEditStatus, EditSuggestion } from '@/lib/supabase'

export default function AdminPage() {
  const { user, loading: authLoading } = useAuth()
  const [edits, setEdits] = useState<EditSuggestion[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<'all' | 'pending' | 'approved' | 'rejected'>('pending')
  const [reviewNotes, setReviewNotes] = useState<{[key: string]: string}>({})
  const [processing, setProcessing] = useState<string | null>(null)

  useEffect(() => {
    if (user && (user.role === 'admin' || user.role === 'moderator')) {
      loadEdits()
    }
  }, [user, filter])

  const loadEdits = async () => {
    try {
      const data = await getEditSuggestions(filter)
      setEdits(data || [])
    } catch (error) {
      console.error('Error loading edits:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleAction = async (editId: string, action: 'approved' | 'rejected') => {
    if (!user) return
    setProcessing(editId)
    
    try {
      await updateEditStatus(editId, action, user.id, reviewNotes[editId])
      await loadEdits()
    } catch (error) {
      console.error('Error updating edit:', error)
    } finally {
      setProcessing(null)
    }
  }

  if (authLoading) {
    return (
      <div className="wiki-article max-w-4xl mx-auto text-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (!user || (user.role !== 'admin' && user.role !== 'moderator')) {
    return (
      <div className="wiki-article max-w-md mx-auto text-center">
        <AlertTriangle className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
        <h1>Access Denied</h1>
        <p className="text-wiki-text-muted mb-6">
          You need admin or moderator privileges to access this page.
        </p>
        <Link 
          href="/"
          className="inline-block bg-wiki-accent text-white py-2 px-6 rounded-lg hover:bg-wiki-accent-hover transition-colors no-underline"
        >
          Go Home
        </Link>
      </div>
    )
  }

  const filteredEdits = edits

  return (
    <div className="wiki-article max-w-4xl mx-auto">
      <h1>Edit Suggestions Review</h1>
      
      <p className="text-wiki-text-muted mb-4">
        Logged in as <strong>{user.name}</strong> ({user.role})
      </p>
      
      <div className="flex gap-2 mb-6">
        {(['pending', 'approved', 'rejected', 'all'] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-2 rounded-lg text-sm capitalize ${
              filter === f 
                ? 'bg-wiki-accent text-white' 
                : 'bg-wiki-sidebar text-wiki-text hover:bg-wiki-border'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {loading ? (
        <div className="text-center py-12">
          <p>Loading edits...</p>
        </div>
      ) : filteredEdits.length === 0 ? (
        <div className="text-center py-12 border border-wiki-border rounded-lg">
          <p className="text-wiki-text-muted">No {filter} edits to review.</p>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredEdits.map((edit) => (
            <div key={edit.id} className="border border-wiki-border rounded-lg p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-semibold text-lg">{edit.article}</h3>
                    <Link 
                      href={edit.path || '/'} 
                      className="text-wiki-accent"
                      target="_blank"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </Link>
                  </div>
                  <p className="text-sm text-wiki-text-muted">
                    By {edit.user_name} ({edit.user_email}) · {new Date(edit.created_at).toLocaleString()}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  {edit.status === 'pending' ? (
                    <Clock className="w-5 h-5 text-yellow-600" />
                  ) : edit.status === 'approved' ? (
                    <CheckCircle className="w-5 h-5 text-green-600" />
                  ) : (
                    <XCircle className="w-5 h-5 text-red-600" />
                  )}
                  <span className="text-sm capitalize">{edit.status}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <p className="text-sm font-medium mb-1">Edit Type</p>
                  <p className="text-sm text-wiki-text-muted capitalize">{edit.edit_type}</p>
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Section</p>
                  <p className="text-sm text-wiki-text-muted">{edit.section || 'Not specified'}</p>
                </div>
              </div>

              {edit.current_text && (
                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">Current Text</p>
                  <div className="bg-red-50 border border-red-200 rounded p-3 text-sm">
                    {edit.current_text}
                  </div>
                </div>
              )}

              <div className="mb-4">
                <p className="text-sm font-medium mb-1">Suggested Text</p>
                <div className="bg-green-50 border border-green-200 rounded p-3 text-sm">
                  {edit.suggested_text}
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm font-medium mb-1">Reason for Edit</p>
                <p className="text-sm text-wiki-text-muted">{edit.reason}</p>
              </div>

              {edit.sources && (
                <div className="mb-4">
                  <p className="text-sm font-medium mb-1">Sources</p>
                  <p className="text-sm text-wiki-text-muted whitespace-pre-wrap">{edit.sources}</p>
                </div>
              )}

              {edit.status === 'pending' && (
                <div className="pt-4 border-t border-wiki-border">
                  <div className="mb-3">
                    <label className="text-sm font-medium mb-1 block">Review Notes (optional)</label>
                    <textarea
                      value={reviewNotes[edit.id] || ''}
                      onChange={(e) => setReviewNotes({...reviewNotes, [edit.id]: e.target.value})}
                      className="w-full px-3 py-2 border border-wiki-border rounded-lg text-sm"
                      placeholder="Add notes for the contributor..."
                      rows={2}
                    />
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => handleAction(edit.id, 'approved')}
                      disabled={processing === edit.id}
                      className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors disabled:opacity-50"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Approve
                    </button>
                    <button
                      onClick={() => handleAction(edit.id, 'rejected')}
                      disabled={processing === edit.id}
                      className="flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors disabled:opacity-50"
                    >
                      <XCircle className="w-4 h-4" />
                      Reject
                    </button>
                  </div>
                </div>
              )}

              {edit.reviewer_notes && edit.status !== 'pending' && (
                <div className="pt-4 border-t border-wiki-border">
                  <p className="text-sm font-medium mb-1">Reviewer Notes</p>
                  <p className="text-sm text-wiki-text-muted">{edit.reviewer_notes}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
