// components/ui/Breadcrumb.tsx
import Link from 'next/link'
import { Caption } from '@/components/ui/Typography'

export function Breadcrumb({ items }: { items: { name: string; url: string }[] }) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 flex-wrap">
        {items.map((item, i) => (
          <li key={item.url} className="flex items-center gap-2">
            {i < items.length - 1 ? (
              <>
                <Link
                  href={item.url}
                  className="font-sans text-caption text-stone-400 hover:text-stone-700 transition-colors duration-200"
                >
                  {item.name}
                </Link>
                <span className="text-stone-300 text-caption">/</span>
              </>
            ) : (
              <Caption className="text-stone-600" aria-current="page">{item.name}</Caption>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}
