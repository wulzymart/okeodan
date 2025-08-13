import React, { cache } from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { CalendarDays, ChevronRight } from 'lucide-react'
import { draftMode } from 'next/headers'
import { generateMeta } from '@/utilities/generateMeta'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import RichText from '@/components/RichText'
import { Media } from '@/payload-types'
type Args = {
  params: Promise<{
    slug: string
  }>
}
export async function generateStaticParams() {
  const payload = await getPayload({ config: configPromise })
  const posts = await payload.find({
    collection: 'news',
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
  const { slug = '' } = await paramsPromise
  const post = await queryPostBySlug({ slug })

  return generateMeta({ doc: post, url: '/oke-odan-news/' + slug })
}

const queryPostBySlug = cache(async ({ slug }: { slug: string }) => {
  const { isEnabled: draft } = await draftMode()

  const payload = await getPayload({ config: configPromise })

  const result = await payload.find({
    collection: 'news',
    draft,
    limit: 1,
    overrideAccess: draft,
    pagination: false,
    where: {
      slug: {
        equals: slug,
      },
    },
  })

  return result.docs?.[0] || null
})

const NewsPage = async ({ params: paramsPromise }: Args) => {
  const { slug } = await paramsPromise
  const payload = await getPayload({ config: configPromise })
  const pride = await queryPostBySlug({ slug })
  if (!pride) throw notFound()
  const { docs: others } = await payload.find({
    collection: 'news',
    limit: 6,
    where: {
      _status: {
        equals: 'published',
      },
      slug: {
        not_equals: slug,
      },
    },
    overrideAccess: false,
    pagination: false,
    select: {
      title: true,
      slug: true,
      featuredImage: true,
    },
  })

  const { title, featuredImage, publishedAt, content } = pride
  if (typeof featuredImage === 'number') return <></>
  const img = (featuredImage as Media).url || '/dark-bg.jpg'

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Featured Image */}
      <div className="relative mb-8 w-full h-[800px] object-fit rounded-lg shadow-sm">
        <Image fill src={img} alt={title} className="object-cover" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-3">
          <article className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
              <div className="flex items-center">
                <CalendarDays className="h-4 w-4 mr-1" />
                {publishedAt ? new Date(publishedAt).toDateString() : undefined}
              </div>
            </div>

            <h1 className="text-4xl font-bold text-gray-900 mb-6">{title}</h1>

            <div className="prose prose-lg max-w-none">
              <RichText className="w-full text-lg" data={content} enableGutter={false} />
            </div>
          </article>
        </div>

        {/* Related News Sidebar */}
        <aside className="lg:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-4">
            <h2 className="text-xl font-semibold text-gray-900 mb-6 pb-2 border-b">Other News</h2>

            <div className="space-y-6">
              {others.map((article, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative w-full h-40 rounded-lg mb-3">
                    <Image
                      src={
                        typeof featuredImage === 'number'
                          ? '/dark-bg.jpg'
                          : (featuredImage as Media).thumbnailURL ||
                            (featuredImage as Media).url ||
                            '/dark-bg.jpg'
                      }
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="font-medium text-gray-900 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2">
                    {article.title}
                  </h3>
                  <div className="flex items-center justify-between mt-2">
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-[var(--accent)] transition-colors duration-200" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </div>
  )
}

export default NewsPage
