// components/brands/TerrazoLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function TerrazoLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#2A2420'
  const accentColor = '#9F9180'

  return (
    <div className={className} style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.2em', fontSize: '28px', fontWeight: 300, color: textColor, lineHeight: 1, textTransform: 'uppercase' }}>
      <div>TERRAZO</div>
      <div style={{ width: '50px', height: '1.5px', backgroundColor: accentColor, marginTop: '4px' }} />
    </div>
  )
}

export function TerrazoLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#2A2420'
  
  return (
    <div className={className} style={{ fontFamily: 'Arial, sans-serif', letterSpacing: '0.15em', fontSize: '20px', fontWeight: 300, color: textColor, lineHeight: 1, textTransform: 'uppercase' }}>
      TERRAZO
    </div>
  )
}
