// app/(shop)/products/[slug]/page.tsx
import type { Metadata } from 'next'
import { H1, Body } from '@/components/ui/Typography'
import { SectionReveal } from '@/components/ui/SectionReveal'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return { title: `Product: ${slug}` }
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params

  return (
    <main className="pt-16 lg:pt-20">
      <div className="max-w-site mx-auto px-6 lg:px-10 py-12 lg:py-16">
        <SectionReveal>
          <H1 className="text-stone-900 mb-4">{slug}</H1>
          <Body className="text-stone-500">Product page coming soon.</Body>
        </SectionReveal>
      </div>
    </main>
  )
}
