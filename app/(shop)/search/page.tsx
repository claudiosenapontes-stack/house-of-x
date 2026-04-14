// app/(shop)/search/page.tsx
import type { Metadata } from 'next'
import { H1, Body } from '@/components/ui/Typography'
import { SectionReveal } from '@/components/ui/SectionReveal'

export const metadata: Metadata = {
  title: 'Search',
  robots: { index: false, follow: true },
}

interface Props {
  searchParams: { q?: string }
}

export default async function SearchPage({ searchParams }: Props) {
  const query = searchParams.q?.trim() ?? ''

  return (
    <main className="pt-16 lg:pt-20">
      <div className="max-w-site mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <SectionReveal>
          {query ? (
            <H1 className="text-stone-900 mb-4">Search: &ldquo;{query}&rdquo;</H1>
          ) : (
            <H1 className="text-stone-900 mb-4">Search</H1>
          )}
          <Body className="text-stone-500">Search functionality coming soon.</Body>
        </SectionReveal>
      </div>
    </main>
  )
}
