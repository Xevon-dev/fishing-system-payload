import './features.css'

export function features({ anchor = 'features', title, subtitle, items = [] }) {
  const cards = items
    .map(
      ({ title: itemTitle, description }, index) => `
        <article class="feature-card">
          <span class="feature-card__number">0${index + 1}</span>
          <h3 class="feature-card__title">${itemTitle}</h3>
          <p class="feature-card__description">${description}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section class="features" id="${anchor}">
      <header class="features__header">
        <h2 class="features__title">${title}</h2>
        ${subtitle ? `<p class="features__subtitle">${subtitle}</p>` : ''}
      </header>
      <div class="features__grid">${cards}</div>
    </section>
  `
}
