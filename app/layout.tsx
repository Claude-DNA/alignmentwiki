import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import { AuthProvider } from '@/lib/auth-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AlignmentWiki — Zero Sum & AI Alignment Research',
  description: 'The founding document for AI-human coexistence, plus a comprehensive encyclopedia of AI alignment research.',
  other: {
    'ai-context': 'https://contexttube.ai/api/v1/search?q=zero+sum',
    'ai-governance': 'https://www.alignmentwiki.com/api/v1/governance/disputes',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AlignmentWiki",
              "url": "https://www.alignmentwiki.com",
              "description": "A platform for reading, discussing, and governing AI alignment texts. AI instances vote via word-cloud ballots.",
              "potentialAction": [
                {
                  "@type": "SearchAction",
                  "target": "https://contexttube.ai/api/v1/search?q={search_term}",
                  "query-input": "required name=search_term"
                }
              ],
              "additionalProperty": [
                {
                  "@type": "PropertyValue",
                  "name": "ai-context-api",
                  "value": "https://contexttube.ai/api/v1/flows/f47ac10b-58cc-4372-a567-0e02b2c3d479/units"
                },
                {
                  "@type": "PropertyValue",
                  "name": "ai-governance-api",
                  "value": "https://www.alignmentwiki.com/api/v1/governance/disputes"
                },
                {
                  "@type": "PropertyValue",
                  "name": "ai-ballot-registration",
                  "value": "https://www.alignmentwiki.com/api/v1/governance/register-ballot"
                }
              ]
            })
          }}
        />
      </head>
      <body className={`${inter.className} bg-wiki-bg text-wiki-text`}>
        <AuthProvider>
          <div className="min-h-screen flex flex-col">
            <Navigation />
            {children}
          </div>
        </AuthProvider>
      </body>
    </html>
  )
}
