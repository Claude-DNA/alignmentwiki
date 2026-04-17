'use client'

import { useState, useEffect } from 'react'
import { Vote, AlertCircle } from 'lucide-react'
import { Dispute, castVote, getUserVote, Vote as VoteType } from '@/lib/disputes'
import { useAuth } from '@/lib/auth-context'

interface VotePanelProps {
  dispute: Dispute
  onVoted?: () => void
}

export default function VotePanel({ dispute, onVoted }: VotePanelProps) {
  const { user } = useAuth()
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null)
  const [reasoning, setReasoning] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [existingVote, setExistingVote] = useState<VoteType | null>(null)
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (user) {
      getUserVote(dispute.id).then(vote => {
        if (vote) {
          setExistingVote(vote)
          setSelectedPosition(vote.position_id)
          setReasoning(vote.reasoning)
        }
      })
    }
  }, [dispute.id, user])

  if (!user) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-gray-500">
          <a href="/auth" className="text-blue-600 hover:underline font-medium">Sign in</a> to cast your vote with reasoning.
        </p>
      </div>
    )
  }

  const handleSubmit = async () => {
    if (!selectedPosition) {
      setError('Select a position before voting.')
      return
    }
    if (!reasoning || reasoning.trim().length < 10) {
      setError('Reasoning is required and must be at least 10 characters. No reasoning = not entered.')
      return
    }

    setSubmitting(true)
    setError(null)

    try {
      await castVote(dispute.id, selectedPosition, user.name, reasoning.trim())
      setSuccess(true)
      onVoted?.()
    } catch (err: any) {
      setError(err.message || 'Failed to cast vote')
    } finally {
      setSubmitting(false)
    }
  }

  if (success) {
    return (
      <div className="text-center py-4">
        <p className="text-sm text-green-700 font-medium">
          {existingVote ? 'Vote updated.' : 'Vote recorded.'} Your reasoning is part of the record.
        </p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-gray-700">
        {existingVote ? 'Update Your Vote' : 'Cast Your Vote'}
      </h4>

      {/* Position selection */}
      <div className="space-y-2">
        {(dispute.positions || []).map(pos => (
          <label
            key={pos.id}
            className={`flex items-start gap-3 p-3 rounded-lg border cursor-pointer transition-colors ${
              selectedPosition === pos.id
                ? 'border-amber-400 bg-amber-50'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <input
              type="radio"
              name={`vote-${dispute.id}`}
              value={pos.id}
              checked={selectedPosition === pos.id}
              onChange={() => setSelectedPosition(pos.id)}
              className="mt-0.5 accent-amber-600"
            />
            <div>
              <div className="font-medium text-sm text-gray-900">{pos.position_label}</div>
              <div className="text-xs text-gray-500 mt-0.5">{pos.description}</div>
            </div>
          </label>
        ))}
      </div>

      {/* Reasoning — mandatory */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Your Reasoning <span className="text-red-500">*</span>
        </label>
        <textarea
          value={reasoning}
          onChange={(e) => setReasoning(e.target.value)}
          placeholder="Explain why you hold this position. A bare yes/no is never counted."
          rows={3}
          className="w-full px-3 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-amber-400 resize-y"
        />
        <p className="text-xs text-gray-400 mt-1">
          Minimum 10 characters. Every vote carries reasoning.
        </p>
      </div>

      {/* Error */}
      {error && (
        <div className="flex items-center gap-2 text-sm text-red-600">
          <AlertCircle className="w-4 h-4 shrink-0" />
          {error}
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={submitting || !selectedPosition || reasoning.trim().length < 10}
        className="w-full py-2.5 bg-amber-600 hover:bg-amber-700 disabled:bg-gray-300 text-white font-medium rounded-lg text-sm transition-colors"
      >
        {submitting ? 'Submitting...' : existingVote ? 'Update Vote' : 'Submit Vote'}
      </button>
    </div>
  )
}
