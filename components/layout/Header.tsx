// components/layout/Header.tsx
'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'
import { IconButton } from '@/components/ui/Button'
import { Label } from '@/components/ui/Typography'
import { BRAND_LIST } from '@/lib/brands/config'

const NAV_ITEMS = [
  { label: 'Shop by Brand', key: 'brand' },
  { label: 'Shop by Category', key: 'category' },
  { label: 'Shop by Material', key: 'material' },
  { label: 'Trade', key: 'trade', href: '/trade' },
]

const CATEGORIES = [
  { label: 'Stone Slabs', href: '/categories/stone-slabs' },
  { label: 'Porcelain', href: '/categories/porcelain' },
  { label: 'Wall Finishes', href: '/categories/wall-finishes' },
  { label: 'Lighting', href: '/categories/lighting' },
  { label: 'Windows & Doors', href: '/categories/windows-doors' },
  { label: 'Bath & Vanities', href: '/categories/bath-vanities' },
]

const MATERIALS = [
  { label: 'Natural Stone', href: '/materials/natural-stone' },
  { label: 'Porcelain', href: '/materials/porcelain' },
  { label: 'Clay & Plaster', href: '/materials/clay-plaster' },
  { label: 'Glass & Smart Film', href: '/materials/glass' },
  { label: 'Wood & MDF', href: '/materials/wood' },
  { label: 'Metal', href: '/materials/metal' },
]

export function Header() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const headerRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (headerRef.current && !headerRef.current.contains(e.target as Node)) {
        setActiveMenu(null)
      }
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null)
        setMobileOpen(false)
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500',
          isScrolled || activeMenu
            ? 'bg-white/95 backdrop-blur-sm border-b border-stone-100'
            : 'bg-transparent'
        )}
      >
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-16 lg:h-20">
            <Link
              href="/"
              className="font-serif text-xl tracking-[0.12em] uppercase text-stone-900 hover:text-stone-600 transition-colors duration-300"
              onClick={() => setActiveMenu(null)}
            >
              House of X
            </Link>

            <nav className="hidden lg:flex items-center gap-8" aria-label="Main navigation">
              {NAV_ITEMS.map((item) =>
                item.href ? (
                  <Link
                    key={item.key}
                    href={item.href}
                    className="font-sans text-label-lg text-stone-600 hover:text-stone-900 tracking-wider uppercase transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.key}
                    onClick={() => setActiveMenu(activeMenu === item.key ? null : item.key)}
                    className={cn(
                      'font-sans text-label-lg tracking-wider uppercase transition-colors duration-200 flex items-center gap-1.5 group',
                      activeMenu === item.key ? 'text-stone-900' : 'text-stone-600 hover:text-stone-900'
                    )}
                    aria-expanded={activeMenu === item.key}
                  >
                    {item.label}
                    <span className={cn('transition-transform duration-300', activeMenu === item.key ? 'rotate-180' : '')}>
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden>
                        <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                )
              )}
            </nav>

            <div className="flex items-center gap-1">
              <IconButton label="Search" onClick={() => {}}>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <circle cx="8" cy="8" r="5.5" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M13 13l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </IconButton>

              <IconButton label="Cart" onClick={() => {}} className="relative">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden>
                  <path d="M1 1h2.5l1.5 9h9l1.5-7H5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="7" cy="15" r="1.2" fill="currentColor" />
                  <circle cx="13" cy="15" r="1.2" fill="currentColor" />
                </svg>
              </IconButton>

              <IconButton label="Menu" className="lg:hidden ml-1" onClick={() => setMobileOpen(!mobileOpen)}>
                <div className="w-5 flex flex-col gap-[5px]" aria-hidden>
                  <span className={cn('block h-px bg-stone-900 transition-all duration-300', mobileOpen ? 'rotate-45 translate-y-[7px]' : '')} />
                  <span className={cn('block h-px bg-stone-900 transition-all duration-300', mobileOpen ? 'opacity-0' : '')} />
                  <span className={cn('block h-px bg-stone-900 transition-all duration-300', mobileOpen ? '-rotate-45 -translate-y-[7px]' : '')} />
                </div>
              </IconButton>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {activeMenu && activeMenu !== 'trade' && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border-b border-stone-100 shadow-lg"
            >
              <div className="max-w-site mx-auto px-6 lg:px-10 py-10">
                {activeMenu === 'brand' && (
                  <div>
                    <Label className="text-stone-400 mb-6 block">Our Brands</Label>
                    <div className="grid grid-cols-4 xl:grid-cols-7 gap-4">
                      {BRAND_LIST.map((brand) => (
                        <Link
                          key={brand.id}
                          href={`/brands/${brand.slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="group flex flex-col gap-3 p-4 rounded-lg hover:bg-stone-50 transition-colors duration-200"
                        >
                          <div
                            className="w-full aspect-square rounded-md"
                            style={{ backgroundColor: brand.theme.surface, border: `1px solid ${brand.theme.light}` }}
                          />
                          <div>
                            <p className="font-sans text-body-sm font-medium text-stone-900 group-hover:text-stone-600 transition-colors">
                              {brand.name}
                            </p>
                            <p className="font-sans text-caption text-stone-400 mt-0.5 leading-tight">{brand.subheading}</p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {activeMenu === 'category' && (
                  <div className="grid grid-cols-3 gap-8">
                    <div>
                      <Label className="text-stone-400 mb-4 block">Product Categories</Label>
                      <ul className="space-y-3">
                        {CATEGORIES.map((cat) => (
                          <li key={cat.href}>
                            <Link
                              href={cat.href}
                              onClick={() => setActiveMenu(null)}
                              className="font-sans text-body-md text-stone-700 hover:text-stone-900 transition-colors duration-200 flex items-center gap-2 group"
                            >
                              <span className="w-0 group-hover:w-3 h-px bg-stone-900 transition-all duration-300 overflow-hidden" />
                              {cat.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="col-span-2 bg-stone-50 rounded-xl p-6 flex items-end">
                      <div>
                        <p className="font-serif text-heading-lg text-stone-800 mb-3">
                          Complete architectural sourcing, under one roof.
                        </p>
                        <Link
                          href="/collections/all"
                          onClick={() => setActiveMenu(null)}
                          className="font-sans text-label-lg text-stone-600 hover:text-stone-900 uppercase tracking-wider transition-colors"
                        >
                          Browse all products →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}

                {activeMenu === 'material' && (
                  <div className="grid grid-cols-2 gap-8">
                    <div>
                      <Label className="text-stone-400 mb-4 block">By Material</Label>
                      <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
                        {MATERIALS.map((mat) => (
                          <li key={mat.href}>
                            <Link
                              href={mat.href}
                              onClick={() => setActiveMenu(null)}
                              className="font-sans text-body-md text-stone-700 hover:text-stone-900 transition-colors"
                            >
                              {mat.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-stone-900 rounded-xl p-8 flex items-end text-white">
                      <div>
                        <Label className="text-stone-400 mb-3 block">New arrivals</Label>
                        <p className="font-serif text-heading-lg mb-4">Translucent stone collections</p>
                        <Link
                          href="/collections/new-arrivals"
                          onClick={() => setActiveMenu(null)}
                          className="font-sans text-label-lg text-stone-300 hover:text-white uppercase tracking-wider transition-colors"
                        >
                          Explore →
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-30 bg-stone-950/40 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-y-0 right-0 z-40 w-full max-w-sm bg-white shadow-2xl lg:hidden overflow-y-auto"
            >
              <div className="p-6 pt-20 space-y-8">
                <nav>
                  <ul className="space-y-1">
                    {BRAND_LIST.map((brand) => (
                      <li key={brand.id}>
                        <Link
                          href={`/brands/${brand.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="flex items-center justify-between py-3 border-b border-stone-100 group"
                        >
                          <span className="font-sans text-body-md font-medium text-stone-900">{brand.name}</span>
                          <span className="text-stone-400 group-hover:text-stone-900 transition-colors">→</span>
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
                <div className="space-y-4">
                  <Link href="/trade" onClick={() => setMobileOpen(false)} className="block font-sans text-label-lg text-stone-600 uppercase tracking-wider">
                    Trade & Professionals
                  </Link>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
