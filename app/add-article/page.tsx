'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/lib/auth-context'
import { createArticle } from '@/lib/supabase'
import { Plus, Minus } from 'lucide-react'

const categories = [
  { value: 'theories', label: 'Theories & Approaches', description: 'Technical approaches to AI alignment' },
  { value: 'people', label: 'People', description: 'Researchers and practitioners in the field' },
  { value: 'organizations', label: 'Organizations', description: 'Research labs, nonprofits, and companies' },
  { value: 'papers', label: 'Key Papers', description: 'Foundational and influential research papers' },
  { value: 'problems', label: 'Open Problems', description: 'Unsolved challenges in alignment research' },
]

interface Resource {
  title: string
  url: string
  type: 'paper' | 'blog' | 'video' | 'podcast' | 'book' | 'other'
}

export default function AddArticlePage() {
  const router = useRouter()
  const { user, loading } = useAuth()
  
  const [category, setCategory] = useState('')
  const [title, setTitle] = useState('')
  const [slug, setSlug] = useState('')
  const [summary, setSummary] = useState('')
  const [content, setContent] = useState('')
  const [resources, setResources] = useState<Resource[]>([{ title: '', url: '', type: 'paper' }])
  const [tags, setTags] = useState('')
  
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState('')

  // Auto-generate slug from title
  const handleTitleChange = (value: string) => {
    setTitle(value)
    const generatedSlug = value
      .toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim()
    setSlug(generatedSlug)
  }

  const addResource = () => {
    setResources([...resources, { title: '', url: '', type: 'paper' }])
  }

  const removeResource = (index: number) => {
    setResources(resources.filter((_, i) => i !== index))
  }

  const updateResource = (index: number, field: keyof Resource, value: string) => {
    const updated = [...resources]
    updated[index] = { ...updated[index], [field]: value }
    setResources(updated)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!user) return

    // Validation
    if (!category || !title || !slug || !summary || !content) {
      setError('Please fill in all required fields')
      return
    }

    setSubmitting(true)
    setError('')

    try {
      // Filter out empty resources
      const validResources = resources.filter(r => r.title && r.url)
      
      await createArticle({
        category,
        title,
        slug,
        summary,
        content,
        resources: validResources,
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        user_id: user.id,
        user_name: user.name,
        user_email: user.email,
      })
      
      setSubmitted(true)
    } catch (err: any) {
      setError(err.message || 'Failed to submit article')
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
    return (
      <div className="wiki-article max-w-2xl mx-auto text-center">
        <h1>Sign in to Add Articles</h1>
        <p className="text-wiki-text-muted mb-6">
          You need an account to suggest new articles for the wiki.
        </p>
        <Link 
          href="/auth?redirect=/add-article"
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
        <h1>Article Submitted</h1>
        <p className="text-wiki-text-muted mb-6">
          Thank you for your contribution! Your article <strong>"{title}"</strong> has been 
          submitted for review. A moderator will review it and you'll be notified of the outcome.
        </p>
        <div className="space-x-4">
          <Link 
            href="/"
            className="inline-block bg-wiki-accent text-white py-2 px-6 rounded-lg hover:bg-wiki-accent-hover transition-colors no-underline"
          >
            Back to Home
          </Link>
          <button
            onClick={() => {
              setSubmitted(false)
              setCategory('')
              setTitle('')
              setSlug('')
              setSummary('')
              setContent('')
              setResources([{ title: '', url: '', type: 'paper' }])
              setTags('')
            }}
            className="border border-wiki-border py-2 px-6 rounded-lg hover:border-wiki-accent transition-colors"
          >
            Add Another Article
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="wiki-article max-w-3xl mx-auto">
      <h1>Add New Article</h1>
      
      <p className="text-wiki-text-muted mb-6">
        Suggest a new article for the Alignment Wiki. All submissions are reviewed before publication.
      </p>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Category Selection */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Category <span className="text-red-500">*</span>
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {categories.map((cat) => (
              <label 
                key={cat.value}
                className={`flex items-start p-3 border rounded-lg cursor-pointer transition-colors ${
                  category === cat.value 
                    ? 'border-wiki-accent bg-wiki-accent/5' 
                    : 'border-wiki-border hover:border-wiki-accent/50'
                }`}
              >
                <input
                  type="radio"
                  name="category"
                  value={cat.value}
                  checked={category === cat.value}
                  onChange={(e) => setCategory(e.target.value)}
                  className="mt-1 mr-3"
                />
                <div>
                  <span className="font-medium">{cat.label}</span>
                  <p className="text-xs text-wiki-text-muted mt-0.5">{cat.description}</p>
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Article Title <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => handleTitleChange(e.target.value)}
            className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent"
            placeholder="e.g., Constitutional AI"
          />
        </div>

        {/* Slug */}
        <div>
          <label className="block text-sm font-medium mb-1">
            URL Slug <span className="text-red-500">*</span>
            <span className="text-wiki-text-muted font-normal ml-2">(auto-generated, editable)</span>
          </label>
          <div className="flex items-center">
            <span className="text-wiki-text-muted text-sm mr-2">/wiki/{category || '...'}/</span>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value.toLowerCase().replace(/[^a-z0-9-]/g, ''))}
              className="flex-1 px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent"
              placeholder="constitutional-ai"
            />
          </div>
        </div>

        {/* Summary */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Short Summary <span className="text-red-500">*</span>
            <span className="text-wiki-text-muted font-normal ml-2">(1-2 sentences for listings)</span>
          </label>
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent h-20"
            placeholder="A brief description that will appear in category listings..."
          />
        </div>

        {/* Main Content */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Article Content <span className="text-red-500">*</span>
            <span className="text-wiki-text-muted font-normal ml-2">(Markdown supported)</span>
          </label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent h-64 font-mono text-sm"
            placeholder={`## Overview

Write your article content here...

## Key Concepts

- Concept 1
- Concept 2

## History

...`}
          />
        </div>

        {/* Resources */}
        <div>
          <label className="block text-sm font-medium mb-2">
            Resources & Links
            <span className="text-wiki-text-muted font-normal ml-2">(papers, articles, videos)</span>
          </label>
          
          <div className="space-y-3">
            {resources.map((resource, index) => (
              <div key={index} className="flex gap-2 items-start">
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-2">
                  <input
                    type="text"
                    value={resource.title}
                    onChange={(e) => updateResource(index, 'title', e.target.value)}
                    className="px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent text-sm"
                    placeholder="Resource title"
                  />
                  <input
                    type="url"
                    value={resource.url}
                    onChange={(e) => updateResource(index, 'url', e.target.value)}
                    className="px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent text-sm"
                    placeholder="https://..."
                  />
                  <select
                    value={resource.type}
                    onChange={(e) => updateResource(index, 'type', e.target.value as Resource['type'])}
                    className="px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent text-sm bg-white"
                  >
                    <option value="paper">Paper</option>
                    <option value="blog">Blog Post</option>
                    <option value="video">Video</option>
                    <option value="podcast">Podcast</option>
                    <option value="book">Book</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                {resources.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeResource(index)}
                    className="p-2 text-wiki-text-muted hover:text-red-500"
                  >
                    <Minus size={16} />
                  </button>
                )}
              </div>
            ))}
          </div>
          
          <button
            type="button"
            onClick={addResource}
            className="mt-2 flex items-center gap-1 text-sm text-wiki-accent hover:underline"
          >
            <Plus size={14} />
            Add another resource
          </button>
        </div>

        {/* Tags */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Tags
            <span className="text-wiki-text-muted font-normal ml-2">(comma-separated)</span>
          </label>
          <input
            type="text"
            value={tags}
            onChange={(e) => setTags(e.target.value)}
            className="w-full px-3 py-2 border border-wiki-border rounded-lg focus:outline-none focus:border-wiki-accent"
            placeholder="e.g., rlhf, anthropic, training"
          />
        </div>

        {error && (
          <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg">
            {error}
          </div>
        )}

        <div className="flex gap-4 pt-4">
          <button
            type="submit"
            disabled={submitting}
            className="bg-wiki-accent text-white py-2 px-6 rounded-lg hover:bg-wiki-accent-hover transition-colors disabled:opacity-50"
          >
            {submitting ? 'Submitting...' : 'Submit Article'}
          </button>
          <Link
            href="/"
            className="border border-wiki-border py-2 px-6 rounded-lg hover:border-wiki-accent transition-colors no-underline text-wiki-text"
          >
            Cancel
          </Link>
        </div>
      </form>

      <div className="mt-8 pt-6 border-t border-wiki-border">
        <h3 className="font-medium mb-2">Article Guidelines</h3>
        <ul className="text-sm text-wiki-text-muted space-y-1">
          <li>• Write in a neutral, encyclopedic tone</li>
          <li>• Cite sources for factual claims</li>
          <li>• Include relevant links and resources</li>
          <li>• Avoid promotional or biased language</li>
          <li>• Articles may be edited for clarity and accuracy</li>
        </ul>
      </div>
    </div>
  )
}
