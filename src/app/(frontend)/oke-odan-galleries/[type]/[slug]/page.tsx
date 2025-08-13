import React, { cache } from 'react'
import { ImageGallery } from './gallery'
// import stylesheet if you're not already using CSS @import
import 'react-image-gallery/styles/css/image-gallery.css'

import { getPayload } from 'payload'
import config from '@payload-config'
import { notFound } from 'next/navigation'
import ReactPlayer from '@/components/react-player/react-player'
import { draftMode } from 'next/headers'
import { Metadata } from 'next'
import { generateMeta } from '@/utilities/generateMeta'
import { validateGalleryType } from '@/lib/gallery-utils'
import { Media } from '@/payload-types'
import { ReactImageGalleryItem } from 'react-image-gallery'

type Args = {
  params: Promise<{
    slug: string
    type: string
  }>
}
const queryPostBySlug = cache(async ({ slug, type }: { slug: string; type: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config })

  const { docs } = await payload.find({
    collection: 'galleries',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
      type: { equals: validateGalleryType(type) },
    },
  })
  if (!docs || docs.length === 0) throw notFound()
  return docs[0]
})
export async function generateStaticParams() {
  const payload = await getPayload({ config })
  const posts = await payload.find({
    collection: 'galleries',
    draft: false,
    limit: 1000,
    overrideAccess: false,
    pagination: false,
    select: {
      slug: true,
    },
  })

  return posts.docs.map(({ slug }) => {
    return { slug }
  })
}
export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '', type } = await paramsPromise
  const post = await queryPostBySlug({ slug, type })

  return generateMeta({ doc: post, url: '/galleries/' + slug })
}
const GalleryPage = async ({ params }: Args) => {
  const { slug, type } = await params
  const item = await queryPostBySlug({ slug, type })
  if (!item) throw notFound()
  const vids = item.videos
  const imgs = item.images
  const images = imgs.map((img) => {
    const i = img.image
    if (typeof i === 'number') return
    const { url, height, width, thumbnailURL } = i as Media
    return { original: url, src: url, thumbnail: thumbnailURL || url, height, width }
  })

  const videos = vids?.map((v) => v) || []
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{item.title}</h1>
      <div className="mb-4">
        <p className="text-lg">{item.description}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
        <ImageGallery
          items={images as unknown as ReactImageGalleryItem[]}
          showThumbnails
          showNav
          showPlayButton={false}
          thumbnailPosition="left"
        />
        {videos.length ? (
          <div className="flex flex-wrap gap-4">
            {videos.map((video, index) => (
              <div
                key={index}
                className={`mb-4 w-full ${videos.length > 1 && 'md:w-1/2'} h-[400px]`}
              >
                <ReactPlayer src={video.url} width="100%" height="100%" title={video.title} />
              </div>
            ))}
          </div>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default GalleryPage
