import React, { cache } from 'react'
import config from '@payload-config'
import { getPayload } from 'payload'
import { draftMode } from 'next/headers'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import PageHeading from '@/components/page-heading'
import RichText from '@/components/RichText'
import NewsComponent from './news'
import PridesComponent from './prides'
import { galleryTypes } from '@/lib/gallery-utils'
import GalleriesComponent from './galleries'

type Args = {
  params: Promise<{
    slug: string
  }>
}

export async function generateMetadata({ params: paramsPromise }: Args): Promise<Metadata> {
  const { slug = '' } = await paramsPromise
  const post = await queryCommunityBySlug({ slug })

  const meta: Metadata = {
    title: `${post.name} Community | Oke-Odan`,
    description: `Explore news, nobles and pictures and videos of ${post.slug} community of Oke-odan`,
    openGraph: {
      url: `/communities/${post.slug}`,
      title: `${post.name} Community | Oke-Odan`,
      description: `Explore news, nobles and pictures and videos of ${post.slug} community of Oke-odan`,
    },
  }
  return meta
}
const queryCommunityBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: config })

  const { docs } = await payload.find({
    collection: 'communities',
    draft,
    limit: 1,
    depth: 0,
    overrideAccess: draft,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  if (docs.length === 0) throw notFound()
  return docs[0]
})
const CommunityPage = async ({ params }: Args) => {
  const { slug } = await params
  const community = await queryCommunityBySlug({ slug })
  return (
    <>
      <PageHeading bigText={community.name} smallText="Oke-Odan" bgImg="/oke-odan-festival.jpg" />
      <main className="w-[90vw] mx-auto my-10">
        <div className="max-w-none">
          <RichText className="w-full text-lg" data={community.description} enableGutter={false} />
        </div>
        <div className="mt-8 space-y-10">
          <NewsComponent slug={community.slug!} name={community.name} />
          <PridesComponent slug={community.slug!} name={community.name} />
          {galleryTypes.map((type) => (
            <GalleriesComponent
              key={type}
              slug={community.slug!}
              name={community.name}
              type={type}
            />
          ))}
        </div>
      </main>
    </>
  )
}

export default CommunityPage
