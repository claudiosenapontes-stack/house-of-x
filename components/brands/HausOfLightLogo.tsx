// components/brands/HausOfLightLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function HausOfLightLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#0D2535'
  const accentColor = '#9F9180'

  return (
    <div className={className} style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.1em', fontSize: '26px', fontWeight: 500, color: textColor, lineHeight: 1 }}>
      <div>Haus of Light</div>
      <div style={{ width: '30px', height: '2px', backgroundColor: accentColor, marginTop: '4px' }} />
    </div>
  )
}

export function HausOfLightLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#0D2535'
  
  return (
    <div className={className} style={{ fontFamily: 'system-ui, sans-serif', letterSpacing: '0.08em', fontSize: '18px', fontWeight: 500, color: textColor, lineHeight: 1 }}>
      HausLight
    </div>
  )
}
