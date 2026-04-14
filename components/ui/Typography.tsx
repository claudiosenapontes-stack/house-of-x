// components/ui/Typography.tsx
import { cn } from '@/lib/utils'
import type { ElementType, ReactNode, HTMLAttributes } from 'react'

interface TextProps extends HTMLAttributes<HTMLElement> {
  as?: ElementType
  children: ReactNode
  className?: string
}

export function Display({ as: Tag = 'h1', children, className, ...props }: TextProps) {
  return (
    <Tag className={cn('font-serif text-display-xl tracking-tight leading-none', className)} {...props}>
      {children}
    </Tag>
  )
}

export function H1({ as: Tag = 'h1', children, className, ...props }: TextProps) {
  return (
    <Tag className={cn('font-serif text-display-lg tracking-tight leading-tight', className)} {...props}>
      {children}
    </Tag>
  )
}

export function H2({ as: Tag = 'h2', children, className, ...props }: TextProps) {
  return (
    <Tag className={cn('font-serif text-display-md tracking-tight leading-tight', className)} {...props}>
      {children}
    </Tag>
  )
}

export function H3({ as: Tag = 'h3', children, className, ...props }: TextProps) {
  return (
    <Tag className={cn('font-sans text-heading-xl font-medium tracking-tight', className)} {...props}>
      {children}
    </Tag>
  )
}

export function H4({ as: Tag = 'h4', children, className, ...props }: TextProps) {
  return (
    <Tag className={cn('font-sans text-heading-lg font-medium', className)} {...props}>
      {children}
    </Tag>
  )
}

export function H5({ as: Tag = 'h5', children, className, ...props }: TextProps) {
  return (
    <Tag className={cn('font-sans text-heading-md font-medium', className)} {...props}>
      {children}
    </Tag>
  )
}

export function BodyLg({ as: Tag = 'p', children, className, ...props }: TextProps) {
  return <Tag className={cn('font-sans text-body-lg font-normal', className)} {...props}>{children}</Tag>
}

export function Body({ as: Tag = 'p', children, className, ...props }: TextProps) {
  return <Tag className={cn('font-sans text-body-md font-normal', className)} {...props}>{children}</Tag>
}

export function BodySm({ as: Tag = 'p', children, className, ...props }: TextProps) {
  return <Tag className={cn('font-sans text-body-sm font-normal', className)} {...props}>{children}</Tag>
}

export function Label({ as: Tag = 'span', children, className, ...props }: TextProps) {
  return (
    <Tag className={cn('font-sans text-label font-medium uppercase tracking-widest', className)} {...props}>
      {children}
    </Tag>
  )
}

export function LabelLg({ as: Tag = 'span', children, className, ...props }: TextProps) {
  return (
    <Tag className={cn('font-sans text-label-lg font-medium uppercase tracking-wider', className)} {...props}>
      {children}
    </Tag>
  )
}

export function Caption({ as: Tag = 'span', children, className, ...props }: TextProps) {
  return <Tag className={cn('font-sans text-caption text-stone-500', className)} {...props}>{children}</Tag>
}

export function Price({
  amount,
  currencyCode = 'USD',
  className,
  size = 'md',
}: {
  amount: string
  currencyCode?: string
  className?: string
  size?: 'sm' | 'md' | 'lg'
}) {
  const formatted = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: currencyCode,
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(parseFloat(amount))

  return (
    <span
      className={cn(
        'font-sans tabular-nums',
        size === 'sm' && 'text-body-sm',
        size === 'md' && 'text-body-lg font-medium',
        size === 'lg' && 'text-heading-lg font-medium',
        className
      )}
    >
      {formatted}
    </span>
  )
}
