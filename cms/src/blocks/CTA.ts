import type { Block } from 'payload'

export const CTA: Block = {
  slug: 'cta',
  labels: {
    singular: 'Заклик до дії',
    plural: 'Заклик до дії',
  },
  fields: [
    {
      name: 'anchor',
      type: 'text',
      label: 'Якір секції',
      defaultValue: 'contact',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок',
      required: true,
    },
    {
      name: 'subtitle',
      type: 'textarea',
      label: 'Опис',
    },
    {
      name: 'buttonText',
      type: 'text',
      label: 'Текст кнопки',
      required: true,
    },
    {
      name: 'email',
      type: 'email',
      label: 'Email для зв’язку',
      required: true,
    },
  ],
}
