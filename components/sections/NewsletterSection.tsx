// components/sections/NewsletterSection.tsx
'use client'

import { useState } from 'react'
import { SectionReveal, Label, Button } from '@/components/ui'

export function NewsletterSection() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setStatus('loading')
    await new Promise((r) => setTimeout(r, 800))
    setStatus('success')
  }

  return (
    <section className="py-24 bg-white border-t border-stone-100" aria-label="Newsletter">
      <div className="max-w-site mx-auto px-6 lg:px-10">
        <SectionReveal>
          <div className="max-w-xl mx-auto text-center">
            <Label className="text-stone-400 mb-4 block">Stay informed</Label>
            <h2 className="font-serif text-display-md text-stone-900 tracking-tight mb-4">
              New arrivals. Projects.<br />Material stories.
            </h2>
            <p className="font-sans text-body-md text-stone-400 mb-10">
              Join the House of X community for curated updates on new collections, design features, and trade opportunities.
            </p>

            {status === 'success' ? (
              <p className="font-sans text-body-md text-stone-600">Thank you — you're on the list.</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="flex-1 h-11 px-4 border border-stone-200 font-sans text-body-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors bg-white"
                  aria-label="Email address"
                />
                <Button type="submit" variant="primary" loading={status === 'loading'}>Subscribe</Button>
              </form>
            )}
          </div>
        </SectionReveal>
      </div>
    </section>
  )
}
