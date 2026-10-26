import type { Block } from 'payload'

export const Spotlight: Block = {
  slug: 'spotlight',
  labels: {
    singular: 'Фотоісторія',
    plural: 'Фотоісторії',
  },
  fields: [
    {
      name: 'anchor',
      type: 'text',
      label: 'Якір секції',
      defaultValue: 'spotlight',
    },
    {
      name: 'tag',
      type: 'text',
      label: 'Короткий напис над заголовком',
    },
    {
      name: 'title',
      type: 'text',
      label: 'Заголовок',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      label: 'Опис',
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Фото',
      required: true,
    },
    {
      name: 'imageSide',
      type: 'select',
      label: 'Розташування фото',
      defaultValue: 'right',
      options: [
        { label: 'Праворуч', value: 'right' },
        { label: 'Ліворуч', value: 'left' },
      ],
    },
  ],
}
