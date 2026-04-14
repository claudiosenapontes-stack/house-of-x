// app/layout.tsx
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import '@/app/globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? 'https://houseofx.com'),
  title: {
    default: 'House of X — Architectural Surfaces & Interior Products',
    template: '%s | House of X',
  },
  description:
    'Premium architectural surfaces, lighting, windows, and interior finishing products from seven world-class brands.',
  keywords: ['architectural surfaces', 'stone slabs', 'luxury interiors'],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://houseofx.com',
    siteName: 'House of X',
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="bg-white text-stone-900 antialiased">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
