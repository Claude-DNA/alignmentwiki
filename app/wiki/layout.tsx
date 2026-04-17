import Sidebar from '@/components/Sidebar'

export default function WikiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex flex-1">
      <Sidebar />
      <main className="flex-1 p-8 max-w-4xl">
        {children}
      </main>
    </div>
  )
}
