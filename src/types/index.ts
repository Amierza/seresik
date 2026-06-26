export interface Service {
  id: string
  icon: string
  title: string
  description: string
  startingPrice: number
}

export interface Feature {
  id: string
  icon: string
  title: string
  description: string
}

export interface PricingPlan {
  id: string
  name: string
  price: number
  unit: string
  features: string[]
  isPopular?: boolean
  badge?: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  rating: number
  text: string
  avatar?: string
}

export interface GalleryImage {
  id: string
  src: string
  alt: string
  title?: string
  description?: string
  isLarge?: boolean
}

export interface BusinessInfo {
  name: string
  logo: string
  address: string
  whatsapp: string
  mapsLink: string
  email: string
  hours: {
    [key: string]: string
  }
}
