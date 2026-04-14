// components/brands/TerrazoLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function TerrazoLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#2A2420'
  const accentColor = '#9F9180'

  return (
    <svg 
      viewBox="0 0 200 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* TERRAZO wordmark - Engravers Gothic style, geometric caps */}
      <text
        x="0"
        y="30"
        fontFamily="Josefin Sans, sans-serif"
        fontSize="28"
        fontWeight="300"
        letterSpacing="0.2em"
        fill={textColor}
      >
        TERRAZO
      </text>
      {/* Decorative line */}
      <line
        x1="0"
        y1="36"
        x2="50"
        y2="36"
        stroke={accentColor}
        strokeWidth="1.5"
      />
    </svg>
  )
}

export function TerrazoLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#2A2420'
  
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
        fontFamily="Josefin Sans, sans-serif"
        fontSize="20"
        fontWeight="300"
        letterSpacing="0.15em"
        fill={textColor}
      >
        TERRAZO
      </text>
    </svg>
  )
}
