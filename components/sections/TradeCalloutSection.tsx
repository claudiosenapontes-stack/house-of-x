// components/sections/TradeCalloutSection.tsx
'use client'

import Link from 'next/link'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { Label, H2, Body } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'

export function TradeCalloutSection() {
  return (
    <section className="py-section-lg bg-stone-950 text-white overflow-hidden relative" aria-label="Trade professionals">
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 80px)',
        }}
      />
      <div className="relative max-w-site mx-auto px-6 lg:px-10">
        <div className="max-w-3xl">
          <SectionReveal>
            <Label className="text-stone-500 mb-4 block">Trade & Professionals</Label>
            <H2 className="text-white mb-6">Architects, designers,<br /> and contractors.</H2>
            <Body className="text-stone-400 mb-10 max-w-xl">
              We work closely with design and construction professionals. Access trade pricing,
              project quotes, dedicated account support, and our full technical specification library.
            </Body>
            <div className="flex flex-wrap gap-4">
              <Button variant="secondary" href="/trade" size="lg">Apply for trade account</Button>
              <Button variant="ghost" href="/trade#benefits" size="lg" className="text-stone-400 hover:text-white border-stone-800 hover:border-stone-600">Learn more</Button>
            </div>
          </SectionReveal>
        </div>

        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-16 border-t border-stone-800">
          {[
            { label: 'Trade Pricing', desc: 'Exclusive rates for verified professionals' },
            { label: 'Project Quotes', desc: 'Custom bulk pricing for large-scale projects' },
            { label: 'Spec Library', desc: 'Full technical documentation for all products' },
            { label: 'Account Manager', desc: 'Dedicated support for your projects' },
          ].map((benefit) => (
            <SectionReveal key={benefit.label}>
              <p className="font-sans text-label-lg text-white uppercase tracking-wider mb-2">{benefit.label}</p>
              <p className="font-sans text-body-sm text-stone-500">{benefit.desc}</p>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
