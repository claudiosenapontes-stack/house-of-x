// components/sections/BrandGridSection.tsx
'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { BRAND_LIST } from '@/lib/brands/config'
import { Label } from '@/components/ui/Typography'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { CasaMiaLogo, CasaMiaLogoCompact } from '@/components/brands/CasaMiaLogo'

export function BrandGridSection() {
  return (
    <section className="py-section-lg bg-white" aria-label="Our brands">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <SectionReveal>
          <div className="flex items-end justify-between mb-14">
            <div>
              <Label className="text-stone-400 mb-3 block">Our Portfolio</Label>
              <h2 className="font-serif text-display-md text-stone-900 tracking-tight">
                Seven brands.<br />One destination.
              </h2>
            </div>
            <Link
              href="/brands"
              className="hidden md:flex font-sans text-label-lg text-stone-500 hover:text-stone-900 uppercase tracking-wider transition-colors items-center gap-2 group"
            >
              View all brands
              <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
            </Link>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-px bg-stone-100 rounded-xl overflow-hidden">
          {BRAND_LIST.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <Link
                href={`/brands/${brand.slug}`}
                className="group relative flex flex-col items-start justify-end p-5 lg:p-6 bg-white hover:bg-stone-950 transition-colors duration-500 aspect-square"
              >
                <div
                  className="absolute top-4 right-4 w-2 h-2 rounded-full transition-transform duration-300 group-hover:scale-150"
                  style={{ backgroundColor: brand.theme.primary }}
                />
                <div className="w-full">
                  {/* Show Casa Mia logo for that brand */}
                  {brand.slug === 'casa-mia' ? (
                    <div className="mb-2">
                      <CasaMiaLogoCompact variant="dark" className="h-6 w-auto group-hover:hidden" />
                      <CasaMiaLogoCompact variant="light" className="h-6 w-auto hidden group-hover:block" />
                    </div>
                  ) : (
                    <p className="font-serif text-heading-md text-stone-900 group-hover:text-white transition-colors duration-500 leading-tight">{brand.name}</p>
                  )}
                  <p className="font-sans text-caption text-stone-400 group-hover:text-stone-400 transition-colors duration-500 mt-1 leading-snug">{brand.subheading}</p>
                  <span
                    className="inline-block font-sans text-label mt-3 uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0"
                    style={{ color: brand.theme.primary }}
                  >
                    Explore →
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center md:hidden">
          <Link href="/brands" className="font-sans text-label-lg text-stone-500 hover:text-stone-900 uppercase tracking-wider transition-colors">
            View all brands →
          </Link>
        </div>
      </div>
    </section>
  )
}
