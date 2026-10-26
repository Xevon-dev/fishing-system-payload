export function header({ siteName, menu = [] }) {
  const menuLinks = menu
    .map(({ label, link }) => `<a class="site-header__link" href="${link}">${label}</a>`)
    .join('')

  return `
    <header class="site-header">
      <a class="site-header__brand" href="/">${siteName}</a>
      <nav class="site-header__nav" aria-label="Головна навігація">
        ${menuLinks}
      </nav>
    </header>
  `
}
