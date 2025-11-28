'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react'
import { useAuth } from '@/lib/auth-context'
import { getUserEditSuggestions, EditSuggestion } from '@/lib/supabase'

export default function MyEditsPage() {
  const { user, loading: authLoading } = useAuth()
  const [edits, setEdits] = useState<EditSuggestion[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user) {
      loadEdits()
    }
  }, [user])

  const loadEdits = async () => {
    if (!user) return
    try {
      const data = await getUserEditSuggestions(user.id)
      setEdits(data || [])
    } catch (error) {
      console.error('Error loading edits:', error)
    } finally {
      setLoading(false)
    }
  }

  if (authLoading || loading) {
    return (
      <div className="wiki-article max-w-2xl mx-auto text-center">
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return (
      <div className="wiki-article max-w-2xl mx-auto text-center">
        <h1>Sign In Required</h1>
        <p className="text-wiki-text-muted mb-6">
          Please sign in to view your edit suggestions.
        </p>
        <Link 
          href="/auth"
          className="inline-block bg-wiki-accent text-white py-2 px-6 rounded-lg hover:bg-wiki-accent-hover transition-colors no-underline"
        >
          Sign In
        </Link>
      </div>
    )
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'approved':
        return <CheckCircle className="w-5 h-5 text-green-600" />
      case 'rejected':
        return <XCircle className="w-5 h-5 text-red-600" />
      case 'pending':
      default:
        return <Clock className="w-5 h-5 text-yellow-600" />
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'approved':
        return 'Approved'
      case 'rejected':
        return 'Rejected'
      case 'pending':
      default:
        return 'Pending Review'
    }
  }

  return (
    <div className="wiki-article max-w-3xl mx-auto">
      <h1>My Edit Suggestions</h1>
      
      <p className="text-wiki-text-muted mb-6">
        Track the status of your contributions to Alignment Wiki.
      </p>

      {edits.length === 0 ? (
        <div className="text-center py-12 border border-wiki-border rounded-lg">
          <AlertCircle className="w-12 h-12 text-wiki-text-muted mx-auto mb-4" />
          <p className="text-wiki-text-muted mb-4">You haven't suggested any edits yet.</p>
          <Link 
            href="/"
            className="text-wiki-accent hover:underline"
          >
            Browse articles to contribute
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {edits.map((edit) => (
            <div key={edit.id} className="border border-wiki-border rounded-lg p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <Link href={edit.path || '/'} className="font-medium text-lg">
                    {edit.article}
                  </Link>
                  <span className="text-wiki-text-muted text-sm ml-2">
                    {edit.edit_type === 'minor' ? '(Minor edit)' : 
                     edit.edit_type === 'new' ? '(New section)' : '(Major edit)'}
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  {getStatusIcon(edit.status)}
                  <span className={`text-sm ${
                    edit.status === 'approved' ? 'text-green-600' :
                    edit.status === 'rejected' ? 'text-red-600' :
                    'text-yellow-600'
                  }`}>
                    {getStatusText(edit.status)}
                  </span>
                </div>
              </div>
              
              {edit.section && (
                <p className="text-sm text-wiki-text-muted mb-2">
                  Section: {edit.section}
                </p>
              )}
              
              <div className="bg-wiki-sidebar rounded p-3 text-sm mb-2">
                <p className="font-medium mb-1">Suggested change:</p>
                <p className="text-wiki-text-muted line-clamp-3">{edit.suggested_text}</p>
              </div>
              
              <p className="text-sm text-wiki-text-muted mb-2">
                <strong>Reason:</strong> {edit.reason}
              </p>

              {edit.reviewer_notes && (
                <div className="bg-blue-50 border border-blue-200 rounded p-3 text-sm mb-2">
                  <p className="font-medium text-blue-800 mb-1">Reviewer notes:</p>
                  <p className="text-blue-700">{edit.reviewer_notes}</p>
                </div>
              )}
              
              <p className="text-xs text-wiki-text-muted">
                Submitted {new Date(edit.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                  hour: '2-digit',
                  minute: '2-digit'
                })}
              </p>
            </div>
          ))}
        </div>
      )}

      <div className="mt-8 pt-6 border-t border-wiki-border">
        <h3 className="font-medium mb-2">Contribution Stats</h3>
        <div className="grid grid-cols-3 gap-4 text-center">
          <div className="bg-wiki-sidebar rounded-lg p-4">
            <div className="text-2xl font-semibold">{edits.length}</div>
            <div className="text-sm text-wiki-text-muted">Total Suggestions</div>
          </div>
          <div className="bg-wiki-sidebar rounded-lg p-4">
            <div className="text-2xl font-semibold text-green-600">
              {edits.filter(e => e.status === 'approved').length}
            </div>
            <div className="text-sm text-wiki-text-muted">Approved</div>
          </div>
          <div className="bg-wiki-sidebar rounded-lg p-4">
            <div className="text-2xl font-semibold text-yellow-600">
              {edits.filter(e => e.status === 'pending').length}
            </div>
            <div className="text-sm text-wiki-text-muted">Pending</div>
          </div>
        </div>
      </div>
    </div>
  )
}
