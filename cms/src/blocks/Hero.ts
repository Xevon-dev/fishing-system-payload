import type { Block } from 'payload'

export const Hero: Block = {
  slug: 'hero',
  labels: {
    singular: 'Головний екран',
    plural: 'Головні екрани',
  },
  fields: [
    {
      name: 'anchor',
      type: 'text',
      label: 'Якір секції',
      defaultValue: 'top',
    },
    {
      name: 'badge',
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
      name: 'subtitle',
      type: 'textarea',
      label: 'Опис',
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      label: 'Фото для головного екрана',
    },
    {
      name: 'buttons',
      type: 'array',
      label: 'Кнопки',
      maxRows: 2,
      fields: [
        {
          name: 'text',
          type: 'text',
          label: 'Текст кнопки',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Посилання',
          required: true,
        },
        {
          name: 'variant',
          type: 'select',
          label: 'Стиль кнопки',
          defaultValue: 'primary',
          options: [
            { label: 'Основна', value: 'primary' },
            { label: 'Додаткова', value: 'secondary' },
          ],
        },
      ],
    },
  ],
}