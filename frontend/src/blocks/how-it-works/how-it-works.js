import './how-it-works.css'

export function howItWorks({ anchor = 'how-it-works', title, subtitle, steps = [] }) {
  const stepCards = steps
    .map(
      ({ title: stepTitle, description }, index) => `
        <article class="how-step">
          <span class="how-step__number">0${index + 1}</span>
          <h3 class="how-step__title">${stepTitle}</h3>
          <p class="how-step__description">${description}</p>
        </article>
      `,
    )
    .join('')

  return `
    <section class="how-it-works" id="${anchor}">
      <header class="how-it-works__header">
        <h2 class="how-it-works__title">${title}</h2>
        ${subtitle ? `<p class="how-it-works__subtitle">${subtitle}</p>` : ''}
      </header>
      <div class="how-it-works__steps">${stepCards}</div>
    </section>
  `
}
