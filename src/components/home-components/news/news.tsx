import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import Image from 'next/image'
import Link from 'next/link'
import { Media } from '@/payload-types'

const NewsGridComponent = async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs: newsList } = await payload.find({
    collection: 'news',
    limit: 6,
    where: {
      _status: {
        equals: 'published',
      },
    },
    overrideAccess: false,
    pagination: false,
    select: {
      title: true,
      slug: true,
      featuredImage: true,
      content: true,
    },
  })
  return (
    <section className='className="w-[90vh] mx-auto my-10 text-center space-y-10'>
      <h3 className="font-playfair text-3xl font-bold">Echoes from Oke-Odan</h3>
      <BentoGrid className="max-w-4xl mx-auto">
        {newsList.map(async ({ featuredImage, title, slug }, i) => {
          const img =
            typeof featuredImage === 'string'
              ? '/dark-bg.jpg'
              : (featuredImage as Media).thumbnailURL ||
                (featuredImage as Media).url ||
                '/dark-bg.jpg'
          return (
            <Link key={i} href={`/oke-odan-news/${slug}`}>
              <div className="w-xs">
                <BentoGridItem
                  title={title}
                  header={
                    <div className="relative w-full h-46">
                      <Image fill src={img} alt="{title}" />
                    </div>
                  }
                />
              </div>
            </Link>
          )
        })}
      </BentoGrid>
      <div className="mt-10">
        <Link
          href="/oke-odan-news"
          className="py-2 min-w-[150px] px-4 rounded-lg text-lg font-bold border-2 border-solid border-[var(--accent)] bg-transparent text-[var(--accent)] hover:text-white hover:bg-[var(--accent)] cursor-pointer"
        >
          View More
        </Link>
      </div>
    </section>
  )
}

export default NewsGridComponent
