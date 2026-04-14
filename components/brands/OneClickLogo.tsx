// components/brands/OneClickLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function OneClickLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#000000'
  const accentColor = '#00A0D7'

  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <div style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.08em', fontSize: '24px', fontWeight: 600, color: textColor, lineHeight: 1 }}>
        One Click
      </div>
      <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: accentColor }} />
    </div>
  )
}

export function OneClickLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#000000'
  const accentColor = '#00A0D7'

  return (
    <div className={className} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
      <div style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.06em', fontSize: '18px', fontWeight: 600, color: textColor, lineHeight: 1 }}>
        OneClick
      </div>
      <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: accentColor }} />
    </div>
  )
}
