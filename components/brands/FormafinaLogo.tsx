// components/brands/FormafinaLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function FormafinaLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#000000'
  const accentColor = '#C6C6C5'

  return (
    <div className={className} style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.15em', fontSize: '26px', fontWeight: 200, color: textColor, lineHeight: 1, textTransform: 'uppercase' }}>
      <div>FORMAFINA</div>
      <div style={{ width: '24px', height: '1px', backgroundColor: accentColor, marginTop: '4px' }} />
    </div>
  )
}

export function FormafinaLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#000000'
  
  return (
    <div className={className} style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.12em', fontSize: '18px', fontWeight: 200, color: textColor, lineHeight: 1, textTransform: 'uppercase' }}>
      FORMAFINA
    </div>
  )
}
