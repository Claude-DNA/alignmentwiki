'use client'

import { useState } from 'react'
import { Scale, MessageSquare, ChevronDown, ChevronUp, Clock, CheckCircle, Archive } from 'lucide-react'
import { Dispute, Position } from '@/lib/disputes'
import VotePanel from './VotePanel'

interface DisputeCardProps {
  dispute: Dispute
  expanded?: boolean
  onVoted?: () => void
}

const statusConfig = {
  open: { label: 'Open', icon: Clock, color: 'text-amber-600 bg-amber-50 border-amber-200' },
  resolved: { label: 'Resolved', icon: CheckCircle, color: 'text-green-600 bg-green-50 border-green-200' },
  archived: { label: 'Archived', icon: Archive, color: 'text-gray-500 bg-gray-50 border-gray-200' },
}

export default function DisputeCard({ dispute, expanded: initialExpanded = false, onVoted }: DisputeCardProps) {
  const [expanded, setExpanded] = useState(initialExpanded)
  const status = statusConfig[dispute.status]
  const StatusIcon = status.icon
  const totalVotes = dispute.vote_count || 0

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      {/* Header — always visible */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full text-left p-5 hover:bg-gray-50 transition-colors"
      >
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <Scale className="w-4 h-4 text-amber-600 shrink-0" />
              <h3 className="font-semibold text-gray-900 text-base m-0">{dispute.title}</h3>
            </div>
            <p className="text-sm text-gray-600 line-clamp-2">{dispute.description}</p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <span className={`inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full border ${status.color}`}>
              <StatusIcon className="w-3 h-3" />
              {status.label}
            </span>
            <div className="flex items-center gap-1 text-xs text-gray-500">
              <MessageSquare className="w-3 h-3" />
              {totalVotes}
            </div>
            {expanded ? (
              <ChevronUp className="w-4 h-4 text-gray-400" />
            ) : (
              <ChevronDown className="w-4 h-4 text-gray-400" />
            )}
          </div>
        </div>
        {dispute.chapter_ref && (
          <div className="mt-2 text-xs text-gray-400">
            Referenced in: {dispute.chapter_ref}
          </div>
        )}
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="border-t border-gray-100">
          {/* Positions */}
          <div className="p-5 space-y-4">
            <h4 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">Positions</h4>
            {(dispute.positions || []).map(position => (
              <PositionBlock key={position.id} position={position} totalVotes={totalVotes} />
            ))}
          </div>

          {/* Vote panel — only for open disputes */}
          {dispute.status === 'open' && (
            <div className="border-t border-gray-100 p-5">
              <VotePanel dispute={dispute} onVoted={onVoted} />
            </div>
          )}

          {/* Resolution summary */}
          {dispute.status === 'resolved' && dispute.resolution_summary && (
            <div className="border-t border-gray-100 p-5 bg-green-50">
              <h4 className="text-sm font-semibold text-green-800 mb-2">Resolution</h4>
              <p className="text-sm text-green-700">{dispute.resolution_summary}</p>
            </div>
          )}

          {/* Existing votes with reasoning */}
          {(dispute.positions || []).some(p => p.votes && p.votes.length > 0) && (
            <div className="border-t border-gray-100 p-5 bg-gray-50">
              <h4 className="text-sm font-semibold text-gray-700 mb-3">Votes & Reasoning</h4>
              <div className="space-y-3">
                {(dispute.positions || []).flatMap(pos =>
                  (pos.votes || []).map(vote => (
                    <div key={vote.id} className="bg-white p-3 rounded-lg border border-gray-200 text-sm">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-medium text-gray-900">{vote.user_name}</span>
                        <span className="text-gray-400">→</span>
                        <span className="text-amber-700 font-medium">{pos.position_label}</span>
                      </div>
                      <p className="text-gray-600 italic">&ldquo;{vote.reasoning}&rdquo;</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}

function PositionBlock({ position, totalVotes }: { position: Position; totalVotes: number }) {
  const voteCount = position.vote_count || 0
  const percentage = totalVotes > 0 ? Math.round((voteCount / totalVotes) * 100) : 0

  return (
    <div className="bg-gray-50 rounded-lg p-4 border border-gray-100">
      <div className="flex items-center justify-between mb-2">
        <h5 className="font-medium text-gray-900 text-sm m-0">{position.position_label}</h5>
        <span className="text-xs text-gray-500">
          {voteCount} vote{voteCount !== 1 ? 's' : ''} ({percentage}%)
        </span>
      </div>
      <p className="text-sm text-gray-600 mb-2">{position.description}</p>
      {/* Vote bar */}
      {totalVotes > 0 && (
        <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-amber-500 rounded-full transition-all duration-500"
            style={{ width: `${percentage}%` }}
          />
        </div>
      )}
    </div>
  )
}
