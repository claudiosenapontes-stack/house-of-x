// components/brands/HausOfLightLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function HausOfLightLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#0D2535'
  const accentColor = '#9F9180'

  return (
    <svg 
      viewBox="0 0 240 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Haus of Light wordmark - Barlow, semi-condensed */}
      <text
        x="0"
        y="30"
        fontFamily="Barlow, sans-serif"
        fontSize="26"
        fontWeight="500"
        letterSpacing="0.1em"
        fill={textColor}
      >
        Haus of Light
      </text>
      {/* Warm grey accent line */}
      <line
        x1="0"
        y1="36"
        x2="30"
        y2="36"
        stroke={accentColor}
        strokeWidth="2"
      />
    </svg>
  )
}

export function HausOfLightLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#0D2535'
  
  return (
    <svg 
      viewBox="0 0 160 32" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <text
        x="0"
        y="24"
        fontFamily="Barlow, sans-serif"
        fontSize="18"
        fontWeight="500"
        letterSpacing="0.08em"
        fill={textColor}
      >
        HausLight
      </text>
    </svg>
  )
}
