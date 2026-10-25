import './hero.css'

export function hero({ anchor = 'top', badge, title, subtitle, image, buttons = [] }) {
  const apiUrl = (import.meta.env.VITE_API_URL || 'http://localhost:3000').replace(/\/$/, '')
  const buttonMarkup = buttons
    .map(
      ({ text, link, variant = 'primary' }) =>
        `<a class="btn btn--${variant}" href="${link}">${text}</a>`,
    )
    .join('')

  const imageUrl = image?.src ? new URL(image.src, `${apiUrl}/`).href : ''
  const imageMarkup = imageUrl
    ? `<img class="hero__image" src="${imageUrl}" alt="${image.alt || ''}">`
    : ''

  return `
    <section class="hero" id="${anchor}">
      <div class="hero__content">
        ${badge ? `<span class="hero__badge">${badge}</span>` : ''}
        <h1 class="hero__title">${title}</h1>
        ${subtitle ? `<p class="hero__subtitle">${subtitle}</p>` : ''}
        <div class="hero__actions">${buttonMarkup}</div>
      </div>
      ${imageMarkup}
    </section>
  `
}
