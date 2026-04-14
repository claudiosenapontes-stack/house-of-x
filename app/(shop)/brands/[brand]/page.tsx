// app/(shop)/brands/[brand]/page.tsx
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { getBrandBySlug, BRAND_LIST, getBrandCSSVars } from '@/lib/brands/config'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { H1, H2, Body, Label } from '@/components/ui/Typography'
import { Button, ArrowCTA } from '@/components/ui/Button'

interface Props {
  params: { brand: string }
}

export async function generateStaticParams() {
  return BRAND_LIST.map((b) => ({ brand: b.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brand = getBrandBySlug(params.brand)
  if (!brand) return { title: 'Brand Not Found' }
  return { title: brand.seoTitle, description: brand.seoDescription }
}

export default async function BrandPage({ params }: Props) {
  const brand = getBrandBySlug(params.brand)
  if (!brand) notFound()

  const cssVars = getBrandCSSVars(brand)

  return (
    <main style={cssVars as React.CSSProperties} className={brand.theme.isDarkBrand ? 'bg-[var(--brand-surface-dark)]' : 'bg-white'}>
      <section
        className="relative min-h-[85dvh] flex flex-col justify-end pb-16 lg:pb-24 pt-32 overflow-hidden"
        style={{ backgroundColor: brand.theme.surfaceDark }}
      >
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden select-none" aria-hidden>
          <span className="font-serif text-[18vw] leading-none tracking-tighter opacity-[0.04]" style={{ color: brand.theme.onSurface }}>
            {brand.displayName}
          </span>
        </div>
        <div className="relative max-w-site mx-auto px-6 lg:px-10 w-full">
          <SectionReveal>
            <Label className="mb-4 block" style={{ color: brand.theme.primary }}>{brand.subheading}</Label>
            <H1 className="max-w-4xl mb-6 text-balance" style={{ color: brand.theme.heroText }}>{brand.headline}</H1>
            <Body className="max-w-xl mb-10" style={{ color: `${brand.theme.heroText}80` }}>{brand.tagline}</Body>
            <div className="flex flex-wrap gap-4">
              <Button variant="brand" size="lg" href={`/collections/${brand.shopifyCollectionHandle}`}>Shop {brand.name}</Button>
              <Button variant="ghost" size="lg" href="/trade" className="border-white/20 hover:border-white/40" style={{ color: `${brand.theme.heroText}80` }}>Trade inquiry</Button>
            </div>
          </SectionReveal>
        </div>
      </section>

      <section className="py-section-md" style={{ backgroundColor: brand.theme.surface }}>
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <SectionReveal>
              <Label className="mb-4 block" style={{ color: brand.theme.primary }}>About {brand.name}</Label>
              <H2 className="mb-6 text-balance" style={{ color: brand.theme.onSurface }}>{brand.name}</H2>
              <Body className="leading-relaxed" style={{ color: brand.theme.onSurfaceMuted }}>{brand.description}</Body>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div className="grid grid-cols-2 gap-3">
                {brand.categories.slice(0, 4).map((cat) => (
                  <div key={cat} className="group p-5 rounded-xl border transition-all duration-300 hover:shadow-md" style={{ borderColor: `${brand.theme.primary}30`, backgroundColor: `${brand.theme.primary}08` }}>
                    <BodySm className="font-medium capitalize" style={{ color: brand.theme.onSurface }}>{cat.replace(/-/g, ' ')}</BodySm>
                    <span className="font-sans text-label mt-2 uppercase tracking-widest inline-block opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ color: brand.theme.primary }}>Explore →</span>
                  </div>
                ))}
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>
    </main>
  )
}
