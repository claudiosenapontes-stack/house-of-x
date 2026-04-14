// lib/brands/config.ts

export type BrandId =
  | 'casa-mia'
  | 'haus-of-light'
  | 'akropolli'
  | 'one-click'
  | 'stark-windows'
  | 'formafina'
  | 'terrazo'

export interface BrandTheme {
  primary: string
  secondary: string
  surface: string
  surfaceDark: string
  onSurface: string
  onSurfaceMuted: string
  cta: string
  onCta: string
  isDarkBrand: boolean
  heroBg?: string
  heroText?: string
}

export interface BrandFonts {
  officialFont: string
  headingFont: string
  headingFontImport: string
  bodyFont: string
  bodyFontImport: string
  headingStyle: string
}

export interface BrandConfig {
  id: BrandId
  name: string
  displayName: string
  slug: string
  tagline: string
  subheading: string
  headline: string
  description: string
  theme: BrandTheme
  fonts: BrandFonts
  motionStyle: 'weighted' | 'atmospheric' | 'structural' | 'snappy' | 'precise' | 'restrained' | 'calm'
  purchaseModes: ('buy' | 'inquiry' | 'sample' | 'quote')[]
  categories: string[]
  metafieldNamespace: string
  shopifyVendor: string
  shopifyCollectionHandle: string
  seoTitle: string
  seoDescription: string
  featuredCollections: string[]
  comparableProducts: boolean
}

export const BRANDS: Record<BrandId, BrandConfig> = {
  'casa-mia': {
    id: 'casa-mia',
    name: 'Casa Mia',
    displayName: 'CASAMIA',
    slug: 'casa-mia',
    tagline: 'Luxury Stones & Design',
    subheading: 'Stone · Porcelain · Translucent',
    headline: 'Material architecture begins here.',
    description: 'Casa Mia une o luxo atemporal do design italiano à elegância contemporânea.',
    theme: {
      primary: '#BFA9A1',
      secondary: '#D4C5BC',
      surface: '#F5F0EB',
      surfaceDark: '#1A1410',
      onSurface: '#3D2A24',
      onSurfaceMuted: '#7A6258',
      cta: '#BFA9A1',
      onCta: '#FFFFFF',
      isDarkBrand: false,
      heroBg: '#1A1410',
      heroText: '#FFFFFF',
    },
    fonts: {
      officialFont: 'Gotham Light',
      headingFont: 'Cormorant Garamond',
      headingFontImport: 'Cormorant_Garamond',
      bodyFont: 'Jost',
      bodyFontImport: 'Jost',
      headingStyle: 'Light weight serif',
    },
    motionStyle: 'weighted',
    purchaseModes: ['inquiry', 'sample', 'quote'],
    categories: ['stone-slabs', 'porcelain', 'synthetic-stone', 'natural-stone', 'translucent-stone'],
    metafieldNamespace: 'casamia',
    shopifyVendor: 'Casa Mia',
    shopifyCollectionHandle: 'casa-mia',
    seoTitle: 'Casa Mia — Luxury Stones & Design',
    seoDescription: 'Discover architectural stone slabs and porcelain.',
    featuredCollections: ['casa-mia-stone-slabs', 'casa-mia-translucent'],
    comparableProducts: true,
  },
  'haus-of-light': {
    id: 'haus-of-light',
    name: 'Haus of Light',
    displayName: 'HausLight',
    slug: 'haus-of-light',
    tagline: 'Haus of Light',
    subheading: 'Lighting & Ambiance',
    headline: 'Light that reshapes a room.',
    description: 'Cinematic lighting systems and architectural luminaires.',
    theme: {
      primary: '#0D2535',
      secondary: '#9F9180',
      surface: '#0D2535',
      surfaceDark: '#071520',
      onSurface: '#FFFFFF',
      onSurfaceMuted: '#9F9180',
      cta: '#9F9180',
      onCta: '#FFFFFF',
      isDarkBrand: true,
      heroBg: '#080810',
      heroText: '#FFFFFF',
    },
    fonts: {
      officialFont: 'Clio Regular',
      headingFont: 'Barlow',
      headingFontImport: 'Barlow',
      bodyFont: 'Nunito Sans',
      bodyFontImport: 'Nunito_Sans',
      headingStyle: 'Semi-condensed',
    },
    motionStyle: 'atmospheric',
    purchaseModes: ['buy', 'inquiry', 'quote'],
    categories: ['pendant-lights', 'wall-lights', 'floor-lights'],
    metafieldNamespace: 'hausoflight',
    shopifyVendor: 'Haus of Light',
    shopifyCollectionHandle: 'haus-of-light',
    seoTitle: 'Haus of Light — Luxury Lighting',
    seoDescription: 'Architectural lighting systems.',
    featuredCollections: ['haus-pendant', 'haus-wall'],
    comparableProducts: false,
  },
  'akropolli': {
    id: 'akropolli',
    name: 'Akropolli',
    displayName: 'AKROPOLLI',
    slug: 'akropolli',
    tagline: 'Wall Finishes. Redefined.',
    subheading: 'Clay · Plaster · Fluted Panels',
    headline: 'Wall finishes, redefined.',
    description: 'Architectural wall finishes in clay and mineral plaster.',
    theme: {
      primary: '#63342A',
      secondary: '#7D4035',
      surface: '#F4EDEA',
      surfaceDark: '#1A0E0A',
      onSurface: '#2A1510',
      onSurfaceMuted: '#6B4035',
      cta: '#63342A',
      onCta: '#FFFFFF',
      isDarkBrand: false,
      heroBg: '#1A0E0A',
      heroText: '#FFFFFF',
    },
    fonts: {
      officialFont: 'Geometric Sans Caps',
      headingFont: 'Oswald',
      headingFontImport: 'Oswald',
      bodyFont: 'DM Sans',
      bodyFontImport: 'DM_Sans',
      headingStyle: 'All-caps wide tracking',
    },
    motionStyle: 'structural',
    purchaseModes: ['inquiry', 'sample', 'quote'],
    categories: ['clay-finishes', 'mineral-plaster', 'fluted-panels'],
    metafieldNamespace: 'akropolli',
    shopifyVendor: 'Akropolli',
    shopifyCollectionHandle: 'akropolli',
    seoTitle: 'Akropolli — Wall Finishes',
    seoDescription: 'Premium clay finishes and fluted panels.',
    featuredCollections: ['akropolli-clay', 'akropolli-fluted'],
    comparableProducts: true,
  },
  'one-click': {
    id: 'one-click',
    name: 'One Click',
    displayName: 'OneClick',
    slug: 'one-click',
    tagline: 'Intelligent solutions in one click.',
    subheading: 'Smart Film · Automation · Glass',
    headline: 'Transparency on command.',
    description: 'Switchable smart film and automated privacy glass.',
    theme: {
      primary: '#00A0D7',
      secondary: '#0088B8',
      surface: '#F8FAFB',
      surfaceDark: '#050F18',
      onSurface: '#000000',
      onSurfaceMuted: '#4A5568',
      cta: '#00A0D7',
      onCta: '#FFFFFF',
      isDarkBrand: false,
      heroBg: '#050F18',
      heroText: '#FFFFFF',
    },
    fonts: {
      officialFont: 'Montserrat',
      headingFont: 'Montserrat',
      headingFontImport: 'Montserrat',
      bodyFont: 'Montserrat',
      bodyFontImport: 'Montserrat',
      headingStyle: 'Montserrat all weights',
    },
    motionStyle: 'snappy',
    purchaseModes: ['buy', 'inquiry', 'quote'],
    categories: ['smart-film', 'pdlc-glass', 'automation-systems'],
    metafieldNamespace: 'oneclick',
    shopifyVendor: 'One Click',
    shopifyCollectionHandle: 'one-click',
    seoTitle: 'One Click — Smart Film',
    seoDescription: 'Switchable smart film and automation.',
    featuredCollections: ['oneclick-smart-film'],
    comparableProducts: true,
  },
  'stark-windows': {
    id: 'stark-windows',
    name: 'Stark Windows',
    displayName: 'Stark Windows',
    slug: 'stark-windows',
    tagline: 'Triple-pane precision. Hurricane engineered.',
    subheading: 'Impact Windows · Miami-Dade Approved',
    headline: 'Performance glass. Zero compromise.',
    description: 'High-performance triple-pane windows.',
    theme: {
      primary: '#1C3040',
      secondary: '#3D7EB0',
      surface: '#F2F5F8',
      surfaceDark: '#080F18',
      onSurface: '#1C2A38',
      onSurfaceMuted: '#607080',
      cta: '#3D7EB0',
      onCta: '#FFFFFF',
      isDarkBrand: false,
      heroBg: '#080F18',
      heroText: '#FFFFFF',
    },
    fonts: {
      officialFont: 'IBM Plex Sans',
      headingFont: 'IBM Plex Sans',
      headingFontImport: 'IBM_Plex_Sans',
      bodyFont: 'IBM Plex Sans',
      bodyFontImport: 'IBM_Plex_Sans',
      headingStyle: 'Technical clarity',
    },
    motionStyle: 'precise',
    purchaseModes: ['inquiry', 'quote'],
    categories: ['triple-pane-windows', 'impact-windows'],
    metafieldNamespace: 'stark',
    shopifyVendor: 'Stark Windows',
    shopifyCollectionHandle: 'stark-windows',
    seoTitle: 'Stark Windows — Hurricane-Resistant',
    seoDescription: 'High-performance impact windows.',
    featuredCollections: ['stark-impact'],
    comparableProducts: true,
  },
  'formafina': {
    id: 'formafina',
    name: 'FormaFina',
    displayName: 'FORMAFINA',
    slug: 'formafina',
    tagline: 'Flush Systems',
    subheading: 'Baseboards · Switches · HVAC Finishes',
    headline: 'The invisible finish.',
    description: 'Precision-engineered flush baseboards and switch plates.',
    theme: {
      primary: '#C6C6C5',
      secondary: '#000000',
      surface: '#FFFFFF',
      surfaceDark: '#101010',
      onSurface: '#000000',
      onSurfaceMuted: '#888888',
      cta: '#000000',
      onCta: '#FFFFFF',
      isDarkBrand: false,
      heroBg: '#101010',
      heroText: '#FFFFFF',
    },
    fonts: {
      officialFont: "Engraver's Gothic",
      headingFont: 'Josefin Sans',
      headingFontImport: 'Josefin_Sans',
      bodyFont: 'Lato',
      bodyFontImport: 'Lato',
      headingStyle: 'Ultra-thin caps',
    },
    motionStyle: 'restrained',
    purchaseModes: ['buy', 'inquiry', 'quote'],
    categories: ['baseboards', 'recessed-switches', 'hvac-grilles'],
    metafieldNamespace: 'formafina',
    shopifyVendor: 'FormaFina',
    shopifyCollectionHandle: 'formafina',
    seoTitle: 'FormaFina — Flush Systems',
    seoDescription: 'Precision flush baseboards.',
    featuredCollections: ['formafina-baseboard'],
    comparableProducts: false,
  },
  'terrazo': {
    id: 'terrazo',
    name: 'Terrazo',
    displayName: 'TERRAZO',
    slug: 'terrazo',
    tagline: 'Luxury in Every Detail',
    subheading: 'Complete Bathroom Solutions',
    headline: 'Luxury in every detail.',
    description: 'Complete luxury bathroom solutions.',
    theme: {
      primary: '#9F9180',
      secondary: '#7A6E62',
      surface: '#DBCDBB',
      surfaceDark: '#1A1714',
      onSurface: '#2A2420',
      onSurfaceMuted: '#7A6E62',
      cta: '#9F9180',
      onCta: '#FFFFFF',
      isDarkBrand: false,
      heroBg: '#1A1714',
      heroText: '#FFFFFF',
    },
    fonts: {
      officialFont: 'Engravers Gothic BT',
      headingFont: 'Josefin Sans',
      headingFontImport: 'Josefin_Sans',
      bodyFont: 'Lato',
      bodyFontImport: 'Lato',
      headingStyle: 'All-caps geometric',
    },
    motionStyle: 'calm',
    purchaseModes: ['inquiry', 'sample', 'quote'],
    categories: ['vanities', 'bathtubs', 'sinks', 'faucets'],
    metafieldNamespace: 'terrazo',
    shopifyVendor: 'Terrazo',
    shopifyCollectionHandle: 'terrazo',
    seoTitle: 'Terrazo — Luxury Bathrooms',
    seoDescription: 'Complete luxury bathroom solutions.',
    featuredCollections: ['terrazo-vanities'],
    comparableProducts: false,
  },
}

export const BRAND_LIST = Object.values(BRANDS)

export const getBrand = (id: BrandId): BrandConfig => BRANDS[id]

export const getBrandBySlug = (slug: string): BrandConfig | undefined =>
  BRAND_LIST.find((b) => b.slug === slug)

export const getBrandCSSVars = (brand: BrandConfig): Record<string, string> => ({
  '--brand-primary': brand.theme.primary,
  '--brand-secondary': brand.theme.secondary,
  '--brand-surface': brand.theme.surface,
  '--brand-surface-dark': brand.theme.surfaceDark,
  '--brand-on-surface': brand.theme.onSurface,
  '--brand-on-surface-muted': brand.theme.onSurfaceMuted,
  '--brand-cta': brand.theme.cta,
  '--brand-on-cta': brand.theme.onCta,
})

export const BRAND_COLORS: Record<BrandId, string> = {
  'casa-mia': '#BFA9A1',
  'haus-of-light': '#0D2535',
  'akropolli': '#63342A',
  'one-click': '#00A0D7',
  'stark-windows': '#1C3040',
  'formafina': '#C6C6C5',
  'terrazo': '#9F9180',
}
