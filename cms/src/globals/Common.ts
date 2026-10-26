import type { GlobalConfig } from 'payload'

export const Common: GlobalConfig = {
  slug: 'common',
  label: 'Загальні налаштування',
  fields: [
    {
      name: 'siteName',
      type: 'text',
      label: 'Назва сайту',
      required: true,
      defaultValue: 'FishTrack',
    },
    {
      name: 'menu',
      type: 'array',
      label: 'Пункти меню',
      maxRows: 5,
      fields: [
        {
          name: 'label',
          type: 'text',
          label: 'Назва пункту',
          required: true,
        },
        {
          name: 'link',
          type: 'text',
          label: 'Посилання',
          required: true,
        },
      ],
    },
    {
      name: 'footerText',
      type: 'text',
      label: 'Текст футера',
    },
  ],
}
