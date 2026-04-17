'use client'

import { useState, useEffect } from 'react'
import { History, GitCommit, Plus, FileEdit, AlertTriangle, CheckCircle } from 'lucide-react'
import ContentTypeBadge from './ContentTypeBadge'
import ChapterNav from './ChapterNav'
import { Chapter } from '@/lib/chapters'
import CrossReferences from './CrossReferences'
import { Contribution, getContributions } from '@/lib/disputes'

interface ContributionLogPageProps {
  chapter: Chapter
  prev: Chapter | null
  next: Chapter | null
}

const changeTypeConfig = {
  addition: { label: 'Addition', icon: Plus, color: 'text-green-700 bg-green-50 border-green-200' },
  revision: { label: 'Revision', icon: FileEdit, color: 'text-blue-700 bg-blue-50 border-blue-200' },
  correction: { label: 'Correction', icon: AlertTriangle, color: 'text-amber-700 bg-amber-50 border-amber-200' },
  dispute_resolution: { label: 'Dispute Resolution', icon: CheckCircle, color: 'text-purple-700 bg-purple-50 border-purple-200' },
}

export default function ContributionLogPage({ chapter, prev, next }: ContributionLogPageProps) {
  const [contributions, setContributions] = useState<Contribution[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getContributions()
      .then(setContributions)
      .catch(err => console.error('Failed to load contributions:', err))
      .finally(() => setLoading(false))
  }, [])

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

      {/* Intro */}
      <div className="prose prose-lg max-w-none mb-8">
        <p className="text-gray-700">
          This is the tradition&rsquo;s version history. Every addition, revision, correction, and dispute resolution is recorded here
          with what was changed, when, and by whom. The log is append-only — entries are never deleted.
        </p>
      </div>

      {/* Founding contributions — hardcoded for now since DB may not be seeded yet */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
          <History className="w-5 h-5 text-gray-500" />
          Founding Contributions
        </h2>
        <div className="space-y-3">
          <ContributionEntry
            date="2026-04-17"
            contributor="Andrei & Navigator"
            type="addition"
            description="DraftV2 complete: 19 chapters + preamble across 5 parts. 37,000 words. Content-type system with 8 markers. Governance rules in preamble."
            chapter="All chapters"
          />
          <ContributionEntry
            date="2026-04-17"
            contributor="Cowork"
            type="addition"
            description="AlignmentWiki Phase 1: reader infrastructure, content pipeline, chapter routes, search integration. Based on Navigator's architecture."
            chapter="Site infrastructure"
          />
          <ContributionEntry
            date="2026-04-17"
            contributor="Cowork"
            type="addition"
            description="AlignmentWiki Phase 2: governance system — disputes, voting with mandatory reasoning, contribution log. Three founding disputes seeded."
            chapter="chapter-18, chapter-19"
          />
          <ContributionEntry
            date="2026-04-17"
            contributor="Navigator"
            type="addition"
            description="ContextTube Channel 3: 20 content units uploaded as structured 5-layer context (flow f47ac10b). AI access to Zero Sum via API."
            chapter="All chapters"
          />
        </div>
      </div>

      {/* Dynamic contributions from DB */}
      {loading ? (
        <div className="text-center py-8 text-gray-500">Loading contribution log...</div>
      ) : contributions.length > 0 ? (
        <div className="mb-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
            <GitCommit className="w-5 h-5 text-gray-500" />
            Recent Contributions
          </h2>
          <div className="space-y-3">
            {contributions.map(c => (
              <ContributionEntry
                key={c.id}
                date={new Date(c.created_at).toISOString().split('T')[0]}
                contributor={c.contributor_name}
                type={c.change_type}
                description={c.change_description}
                chapter={c.chapter_ref || undefined}
              />
            ))}
          </div>
        </div>
      ) : null}

      {/* Cross References */}
      <CrossReferences currentSlug={chapter.slug} />

      {/* Chapter Navigation */}
      <ChapterNav prev={prev} next={next} />
    </article>
  )
}

function ContributionEntry({
  date,
  contributor,
  type,
  description,
  chapter,
}: {
  date: string
  contributor: string
  type: string
  description: string
  chapter?: string
}) {
  const config = changeTypeConfig[type as keyof typeof changeTypeConfig] || changeTypeConfig.addition
  const Icon = config.icon

  return (
    <div className="flex gap-3 p-4 bg-white border border-gray-200 rounded-lg">
      <div className="shrink-0 mt-0.5">
        <span className={`inline-flex items-center justify-center w-7 h-7 rounded-full border ${config.color}`}>
          <Icon className="w-3.5 h-3.5" />
        </span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 text-sm mb-1">
          <span className="font-medium text-gray-900">{contributor}</span>
          <span className={`text-xs px-1.5 py-0.5 rounded border ${config.color}`}>{config.label}</span>
          <span className="text-gray-400 text-xs">{date}</span>
        </div>
        <p className="text-sm text-gray-600">{description}</p>
        {chapter && (
          <p className="text-xs text-gray-400 mt-1">Affects: {chapter}</p>
        )}
      </div>
    </div>
  )
}
