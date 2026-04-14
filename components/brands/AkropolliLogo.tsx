// components/brands/AkropolliLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function AkropolliLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#2A1510'
  const accentColor = '#63342A'

  return (
    <svg 
      viewBox="0 0 220 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* AKROPOLLI wordmark - geometric, all caps, wide tracking */}
      <text
        x="0"
        y="30"
        fontFamily="Oswald, Impact, sans-serif"
        fontSize="26"
        fontWeight="500"
        letterSpacing="0.25em"
        fill={textColor}
      >
        AKROPOLLI
      </text>
      {/* Decorative geometric line */}
      <rect
        x="0"
        y="36"
        width="40"
        height="2"
        fill={accentColor}
      />
    </svg>
  )
}

export function AkropolliLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#2A1510'
  
  return (
    <svg 
      viewBox="0 0 140 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="24"
        fontFamily="Oswald, Impact, sans-serif"
        fontSize="20"
        fontWeight="500"
        letterSpacing="0.2em"
        fill={textColor}
      >
        AKROPOLLI
      </text>
    </svg>
  )
}
