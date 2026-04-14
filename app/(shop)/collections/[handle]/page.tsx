// app/(shop)/collections/[handle]/page.tsx
import type { Metadata } from 'next'
import { H1, Body } from '@/components/ui/Typography'
import { SectionReveal } from '@/components/ui/SectionReveal'

interface Props {
  params: { handle: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return { title: `Collection: ${params.handle}` }
}

export default async function CollectionPage({ params }: Props) {
  return (
    <main className="pt-16 lg:pt-20">
      <div className="max-w-site mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <SectionReveal>
          <H1 className="text-stone-900 mb-4">{params.handle}</H1>
          <Body className="text-stone-500">Collection page coming soon.</Body>
        </SectionReveal>
      </div>
    </main>
  )
}
