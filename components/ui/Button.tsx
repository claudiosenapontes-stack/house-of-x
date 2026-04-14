// components/ui/Button.tsx
'use client'

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline' | 'brand'
type Size = 'sm' | 'md' | 'lg'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant
  size?: Size
  href?: string
  external?: boolean
  loading?: boolean
  fullWidth?: boolean
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  children: ReactNode
}

const base =
  'inline-flex items-center justify-center gap-2.5 font-sans font-medium tracking-wide ' +
  'transition-all duration-300 ease-luxury cursor-pointer select-none ' +
  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900 focus-visible:ring-offset-2 ' +
  'disabled:opacity-40 disabled:cursor-not-allowed active:scale-[0.98]'

const variants: Record<Variant, string> = {
  primary:
    'bg-stone-900 text-white hover:bg-stone-700 border border-stone-900 hover:border-stone-700',
  secondary:
    'bg-white text-stone-900 hover:bg-stone-50 border border-stone-200 hover:border-stone-300',
  ghost:
    'bg-transparent text-stone-900 hover:bg-stone-100 border border-transparent',
  outline:
    'bg-transparent text-stone-900 hover:bg-stone-900 hover:text-white border border-stone-900 transition-colors duration-300',
  brand:
    'bg-[var(--brand-cta)] text-[var(--brand-on-cta)] hover:opacity-90 border border-[var(--brand-cta)]',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-label gap-2',
  md: 'h-11 px-6 text-label-lg gap-2.5',
  lg: 'h-12 px-8 text-body-sm gap-3',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      href,
      external,
      loading,
      fullWidth,
      icon,
      iconPosition = 'right',
      children,
      className,
      ...props
    },
    ref
  ) => {
    const classes = cn(
      base,
      variants[variant],
      sizes[size],
      fullWidth && 'w-full',
      loading && 'opacity-60 cursor-wait',
      className
    )

    const content = (
      <>
        {loading && (
          <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin shrink-0" />
        )}
        {!loading && icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
        <span>{children}</span>
        {!loading && icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
      </>
    )

    if (href) {
      return external ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {content}
        </a>
      ) : (
        <Link href={href} className={classes}>
          {content}
        </Link>
      )
    }

    return (
      <button ref={ref} className={classes} disabled={loading} {...props}>
        {content}
      </button>
    )
  }
)

Button.displayName = 'Button'

export function ArrowCTA({
  href,
  children,
  className,
  variant = 'dark',
}: {
  href: string
  children: ReactNode
  className?: string
  variant?: 'dark' | 'light'
}) {
  return (
    <Link
      href={href}
      className={cn(
        'group inline-flex items-center gap-2 font-sans text-label-lg font-medium uppercase tracking-wider transition-all duration-300',
        variant === 'dark' ? 'text-stone-900 hover:text-stone-600' : 'text-white hover:text-stone-200',
        className
      )}
    >
      <span>{children}</span>
      <span className="inline-block transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden>→</span>
    </Link>
  )
}

export function IconButton({
  label,
  children,
  className,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { label: string; children: ReactNode }) {
  return (
    <button
      aria-label={label}
      className={cn(
        'flex items-center justify-center w-10 h-10 rounded-full text-stone-700 hover:text-stone-900 hover:bg-stone-100 transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-stone-900',
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
