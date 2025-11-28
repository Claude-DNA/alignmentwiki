import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Alignment Wiki',
  description: 'A comprehensive encyclopedia of AI alignment research, theories, and practitioners',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-wiki-bg text-wiki-text`}>
        <div className="min-h-screen flex flex-col">
          <Navigation />
          <div className="flex flex-1">
            <Sidebar />
            <main className="flex-1 p-8 max-w-4xl">
              {children}
            </main>
          </div>
        </div>
      </body>
    </html>
  )
}
