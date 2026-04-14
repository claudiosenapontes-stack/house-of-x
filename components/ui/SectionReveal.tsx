// components/ui/SectionReveal.tsx
'use client'

import { type ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionRevealProps {
  children: ReactNode
  className?: string
  delay?: number
  once?: boolean
}

export function SectionReveal({ children, className, delay = 0, once = true }: SectionRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

export function StaggerReveal({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode[]
  className?: string
  stagger?: number
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: stagger } } }}
      className={className}
    >
      {Array.isArray(children)
        ? children.map((child, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
              }}
            >
              {child}
            </motion.div>
          ))
        : children}
    </motion.div>
  )
}
