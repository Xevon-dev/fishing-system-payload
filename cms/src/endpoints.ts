import type { Endpoint, PayloadRequest } from 'payload'

function cleanBlock(block: Record<string, unknown>) {
  const { id, blockName, blockType, image, ...fields } = block
  const clean: Record<string, unknown> = { type: blockType, ...fields }

  if (image && typeof image === 'object' && 'url' in image) {
    const media = image as { url?: string; alt?: string }
    clean.image = { src: media.url, alt: media.alt ?? '' }
  }

  return clean
}

export const pageEndpoint: Endpoint = {
  path: '/page',
  method: 'get',
  handler: async (req: PayloadRequest) => {
    const pagePath = typeof req.query.path === 'string' ? req.query.path : '/'

    const result = await req.payload.find({
      collection: 'pages',
      where: { path: { equals: pagePath } },
      depth: 2,
      limit: 1,
    })

    const page = result.docs[0]

    if (!page) {
      return Response.json({ error: 'Сторінку не знайдено' }, { status: 404 })
    }

    return Response.json({
      path: page.path,
      title: page.title,
      blocks: (page.blocks ?? []).map((block) =>
        cleanBlock(block as unknown as Record<string, unknown>),
      ),
    })
  },
}
