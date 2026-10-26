import './styles/base.css'
import { getCommon, getPage } from './api.js'
import { renderBlocks } from './render.js'
import { header } from './layout/header.js'
import { footer } from './layout/footer.js'

const app = document.querySelector('#app')

async function start() {
  app.textContent = 'Завантаження сторінки…'

  try {
    const [settings, page] = await Promise.all([
      getCommon(),
      getPage(window.location.pathname),
    ])

    document.title =
      page.title && page.title !== settings.siteName
        ? `${page.title} — ${settings.siteName}`
        : settings.siteName
    app.innerHTML = `
      ${header(settings)}
      <main>${renderBlocks(page.blocks)}</main>
      ${footer(settings.footer)}
    `
  } catch (error) {
    app.textContent = `Не вдалося завантажити сторінку: ${error.message}`
  }
}

start()
