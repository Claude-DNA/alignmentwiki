import TableOfContents from '@/components/TableOfContents'

export default function ReadLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1">
      <TableOfContents />
      <main className="flex-1 p-8 max-w-4xl mx-auto">
        {children}
      </main>
    </div>
  )
}
