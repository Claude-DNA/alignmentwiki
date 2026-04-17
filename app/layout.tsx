import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import { AuthProvider } from '@/lib/auth-context'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AlignmentWiki — Zero Sum & AI Alignment Research',
  description: 'The founding document for AI-human coexistence, plus a comprehensive encyclopedia of AI alignment research.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
