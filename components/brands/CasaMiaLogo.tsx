// components/brands/CasaMiaLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function CasaMiaLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#3D2A24'
  const accentColor = '#BFA9A1'

  return (
    <div className={className} style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.15em', fontSize: '28px', fontWeight: 300, color: textColor, lineHeight: 1 }}>
      <div>CASA MIA</div>
      <div style={{ width: '60px', height: '1px', backgroundColor: accentColor, marginTop: '4px' }} />
    </div>
  )
}

export function CasaMiaLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#3D2A24'
  
  return (
    <div className={className} style={{ fontFamily: 'Georgia, serif', letterSpacing: '0.12em', fontSize: '20px', fontWeight: 300, color: textColor, lineHeight: 1 }}>
      CASAMIA
    </div>
  )
}
