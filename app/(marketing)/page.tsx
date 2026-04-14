// app/(marketing)/page.tsx
import type { Metadata } from 'next'
import { HeroSection } from '@/components/sections/HeroSection'
import { BrandGridSection } from '@/components/sections/BrandGridSection'
import { TradeCalloutSection } from '@/components/sections/TradeCalloutSection'
import { NewsletterSection } from '@/components/sections/NewsletterSection'

export const metadata: Metadata = {
  title: 'House of X — Architectural Surfaces & Interior Products',
  description:
    'Premium architectural surfaces, lighting, windows, and interior finishing products from seven world-class brands.',
}

export default function HomePage() {
  return (
    <main>
      <HeroSection />
      <BrandGridSection />
      <TradeCalloutSection />
      <NewsletterSection />
    </main>
  )
}
