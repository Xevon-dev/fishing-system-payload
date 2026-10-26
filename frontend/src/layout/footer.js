export function footer(settings, blocks = []) {
  const menuLinks = (settings.menu ?? [])
    .map(({ label, link }) => `<a class="site-footer__link" href="${link}">${label}</a>`)
    .join('')
  const contact = blocks.find((block) => block.type === 'cta')
  const year = new Date().getFullYear()

  return `
    <footer class="site-footer">
      <div class="site-footer__grid">
        <div class="site-footer__brand">
          <a class="site-footer__logo" href="/">${settings.siteName}</a>
          <p>${settings.footer?.text || ''}</p>
        </div>
        <div class="site-footer__column">
          <h2 class="site-footer__heading">Навігація</h2>
          <nav class="site-footer__links" aria-label="Навігація у футері">
            ${menuLinks}
          </nav>
        </div>
        <div class="site-footer__column">
          <h2 class="site-footer__heading">Контакт</h2>
          ${contact?.email ? `<a class="site-footer__link" href="mailto:${contact.email}">${contact.email}</a>` : ''}
        </div>
      </div>
      <div class="site-footer__bottom">© ${year} ${settings.siteName}</div>
    </footer>
  `
}
