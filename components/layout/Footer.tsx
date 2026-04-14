// components/layout/Footer.tsx
import Link from 'next/link'
import { BRAND_LIST } from '@/lib/brands/config'
import { Label, Caption, BodySm } from '@/components/ui/Typography'

const FOOTER_LINKS = {
  Shop: [
    { label: 'All Products', href: '/collections/all' },
    { label: 'New Arrivals', href: '/collections/new-arrivals' },
    { label: 'Featured', href: '/collections/featured' },
  ],
  Company: [
    { label: 'About', href: '/about' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ],
  'Trade & Pro': [
    { label: 'Trade Program', href: '/trade' },
    { label: 'Request Sample', href: '/sample-request' },
    { label: 'Bulk Quote', href: '/quote-request' },
  ],
  Support: [
    { label: 'FAQ', href: '/faq' },
    { label: 'Shipping', href: '/shipping' },
    { label: 'Privacy', href: '/privacy' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-stone-950 text-white" role="contentinfo">
      <div className="max-w-site mx-auto px-6 lg:px-10 pt-16 pb-8">
        <div className="border-b border-stone-800 pb-12 mb-12">
          <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-10">
            <div className="max-w-xs">
              <Link href="/" className="font-serif text-2xl tracking-[0.12em] uppercase text-white hover:text-stone-300 transition-colors block mb-4">
                House of X
              </Link>
              <BodySm className="text-stone-500 leading-relaxed">
                Premium architectural surfaces and interior products — curated across seven world-class brands.
              </BodySm>
            </div>
            <div>
              <Label className="text-stone-600 mb-4 block">Our Brands</Label>
              <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-x-6 gap-y-2">
                {BRAND_LIST.map((brand) => (
                  <Link key={brand.id} href={`/brands/${brand.slug}`} className="font-sans text-body-sm text-stone-400 hover:text-white transition-colors whitespace-nowrap">
                    {brand.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <Label className="text-stone-500 mb-4 block">{section}</Label>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="font-sans text-body-sm text-stone-400 hover:text-white transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-stone-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <Caption className="text-stone-600">© {new Date().getFullYear()} House of X. All rights reserved.</Caption>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="font-sans text-caption text-stone-600 hover:text-stone-400 transition-colors">Privacy</Link>
            <Link href="/terms" className="font-sans text-caption text-stone-600 hover:text-stone-400 transition-colors">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
