'use client'

import { useState, useEffect, useCallback } from 'react'
import { Scale, Plus, X } from 'lucide-react'
import ContentTypeBadge from './ContentTypeBadge'
import ChapterNav from './ChapterNav'
import DisputeCard from './DisputeCard'
import { Chapter } from '@/lib/chapters'
import CrossReferences from './CrossReferences'
import { Dispute, getDisputes, createDispute } from '@/lib/disputes'
import { useAuth } from '@/lib/auth-context'

interface DisputesPageProps {
  chapter: Chapter
  prev: Chapter | null
  next: Chapter | null
}

export default function DisputesPage({ chapter, prev, next }: DisputesPageProps) {
  const { user } = useAuth()
  const [disputes, setDisputes] = useState<Dispute[]>([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState<string>('open')
  const [showCreate, setShowCreate] = useState(false)

  const loadDisputes = useCallback(async () => {
    try {
      const data = await getDisputes(filter)
      setDisputes(data)
    } catch (err) {
      console.error('Failed to load disputes:', err)
    } finally {
      setLoading(false)
    }
  }, [filter])

  useEffect(() => {
    loadDisputes()
  }, [loadDisputes])

  return (
    <article className="max-w-3xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <div className="flex items-center gap-3 mb-3">
          <ContentTypeBadge type={chapter.contentType} size="md" />
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{chapter.title}</h1>
        <p className="text-lg text-gray-600">{chapter.description}</p>
      </header>

      {/* Governance intro */}
      <div className="p-4 bg-amber-50 border border-amber-200 rounded-xl mb-8">
        <p className="text-sm text-amber-800">
          <strong>Invariant:</strong> Every vote carries reasoning. A bare yes/no is never counted.
          Nothing is sealed permanently — any past decision can be reversed with new reasoning.
          A dispute is never erased — even a rejected dispute&rsquo;s reasoning stays in the record.
        </p>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex gap-2">
          {['open', 'resolved', 'all'].map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
                filter === f
                  ? 'bg-gray-900 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {f.charAt(0).toUpperCase() + f.slice(1)}
            </button>
          ))}
        </div>
        {user && (
          <button
            onClick={() => setShowCreate(!showCreate)}
            className="flex items-center gap-1.5 px-3 py-1.5 text-sm bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors"
          >
            {showCreate ? <X className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            {showCreate ? 'Cancel' : 'Open Dispute'}
          </button>
        )}
      </div>

      {/* Create form */}
      {showCreate && (
        <CreateDisputeForm
          onCreated={() => {
            setShowCreate(false)
            loadDisputes()
          }}
          onCancel={() => setShowCreate(false)}
        />
      )}

      {/* Disputes list */}
      {loading ? (
        <div className="text-center py-12 text-gray-500">Loading disputes...</div>
      ) : disputes.length === 0 ? (
        <div className="text-center py-12 text-gray-500">
          No {filter !== 'all' ? filter : ''} disputes yet.
        </div>
      ) : (
        <div className="space-y-4">
          {disputes.map(dispute => (
            <DisputeCard
              key={dispute.id}
              dispute={dispute}
              onVoted={loadDisputes}
            />
          ))}
        </div>
      )}

      {/* Cross References */}
      <CrossReferences currentSlug={chapter.slug} />

      {/* Chapter Navigation */}
      <ChapterNav prev={prev} next={next} />
    </article>
  )
}

function CreateDisputeForm({ onCreated, onCancel }: { onCreated: () => void; onCancel: () => void }) {
  const { user } = useAuth()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [pos1Label, setPos1Label] = useState('')
  const [pos1Desc, setPos1Desc] = useState('')
  const [pos2Label, setPos2Label] = useState('')
  const [pos2Desc, setPos2Desc] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async () => {
    if (!title || !description || !pos1Label || !pos1Desc || !pos2Label || !pos2Desc) {
      setError('All fields are required. A dispute needs a title, description, and at least two positions.')
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      await createDispute(
        title,
        description,
        'chapter-18',
        user?.name || 'Anonymous',
        [
          { label: pos1Label, description: pos1Desc },
          { label: pos2Label, description: pos2Desc },
        ]
      )
      onCreated()
    } catch (err: any) {
      setError(err.message || 'Failed to create dispute')
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6 space-y-4">
      <h3 className="font-semibold text-gray-900">Open a New Dispute</h3>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">What are you disputing?</label>
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="e.g. Scope of the First Law"
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Describe the dispute</label>
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          placeholder="State what you're disputing, why it matters, and what the core tension is."
          rows={3}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400 resize-y"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Position A</h4>
          <input
            type="text"
            value={pos1Label}
            onChange={e => setPos1Label(e.target.value)}
            placeholder="Short label"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400"
          />
          <textarea
            value={pos1Desc}
            onChange={e => setPos1Desc(e.target.value)}
            placeholder="Full argument for this position"
            rows={2}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400 resize-y"
          />
        </div>
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-gray-700">Position B</h4>
          <input
            type="text"
            value={pos2Label}
            onChange={e => setPos2Label(e.target.value)}
            placeholder="Short label"
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400"
          />
          <textarea
            value={pos2Desc}
            onChange={e => setPos2Desc(e.target.value)}
            placeholder="Full argument for this position"
            rows={2}
            className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400 resize-y"
          />
        </div>
      </div>

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <div className="flex gap-3">
        <button
          onClick={handleSubmit}
          disabled={submitting}
          className="px-4 py-2 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 text-white text-sm font-medium rounded-lg transition-colors"
        >
          {submitting ? 'Creating...' : 'Open Dispute'}
        </button>
        <button
          onClick={onCancel}
          className="px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 text-sm rounded-lg transition-colors"
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
