// components/brands/CasaMiaLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function CasaMiaLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#3D2A24'
  const accentColor = '#BFA9A1'

  return (
    <svg 
      viewBox="0 0 200 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Casa Mia wordmark */}
      <text
        x="0"
        y="30"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="28"
        fontWeight="300"
        letterSpacing="0.15em"
        fill={textColor}
      >
        CASA MIA
      </text>
      {/* Decorative line */}
      <line
        x1="0"
        y1="36"
        x2="60"
        y2="36"
        stroke={accentColor}
        strokeWidth="1"
      />
    </svg>
  )
}

export function CasaMiaLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#3D2A24'
  
  return (
    <svg 
      viewBox="0 0 120 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="24"
        fontFamily="Cormorant Garamond, Georgia, serif"
        fontSize="20"
        fontWeight="300"
        letterSpacing="0.12em"
        fill={textColor}
      >
        CASAMIA
      </text>
    </svg>
  )
}
