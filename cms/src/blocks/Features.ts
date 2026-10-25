import type { Block } from 'payload'

export const Features: Block = {
  slug: 'features',
  labels: {
    singular: 'Можливості',
    plural: 'Можливості',
  },
  fields: [
    {
      name: 'anchor',
      type: 'text',
      label: 'Якір секції',
      defaultValue: 'features',
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
      name: 'items',
      type: 'array',
      label: 'Картки можливостей',
      minRows: 1,
      maxRows: 3,
      fields: [
        {
          name: 'title',
          type: 'text',
          label: 'Назва',
          required: true,
        },
        {
          name: 'description',
          type: 'textarea',
          label: 'Опис',
          required: true,
        },
      ],
    },
  ],
}
