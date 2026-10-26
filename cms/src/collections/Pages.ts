import type { CollectionConfig } from 'payload'
import { Hero } from '../blocks/Hero'
import { Features } from '../blocks/Features'
import { HowItWorks } from '../blocks/HowItWorks'
import { CTA } from '../blocks/CTA'
import { Faq } from '../blocks/Faq'
import { Spotlight } from '../blocks/Spotlight'

export const Pages: CollectionConfig = {
  slug: 'pages',
  admin: {
    useAsTitle: 'title',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      label: 'Назва сторінки',
      required: true,
    },
    {
      name: 'path',
      type: 'text',
      label: 'Шлях сторінки',
      required: true,
      unique: true,
      defaultValue: '/',
    },
    {
      name: 'blocks',
      type: 'blocks',
      label: 'Блоки сторінки',
      blocks: [Hero, Features, HowItWorks, Spotlight, Faq, CTA],
      required: true,
    },
  ],
}
