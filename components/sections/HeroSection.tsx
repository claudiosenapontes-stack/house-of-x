// components/sections/HeroSection.tsx
'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
import { CasaMiaLogo } from '@/components/brands/CasaMiaLogo'

const HERO_SLIDES = [
  {
    id: 'casa-mia',
    brand: 'Casa Mia',
    headline: 'Material\narchitecture\nbegins here.',
    subline: 'Stone slabs, porcelain & translucent surfaces',
    cta: { label: 'Explore Casa Mia', href: '/brands/casa-mia' },
    bg: '#1a1410',
    accent: '#8b7355',
    showLogo: true,
  },
  {
    id: 'haus-of-light',
    brand: 'Haus of Light',
    headline: 'Light that\nreshapes\na room.',
    subline: 'Architectural lighting & ambiance systems',
    cta: { label: 'Explore Haus of Light', href: '/brands/haus-of-light' },
    bg: '#080810',
    accent: '#d4a853',
    showLogo: false,
  },
  {
    id: 'stark-windows',
    brand: 'Stark Windows',
    headline: 'Performance\nglass. Zero\ncompromise.',
    subline: 'Triple-pane, hurricane-resistant, Miami-Dade approved',
    cta: { label: 'Explore Stark Windows', href: '/brands/stark-windows' },
    bg: '#080f18',
    accent: '#4080b0',
    showLogo: false,
  },
  {
    id: 'terrazo',
    brand: 'Terrazo',
    headline: 'Luxury in\nevery\ndetail.',
    subline: 'Complete bathroom solutions',
    cta: { label: 'Explore Terrazo', href: '/brands/terrazo' },
    bg: '#1a1714',
    accent: '#9F9180',
    showLogo: false,
  },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } },
}

const lineVariants = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
}

export function HeroSection() {
  const [active, setActive] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (isPaused) return
    intervalRef.current = setInterval(() => {
      setActive((prev) => (prev + 1) % HERO_SLIDES.length)
    }, 5000)
    return () => { if (intervalRef.current) clearInterval(intervalRef.current) }
  }, [isPaused, active])

  const slide = HERO_SLIDES[active]

  return (
    <section
      className="relative w-full h-[100dvh] min-h-[600px] overflow-hidden"
      style={{ backgroundColor: slide.bg }}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Hero — featured brands"
    >
      <div className="absolute inset-0 transition-colors duration-1000" style={{ backgroundColor: slide.bg }} />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.75\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
        }}
      />

      <motion.div
        key={`brand-${active}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="absolute top-24 lg:top-32 left-8 lg:left-16"
      >
        {/* Show Casa Mia logo instead of text label */}
        {slide.showLogo ? (
          <CasaMiaLogo variant="light" className="h-8 w-auto opacity-80" />
        ) : (
          <span className="font-sans text-label text-white/40 uppercase tracking-[0.2em]">{slide.brand}</span>
        )}
      </motion.div>

      <div className="absolute inset-0 flex items-end pb-20 lg:pb-28 px-8 lg:px-16">
        <div className="max-w-site w-full">
          <motion.div key={`text-${active}`} variants={containerVariants} initial="hidden" animate="visible">
            {slide.headline.split('\n').map((line, i) => (
              <motion.div key={i} variants={lineVariants} className="overflow-hidden">
                <h1 className="font-serif text-display-xl text-white leading-none tracking-tight block">{line}</h1>
              </motion.div>
            ))}
            <motion.p variants={lineVariants} className="font-sans text-body-md text-white/50 mt-6 mb-8">
              {slide.subline}
            </motion.p>
            <motion.div variants={lineVariants}>
              <Link href={slide.cta.href} className="inline-flex items-center gap-3 group">
                <span className="font-sans text-label-lg uppercase tracking-widest transition-colors duration-300" style={{ color: slide.accent }}>
                  {slide.cta.label}
                </span>
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-2" style={{ color: slide.accent }} aria-hidden>→</span>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-8 lg:left-16 flex items-center gap-3">
        {HERO_SLIDES.map((s, i) => (
          <button
            key={s.id}
            onClick={() => { setActive(i); setIsPaused(true) }}
            className={cn('transition-all duration-500 rounded-full', i === active ? 'w-8 h-1 bg-white' : 'w-1 h-1 bg-white/30 hover:bg-white/60')}
            aria-label={`Go to slide ${i + 1}: ${s.brand}`}
            aria-current={i === active}
          />
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-white/10">
        <motion.div
          key={`progress-${active}`}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 5, ease: 'linear' }}
          className="h-full origin-left"
          style={{ backgroundColor: slide.accent }}
        />
      </div>

      <div className="absolute bottom-8 right-8 lg:right-16 flex flex-col items-center gap-2 opacity-30">
        <span className="font-sans text-label text-white uppercase tracking-[0.2em] [writing-mode:vertical-rl]">Scroll</span>
        <div className="w-px h-10 bg-white/50" />
      </div>
    </section>
  )
}
