'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight } from 'lucide-react'

const categories = [
  {
    name: 'Theories',
    href: '/wiki/theories',
    items: [
      { name: 'Corrigibility', href: '/wiki/theories/corrigibility' },
      { name: 'Interpretability', href: '/wiki/theories/interpretability' },
      { name: 'RLHF', href: '/wiki/theories/rlhf' },
      { name: 'Constitutional AI', href: '/wiki/theories/constitutional-ai' },
    ]
  },
  {
    name: 'People',
    href: '/wiki/people',
    items: [
      { name: 'Stuart Russell', href: '/wiki/people/stuart-russell' },
      { name: 'Eliezer Yudkowsky', href: '/wiki/people/eliezer-yudkowsky' },
      { name: 'Dario Amodei', href: '/wiki/people/dario-amodei' },
    ]
  },
  {
    name: 'Organizations',
    href: '/wiki/organizations',
    items: [
      { name: 'Anthropic', href: '/wiki/organizations/anthropic' },
      { name: 'MIRI', href: '/wiki/organizations/miri' },
      { name: 'ARC', href: '/wiki/organizations/arc' },
    ]
  },
  {
    name: 'Problems',
    href: '/wiki/problems',
    items: []
  },
  {
    name: 'Timeline',
    href: '/wiki/timeline',
    items: []
  },
]

export default function Sidebar() {
  const pathname = usePathname()

  return (
    <aside className="w-64 bg-wiki-sidebar border-r border-wiki-border min-h-screen p-4 hidden lg:block">
      <nav className="space-y-4">
        {categories.map((category) => (
          <div key={category.name}>
            <Link 
              href={category.href}
              className={`flex items-center justify-between text-sm font-medium py-1 no-underline ${
                pathname.startsWith(category.href) 
                  ? 'text-wiki-accent' 
                  : 'text-wiki-text hover:text-wiki-accent'
              }`}
            >
              {category.name}
              <ChevronRight className="w-4 h-4" />
            </Link>
            
            {category.items.length > 0 && (
              <ul className="mt-1 ml-3 space-y-1 border-l border-wiki-border pl-3">
                {category.items.map((item) => (
                  <li key={item.href}>
                    <Link 
                      href={item.href}
                      className={`text-sm no-underline block py-0.5 ${
                        pathname === item.href 
                          ? 'text-wiki-accent' 
                          : 'text-wiki-text-muted hover:text-wiki-text'
                      }`}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </nav>

      <div className="mt-8 pt-4 border-t border-wiki-border">
        <p className="text-xs text-wiki-text-muted">
          A community resource for AI alignment research.
        </p>
      </div>
    </aside>
  )
}
