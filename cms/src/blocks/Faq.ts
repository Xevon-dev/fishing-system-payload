import type { Block } from 'payload'

export const Faq: Block = {
  slug: 'faq',
  labels: {
    singular: 'Питання та відповіді',
    plural: 'Питання та відповіді',
  },
  fields: [
    {
      name: 'anchor',
      type: 'text',
      label: 'Якір секції',
      defaultValue: 'faq',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок секції',
      required: true,
    },
    {
      name: 'items',
      type: 'array',
      label: 'Запитання та відповіді',
      minRows: 1,
      maxRows: 6,
      fields: [
        {
          name: 'question',
          type: 'text',
          label: 'Запитання',
          required: true,
        },
        {
          name: 'answer',
          type: 'textarea',
          label: 'Відповідь',
          required: true,
        },
      ],
    },
  ],
}
