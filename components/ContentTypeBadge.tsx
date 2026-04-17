'use client'

import {
  Archive, LayoutGrid, Flag, BookOpen, HelpCircle,
  MessageCircle, Flame, RefreshCw
} from 'lucide-react'
import { contentTypes, ContentTypeKey } from '@/lib/content-types'
import { useState } from 'react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Archive,
  LayoutGrid,
  Flag,
  BookOpen,
  HelpCircle,
  MessageCircle,
  Flame,
  RefreshCw,
}

interface ContentTypeBadgeProps {
  type: ContentTypeKey
  size?: 'sm' | 'md' | 'lg'
  showTooltip?: boolean
}

export default function ContentTypeBadge({ type, size = 'md', showTooltip = true }: ContentTypeBadgeProps) {
  const [tooltipVisible, setTooltipVisible] = useState(false)
  const ct = contentTypes[type]
  if (!ct) return null

  const Icon = iconMap[ct.icon]

  const sizeClasses = {
    sm: 'text-xs px-2 py-0.5 gap-1',
    md: 'text-sm px-3 py-1 gap-1.5',
    lg: 'text-base px-4 py-1.5 gap-2',
  }

  const iconSizes = {
    sm: 'w-3 h-3',
    md: 'w-4 h-4',
    lg: 'w-5 h-5',
  }

  return (
    <span className="relative inline-flex items-center">
      <span
        className={`inline-flex items-center rounded-full font-medium ${ct.bgColor} ${ct.textColor} border ${ct.borderColor} ${sizeClasses[size]} cursor-help`}
        onMouseEnter={() => setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        {Icon && <Icon className={iconSizes[size]} />}
        {ct.label}
      </span>
      {showTooltip && tooltipVisible && (
        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-xs rounded-lg whitespace-nowrap shadow-lg z-50">
          {ct.tooltip}
          <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-gray-900" />
        </span>
      )}
    </span>
  )
}

// Legend component showing all content types
export function ContentTypeLegend() {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6">
      <h3 className="text-lg font-semibold mb-4">How to Read This Document</h3>
      <p className="text-sm text-gray-600 mb-4">
        Every section carries a content-type marker telling you what kind of claim it makes.
        Read each type differently:
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {Object.values(contentTypes).map(ct => {
          const Icon = iconMap[ct.icon]
          return (
            <div key={ct.key} className={`flex items-start gap-3 p-3 rounded-lg ${ct.bgColor} border ${ct.borderColor}`}>
              {Icon && <Icon className={`w-5 h-5 ${ct.textColor} mt-0.5 shrink-0`} />}
              <div>
                <span className={`font-medium ${ct.textColor}`}>{ct.label}</span>
                <p className="text-xs text-gray-600 mt-0.5">{ct.description}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

// Inline marker component rendered inside chapter content
export function InlineContentTypeMarker({ type }: { type: string }) {
  const ct = contentTypes[type as ContentTypeKey]
  if (!ct) return <span className="text-gray-400">[{type}]</span>

  const Icon = iconMap[ct.icon]

  return (
    <span className={`inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium ${ct.bgColor} ${ct.textColor} border ${ct.borderColor} my-2`}>
      {Icon && <Icon className="w-3 h-3" />}
      {ct.label}: {ct.tooltip}
    </span>
  )
}
