import type { Block } from 'payload'

export const HowItWorks: Block = {
  slug: 'howItWorks',
  labels: {
    singular: 'Як це працює',
    plural: 'Як це працює',
  },
  fields: [
    {
      name: 'anchor',
      type: 'text',
      label: 'Якір секції',
      defaultValue: 'how-it-works',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок секції',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Опис секції',
    },
    {
      name: 'steps',
      type: 'array',
      label: 'Кроки',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Назва кроку',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Опис кроку',
          required: true,
        },
      ],
    },
  ],
}
