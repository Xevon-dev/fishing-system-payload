import { hero } from './blocks/hero/hero'
import { features } from './blocks/features/features'
import { howItWorks } from './blocks/how-it-works/how-it-works'
import { cta } from './blocks/cta/cta'
import { faq } from './blocks/faq/faq'
import { spotlight } from './blocks/spotlight/spotlight'

const renderers = { hero, features, howItWorks, spotlight, faq, cta }

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
