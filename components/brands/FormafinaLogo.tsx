// components/brands/FormafinaLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function FormafinaLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#000000'
  const accentColor = '#C6C6C5'

  return (
    <svg 
      viewBox="0 0 220 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* FormaFina wordmark - Josefin Sans, ultra-thin caps, Apple-inspired */}
      <text
        x="0"
        y="30"
        fontFamily="Josefin Sans, sans-serif"
        fontSize="26"
        fontWeight="200"
        letterSpacing="0.15em"
        fill={textColor}
      >
        FORMAFINA
      </text>
      {/* Minimal accent line */}
      <line
        x1="0"
        y1="36"
        x2="24"
        y2="36"
        stroke={accentColor}
        strokeWidth="1"
      />
    </svg>
  )
}

export function FormafinaLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#000000'
  
  return (
    <svg 
      viewBox="0 0 150 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="24"
        fontFamily="Josefin Sans, sans-serif"
        fontSize="18"
        fontWeight="200"
        letterSpacing="0.12em"
        fill={textColor}
      >
        FORMAFINA
      </text>
    </svg>
  )
}
