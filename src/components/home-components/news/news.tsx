import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import Link from 'next/link'
import ListCardBgNoExcerpt from '@/components/post-cards/list-card-with-bg-no-excerpt'

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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {newsList.map(async ({ featuredImage, title, slug }, i) => {
          return (
            <Link key={i} href={`/oke-odan-news/${slug}`}>
              <div className="w-xs">
                <ListCardBgNoExcerpt title={title} featuredImage={featuredImage} />
              </div>
            </Link>
          )
        })}
      </div>
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
