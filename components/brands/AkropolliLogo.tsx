// components/brands/AkropolliLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function AkropolliLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#2A1510'
  const accentColor = '#63342A'

  return (
    <div className={className} style={{ fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '0.25em', fontSize: '26px', fontWeight: 500, color: textColor, lineHeight: 1, textTransform: 'uppercase' }}>
      <div>AKROPOLLI</div>
      <div style={{ width: '40px', height: '2px', backgroundColor: accentColor, marginTop: '4px' }} />
    </div>
  )
}

export function AkropolliLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#2A1510'
  
  return (
    <div className={className} style={{ fontFamily: 'Impact, Arial Black, sans-serif', letterSpacing: '0.2em', fontSize: '18px', fontWeight: 500, color: textColor, lineHeight: 1, textTransform: 'uppercase' }}>
      AKROPOLLI
    </div>
  )
}
