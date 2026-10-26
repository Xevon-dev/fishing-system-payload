import './spotlight.css'

export function spotlight({ anchor = 'spotlight', tag, title, description, image, imageSide = 'right' }) {
  const apiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '')
  const imageUrl = image?.src ? new URL(image.src, `${apiUrl}/`).href : ''

  return `
    <section class="spotlight spotlight--${imageSide}" id="${anchor}">
      <div class="spotlight__visual">
        <img class="spotlight__image" src="${imageUrl}" alt="${image?.alt || ''}">
      </div>
      <div class="spotlight__content">
        ${tag ? `<p class="spotlight__tag">${tag}</p>` : ''}
        <h2 class="spotlight__title">${title}</h2>
        <p class="spotlight__description">${description}</p>
      </div>
    </section>
  `
}
