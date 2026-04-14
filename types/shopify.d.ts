// types/shopify.d.ts

export interface ShopifyImage {
  url: string
  altText: string | null
  width: number
  height: number
}

export interface ShopifyMoney {
  amount: string
  currencyCode: string
}

export interface ShopifyProduct {
  id: string
  handle: string
  title: string
  description: string
  vendor: string
  productType: string
  tags: string[]
  availableForSale: boolean
  priceRange: {
    minVariantPrice: ShopifyMoney
    maxVariantPrice: ShopifyMoney
  }
  featuredImage: ShopifyImage | null
  images: { nodes: ShopifyImage[] }
  variants: {
    nodes: {
      id: string
      title: string
      availableForSale: boolean
      quantityAvailable: number
      price: ShopifyMoney
      compareAtPrice: ShopifyMoney | null
      selectedOptions: { name: string; value: string }[]
      image: ShopifyImage | null
    }[]
  }
  options: { name: string; values: string[] }[]
  seo: { title: string | null; description: string | null }
  brand?: { value: string; type: string } | null
  material?: { value: string; type: string } | null
  finish?: { value: string; type: string } | null
  inquiryOnly?: { value: string; type: string } | null
  sampleAvailable?: { value: string; type: string } | null
  specSheetUrl?: { value: string; type: string } | null
  installGuideUrl?: { value: string; type: string } | null
  warranty?: { value: string; type: string } | null
  roomUsage?: { value: string; type: string } | null
  leadTime?: { value: string; type: string } | null
  dimensions?: { value: string; type: string } | null
  thicknessMm?: { value: string; type: string } | null
  slabSize?: { value: string; type: string } | null
  translucency?: { value: string; type: string } | null
  impactRating?: { value: string; type: string } | null
  miamiDadeApproved?: { value: string; type: string } | null
  uValue?: { value: string; type: string } | null
  shgc?: { value: string; type: string } | null
  opacityRange?: { value: string; type: string } | null
  switchingSpeed?: { value: string; type: string } | null
  technicalSpecs?: { value: string; type: string } | null
}

export interface NormalizedProduct {
  id: string
  handle: string
  title: string
  description: string
  vendor: string
  productType: string
  tags: string[]
  availableForSale: boolean
  priceRange: {
    minVariantPrice: ShopifyMoney
    maxVariantPrice: ShopifyMoney
  }
  featuredImage: ShopifyImage | null
  images: ShopifyImage[]
  variants: {
    id: string
    title: string
    availableForSale: boolean
    quantityAvailable: number
    price: ShopifyMoney
    compareAtPrice: ShopifyMoney | null
    selectedOptions: { name: string; value: string }[]
    image: ShopifyImage | null
  }[]
  options: { name: string; values: string[] }[]
  brandId: string | null
  material: string | null
  finish: string[] | null
  inquiryOnly: boolean
  sampleAvailable: boolean
  specSheetUrl: string | null
  installGuideUrl: string | null
  warranty: string | null
  roomUsage: string[] | null
  leadTime: string | null
  dimensions: Record<string, string> | null
  thicknessMm: string | null
  slabSize: string | null
  translucency: boolean
  impactRating: string | null
  miamiDadeApproved: boolean
  uValue: string | null
  shgc: string | null
  opacityRange: string | null
  switchingSpeed: string | null
  technicalSpecs: Record<string, string> | null
}

export interface ShopifyCollection {
  id: string
  handle: string
  title: string
  description: string
  descriptionHtml: string
  image: ShopifyImage | null
  seo: { title: string | null; description: string | null }
  products?: {
    nodes: ShopifyProduct[]
    pageInfo: {
      hasNextPage: boolean
      hasPreviousPage: boolean
      startCursor: string
      endCursor: string
    }
    filters: ShopifyFilter[]
  }
}

export interface ShopifyFilter {
  id: string
  label: string
  type: string
  values: {
    id: string
    label: string
    count: number
    input: string
  }[]
}

export interface ShopifyCart {
  id: string
  checkoutUrl: string
  totalQuantity: number
  cost: {
    subtotalAmount: ShopifyMoney
    totalAmount: ShopifyMoney
    totalTaxAmount: ShopifyMoney | null
  }
  lines: {
    nodes: {
      id: string
      quantity: number
      cost: { totalAmount: ShopifyMoney }
      merchandise: {
        id: string
        title: string
        selectedOptions: { name: string; value: string }[]
        product: {
          id: string
          handle: string
          title: string
          vendor: string
          featuredImage: ShopifyImage | null
        }
      }
    }[]
  }
}

export interface NormalizedCartLine {
  id: string
  quantity: number
  total: ShopifyMoney
  variantId: string
  variantTitle: string
  selectedOptions: { name: string; value: string }[]
  productHandle: string
  productTitle: string
  productVendor: string
  image: ShopifyImage | null
}

export interface NormalizedCart {
  id: string
  checkoutUrl: string
  totalQuantity: number
  subtotal: ShopifyMoney
  total: ShopifyMoney
  tax: ShopifyMoney | null
  lines: NormalizedCartLine[]
}

export interface ShopifySearchResult {
  products: ShopifyProduct[]
}
