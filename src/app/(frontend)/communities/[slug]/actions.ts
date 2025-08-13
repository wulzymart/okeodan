'use server'
import config from '@payload-config'
import { getPayload } from 'payload'
export type GalleryType = 'place' | 'event' | 'festival' | 'development'
export async function getCommunityNews(slug: string, page: number = 1) {
  const payload = await getPayload({ config })
  const { hasNextPage, docs, hasPrevPage } = await payload.find({
    collection: 'news',
    limit: 4,
    page,
    where: {
      'communities.slug': {
        equals: slug,
      },
    },
  })

  return { hasNextPage, docs, hasPrevPage }
}

export async function getCommunityPrides(slug: string, page: number = 1) {
  const payload = await getPayload({ config })
  const { hasNextPage, docs, hasPrevPage } = await payload.find({
    collection: 'prides',
    limit: 4,
    page,
    where: {
      'communities.slug': {
        equals: slug,
      },
    },
  })

  return { hasNextPage, docs, hasPrevPage }
}

export async function getCommunityGalleries(slug: string, type: GalleryType, page: number = 1) {
  const payload = await getPayload({ config })
  const { hasNextPage, docs, hasPrevPage } = await payload.find({
    collection: 'galleries',
    limit: 4,
    page,
    where: {
      'community.slug': {
        equals: slug,
      },
      type: {
        equals: type,
      },
    },
  })

  return { hasNextPage, docs, hasPrevPage }
}
