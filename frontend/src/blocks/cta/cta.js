import './cta.css'

export function cta({ anchor = 'contact', title, subtitle, buttonText, email }) {
  return `
    <section class="cta" id="${anchor}">
      <h2 class="cta__title">${title}</h2>
      ${subtitle ? `<p class="cta__subtitle">${subtitle}</p>` : ''}
      <a class="cta__button" href="mailto:${email}">${buttonText}</a>
    </section>
  `
}
