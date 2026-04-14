// components/brands/OneClickLogo.tsx
interface Props {
  className?: string
  variant?: 'light' | 'dark'
}

export function OneClickLogo({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#000000'
  const accentColor = '#00A0D7'

  return (
    <svg 
      viewBox="0 0 200 40" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* One Click wordmark - Montserrat, modern tech feel */}
      <text
        x="0"
        y="30"
        fontFamily="Montserrat, system-ui, sans-serif"
        fontSize="24"
        fontWeight="600"
        letterSpacing="0.08em"
        fill={textColor}
      >
        One Click
      </text>
      {/* Cyan accent dot */}
      <circle
        cx="188"
        cy="20"
        r="4"
        fill={accentColor}
      />
    </svg>
  )
}

export function OneClickLogoCompact({ className = '', variant = 'dark' }: Props) {
  const textColor = variant === 'light' ? '#FFFFFF' : '#000000'
  const accentColor = '#00A0D7'
  
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
        fontFamily="Montserrat, system-ui, sans-serif"
        fontSize="18"
        fontWeight="600"
        letterSpacing="0.06em"
        fill={textColor}
      >
        OneClick
      </text>
      <circle
        cx="130"
        cy="16"
        r="3"
        fill={accentColor}
      />
    </svg>
  )
}
