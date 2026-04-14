import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['monospace'],
      },
      fontSize: {
        'display-2xl': ['clamp(64px, 8vw, 120px)', { lineHeight: '0.95', letterSpacing: '-0.03em' }],
        'display-xl': ['clamp(48px, 6vw, 96px)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(36px, 4.5vw, 72px)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(28px, 3.5vw, 52px)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'heading-xl': ['clamp(24px, 2.5vw, 40px)', { lineHeight: '1.1', letterSpacing: '-0.01em' }],
        'heading-lg': ['clamp(20px, 2vw, 32px)', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading-md': ['22px', { lineHeight: '1.3', letterSpacing: '-0.005em' }],
        'body-lg': ['18px', { lineHeight: '1.65' }],
        'body-md': ['16px', { lineHeight: '1.65' }],
        'body-sm': ['14px', { lineHeight: '1.6' }],
        'caption': ['12px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'label': ['11px', { lineHeight: '1.4', letterSpacing: '0.06em' }],
        'label-lg': ['13px', { lineHeight: '1.4', letterSpacing: '0.04em' }],
      },
      spacing: {
        '18': '72px',
        '22': '88px',
        '26': '104px',
        '30': '120px',
        'section-sm': '80px',
        'section-md': '120px',
        'section-lg': '160px',
        'section-xl': '200px',
        'hero': '100dvh',
      },
      colors: {
        stone: {
          50: '#fafaf9', 100: '#f5f5f3', 200: '#e8e5e0',
          300: '#d4cfc7', 400: '#b0a898', 500: '#8a7f70',
          600: '#6b6057', 700: '#504840', 800: '#352e28',
          900: '#1e1916', 950: '#0f0d0b',
        },
        'brand-casa': {
          base: '#8b7355', light: '#d4c5b2', dark: '#2c2017',
          surface: '#f5f0eb', text: '#3d2e20',
        },
        'brand-haus': {
          base: '#d4a853', light: '#f5e4b2', dark: '#1a1a22',
          surface: '#0e0e18', text: '#f5f0e8',
        },
        'brand-akro': {
          base: '#9c8060', light: '#c8b898', dark: '#2a2018',
          surface: '#f0ece4', text: '#3a2c1c',
        },
        'brand-oneclick': {
          base: '#4060c8', light: '#e0e8f8', dark: '#0a0f1e',
          surface: '#f8f9fc', text: '#1a2a60',
        },
        'brand-stark': {
          base: '#607890', light: '#b8ccd8', dark: '#101820',
          surface: '#f4f6f8', text: '#1c2a38',
        },
        'brand-formfina': {
          base: '#888078', light: '#c8c0b8', dark: '#1a1814',
          surface: '#f6f4f2', text: '#282420',
        },
        'brand-terrazo': {
          base: '#9a7a5a', light: '#c4a888', dark: '#1c1410',
          surface: '#f2ede8', text: '#2c1c0e',
        },
      },
      maxWidth: {
        'site': '1440px',
        'prose-xl': '760px',
        'prose-lg': '640px',
      },
      screens: {
        'xs': '390px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1920px',
      },
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1000': '1000ms',
      },
      transitionTimingFunction: {
        'luxury': 'cubic-bezier(0.25, 0.0, 0.0, 1.0)',
        'reveal': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'subtle': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        'slide-right': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fade-in 0.5s ease-out forwards',
        'scale-in': 'scale-in 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'slide-right': 'slide-right 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
      },
      aspectRatio: {
        'product': '4 / 5',
        'slab': '3 / 4',
        'hero': '16 / 9',
        'brand': '3 / 2',
      },
      backdropBlur: {
        'xs': '2px',
      },
      gridTemplateColumns: {
        'product-2': 'repeat(2, minmax(0, 1fr))',
        'product-3': 'repeat(3, minmax(0, 1fr))',
        'product-4': 'repeat(4, minmax(0, 1fr))',
        'pdp': '1fr 460px',
        'pdp-lg': '1fr 520px',
      },
    },
  },
  plugins: [],
}

export default config
