export type ButtonVariant = 'primary' | 'secondary'

export type HeroButtonData = {
  text: string
  link: string
  variant?: ButtonVariant | null
}

export type MediaData = {
  src: string
  alt: string
}

export type HeroBlockData = {
  type: 'hero'
  anchor?: string | null
  badge?: string | null
  title: string
  subtitle?: string | null
  image?: MediaData | null
  buttons?: HeroButtonData[] | null
}

export type FeatureItemData = {
  title: string
  description: string
}

export type FeaturesBlockData = {
  type: 'features'
  anchor?: string | null
  title: string
  subtitle?: string | null
  items?: FeatureItemData[] | null
}

export type HowItWorksStepData = {
  title: string
  description: string
}

export type HowItWorksBlockData = {
  type: 'howItWorks'
  anchor?: string | null
  title: string
  subtitle?: string | null
  steps?: HowItWorksStepData[] | null
}

export type CTABlockData = {
  type: 'cta'
  anchor?: string | null
  title: string
  subtitle?: string | null
  buttonText: string
  email: string
}

export type PageBlockData =
  | HeroBlockData
  | FeaturesBlockData
  | HowItWorksBlockData
  | CTABlockData

export type PageResponse = {
  path: string
  title: string
  blocks: PageBlockData[]
}

export type MenuItemData = {
  label: string
  link: string
}

export type CommonResponse = {
  siteName: string
  menu: MenuItemData[]
  footer: { text: string }
}

export type PageWithCommon = PageResponse & { common: CommonResponse }
