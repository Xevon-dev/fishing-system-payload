import './faq.css'

export function faq({ anchor = 'faq', title, items = [] }) {
  const questions = items
    .map(
      ({ question, answer }) => `
        <details class="faq__item">
          <summary class="faq__question">${question}</summary>
          <p class="faq__answer">${answer}</p>
        </details>
      `,
    )
    .join('')

  return `
    <section class="faq" id="${anchor}">
      <header class="faq__header">
        <h2 class="faq__title">${title}</h2>
      </header>
      <div class="faq__list">${questions}</div>
    </section>
  `
}
