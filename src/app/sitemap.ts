import { MetadataRoute } from 'next'
import { getPayload } from 'payload'
import config from '@payload-config'

export const revalidate = 86400

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const payload = await getPayload({ config })
  const SITE_URL =
    process.env.NEXT_PUBLIC_SERVER_URL ||
    process.env.VERCEL_PROJECT_PRODUCTION_URL ||
    'https://okeodan.org'

  const dateFallback = new Date().toISOString()

  const sitemap: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/oke-odan-news`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/prides-of-oke-odan`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/oke-odan-galleries`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/oke-odan-galleries/places`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/oke-odan-galleries/events`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/oke-odan-galleries/developments`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/oke-odan-galleries/festivals`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/communities/ago-ilaro`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/communities/ago-ilobi`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/communities/ago-irinja`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/communities/ago-eyo`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/history-of-oke-odan`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/about-oke-odan`,
      lastModified: dateFallback,
    },
    {
      url: `${SITE_URL}/oke-odan-g30`,
      lastModified: dateFallback,
    },
  ]
  const { docs: news } = await payload.find({
    collection: 'news',
    overrideAccess: false,
    draft: false,
    depth: 0,
    limit: 1000,
    pagination: false,
    where: {
      _status: {
        equals: 'published',
      },
    },
    select: {
      slug: true,
      updatedAt: true,
    },
  })

  news.forEach(({ slug, updatedAt }) => {
    sitemap.push({
      url: `${SITE_URL}/oke-odan-news/${slug}`,
      lastModified: updatedAt || dateFallback,
    })
  })

  const { docs: prides } = await payload.find({
    collection: 'prides',
    overrideAccess: false,
    draft: false,
    depth: 0,
    limit: 1000,
    pagination: false,
    where: {
      _status: {
        equals: 'published',
      },
    },
    select: {
      slug: true,
      updatedAt: true,
    },
  })

  prides.forEach(({ slug, updatedAt }) => {
    sitemap.push({
      url: `${SITE_URL}/prides-of-oke-odan/${slug}`,
      lastModified: updatedAt || dateFallback,
    })
  })

  const { docs: galleries } = await payload.find({
    collection: 'galleries',
    overrideAccess: false,
    draft: false,
    depth: 0,
    limit: 1000,
    pagination: false,
    where: {
      _status: {
        equals: 'published',
      },
    },
    select: {
      slug: true,
      type: true,
      updatedAt: true,
    },
  })

  galleries.forEach(({ type, slug, updatedAt }) => {
    sitemap.push({
      url: `${SITE_URL}/oke-odan-galleries/${type}/${slug}`,
      lastModified: updatedAt || dateFallback,
    })
  })

  return sitemap
}
