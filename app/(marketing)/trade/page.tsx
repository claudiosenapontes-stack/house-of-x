// app/(marketing)/trade/page.tsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionReveal } from '@/components/ui/SectionReveal'
import { H1, H2, H3, H4, Body, BodySm, Label, Caption } from '@/components/ui/Typography'
import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

const BENEFITS = [
  { title: 'Trade Pricing', description: 'Access exclusive rates on all brands for qualified professionals.', icon: '◈' },
  { title: 'Dedicated Account Manager', description: 'A single point of contact for all your project needs.', icon: '◉' },
  { title: 'Project Quotes', description: 'Custom bulk pricing and logistics support for large-scale projects.', icon: '◫' },
  { title: 'Technical Library', description: 'Full spec sheets, installation guides, compliance documentation.', icon: '◧' },
  { title: 'Sample Service', description: 'Material samples dispatched within 48 hours for qualifying products.', icon: '◱' },
  { title: 'Early Access', description: 'Preview new collections before public release.', icon: '◲' },
]

const PROFESSIONS = ['Architect', 'Interior Designer', 'General Contractor', 'Developer / Builder', 'Procurement Specialist', 'Other']

const fieldClass =
  'w-full h-11 px-4 border border-stone-200 bg-white font-sans text-body-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-stone-900 transition-colors'

export default function TradePage() {
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', company: '', profession: '', projectDescription: '', website: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise((r) => setTimeout(r, 1000))
    setLoading(false)
    setSubmitted(true)
  }

  return (
    <main className="pt-16 lg:pt-20">
      <section className="bg-stone-950 text-white py-section-lg overflow-hidden relative">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'repeating-linear-gradient(0deg,#fff,#fff 1px,transparent 1px,transparent 80px),repeating-linear-gradient(90deg,#fff,#fff 1px,transparent 1px,transparent 80px)' }} aria-hidden />
        <div className="relative max-w-site mx-auto px-6 lg:px-10">
          <SectionReveal>
            <Label className="text-stone-500 mb-4 block">Trade & Professionals</Label>
            <H1 className="text-white max-w-3xl text-balance mb-6">Built for architects, designers, and builders.</H1>
            <Body className="text-stone-400 max-w-xl mb-10">
              House of X works directly with design and construction professionals, giving you access to the full portfolio across all seven brands.
            </Body>
            <a href="#apply" className="inline-flex items-center gap-2 font-sans text-label-lg text-white uppercase tracking-widest border-b border-white/30 hover:border-white pb-1 transition-colors">Apply for a trade account →</a>
          </SectionReveal>
        </div>
      </section>

      <section className="py-section-md bg-white" aria-label="Trade benefits">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <SectionReveal>
            <Label className="text-stone-400 mb-3 block">What you get</Label>
            <H2 className="text-stone-900 mb-14">Trade account benefits</H2>
          </SectionReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {BENEFITS.map((benefit, i) => (
              <SectionReveal key={benefit.title} delay={i * 0.07}>
                <div className="group p-8 border border-stone-100 rounded-xl hover:border-stone-300 hover:shadow-sm transition-all duration-300">
                  <span className="text-2xl text-stone-300 mb-4 block group-hover:text-stone-500 transition-colors">{benefit.icon}</span>
                  <H4 className="text-stone-900 mb-2">{benefit.title}</H4>
                  <BodySm className="text-stone-500 leading-relaxed">{benefit.description}</BodySm>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <section id="apply" className="py-section-md bg-stone-50" aria-label="Trade application">
        <div className="max-w-site mx-auto px-6 lg:px-10">
          <div className="max-w-2xl mx-auto">
            <SectionReveal>
              <Label className="text-stone-400 mb-3 block">Get started</Label>
              <H2 className="text-stone-900 mb-3">Apply for a trade account</H2>
              <Body className="text-stone-500 mb-10">Complete the form below and our trade team will review your application within 2 business days.</Body>
            </SectionReveal>

            {submitted ? (
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="text-center py-16">
                <div className="w-14 h-14 rounded-full bg-stone-900 text-white flex items-center justify-center mx-auto mb-6 text-xl">✓</div>
                <H3 className="text-stone-900 mb-3">Application received</H3>
                <Body className="text-stone-500">Thank you. Our trade team will be in touch within 2 business days.</Body>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-label-lg text-stone-600 uppercase tracking-wider mb-2">First name <span className="text-stone-400">*</span></label>
                    <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required className={fieldClass} />
                  </div>
                  <div>
                    <label className="block font-sans text-label-lg text-stone-600 uppercase tracking-wider mb-2">Last name <span className="text-stone-400">*</span></label>
                    <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required className={fieldClass} />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-label-lg text-stone-600 uppercase tracking-wider mb-2">Work email <span className="text-stone-400">*</span></label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} required className={fieldClass} />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-sans text-label-lg text-stone-600 uppercase tracking-wider mb-2">Phone</label>
                    <input type="tel" name="phone" value={form.phone} onChange={handleChange} className={fieldClass} />
                  </div>
                  <div>
                    <label className="block font-sans text-label-lg text-stone-600 uppercase tracking-wider mb-2">Company name <span className="text-stone-400">*</span></label>
                    <input type="text" name="company" value={form.company} onChange={handleChange} required className={fieldClass} />
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-label-lg text-stone-600 uppercase tracking-wider mb-2">Profession <span className="text-stone-400">*</span></label>
                  <div className="relative">
                    <select name="profession" value={form.profession} onChange={handleChange} required className={cn(fieldClass, 'appearance-none pr-10 cursor-pointer')}>
                      <option value="">Select your role</option>
                      {PROFESSIONS.map((p) => <option key={p} value={p}>{p}</option>)}
                    </select>
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-stone-400">
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none"><path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                    </span>
                  </div>
                </div>
                <div>
                  <label className="block font-sans text-label-lg text-stone-600 uppercase tracking-wider mb-2">Company website</label>
                  <input type="url" name="website" value={form.website} onChange={handleChange} placeholder="https://" className={fieldClass} />
                </div>
                <div>
                  <label className="block font-sans text-label-lg text-stone-600 uppercase tracking-wider mb-2">Tell us about your practice</label>
                  <textarea name="projectDescription" value={form.projectDescription} onChange={handleChange} rows={4} className={cn(fieldClass, 'resize-none h-auto py-3')} placeholder="Briefly describe the types of projects you work on." />
                </div>
                <div className="pt-2">
                  <Button type="submit" variant="primary" size="lg" fullWidth loading={loading}>Submit application</Button>
                  <Caption className="block text-center text-stone-400 mt-4">We review all applications within 2 business days.</Caption>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
