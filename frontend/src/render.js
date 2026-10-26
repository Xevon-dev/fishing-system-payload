import { hero } from './blocks/hero/hero'
import { features } from './blocks/features/features'
import { howItWorks } from './blocks/how-it-works/how-it-works'
import { cta } from './blocks/cta/cta'

const renderers = { hero, features, howItWorks, cta }

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
