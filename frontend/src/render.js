import { hero } from './blocks/hero/hero'

const renderers = { hero }

export function renderBlocks(blocks = []) {
  return blocks
    .map((block) => {
      const render = renderers[block.type]

      if (!render) {
        console.warn(`Невідомий тип блока: ${block.type}`)
        return ''
      }

      return render(block)
    })
    .join('')
}