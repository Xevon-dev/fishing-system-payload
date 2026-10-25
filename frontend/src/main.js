import './style.css'
import { getPage } from './api.js'
import { renderBlocks } from './render.js'

const app = document.querySelector('#app')

async function start() {
  app.textContent = 'Завантаження сторінки…'

  try {
    const page = await getPage(window.location.pathname)
    document.title = page.title || 'FishTrack'
    app.innerHTML = `<main>${renderBlocks(page.blocks)}</main>`
  } catch (error) {
    app.textContent = `Не вдалося завантажити сторінку: ${error.message}`
  }
}

start()
