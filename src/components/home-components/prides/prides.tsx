import React from 'react'
import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import Image from 'next/image'
import Link from 'next/link'
import { Media } from '@/payload-types'
import ListCardBgNoExcerpt from '@/components/post-cards/list-card-with-bg-no-excerpt'
const PridesGridComponent = async () => {
  const payload = await getPayload({ config: configPromise })
  const { docs: pridesList } = await payload.find({
    collection: 'prides',
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
      <h3 className="font-playfair text-3xl font-bold">Prides of Oke-Odan</h3>

      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
        {pridesList.map(async ({ featuredImage, title, slug }, i) => {
          return (
            <Link key={i} href={`/prides-of-oke-odan/${slug}`}>
              <div className="w-xs">
                <ListCardBgNoExcerpt title={title} featuredImage={featuredImage} />
              </div>
            </Link>
          )
        })}
      </div>
      <div className="mt-10">
        <Link
          href="/prides-of-oke-odan"
          className="py-2 min-w-[150px] px-4 rounded-lg text-lg font-bold border-2 border-solid border-[var(--accent)] bg-transparent text-[var(--accent)] hover:text-white hover:bg-[var(--accent)] cursor-pointer"
        >
          View More
        </Link>
      </div>
    </section>
  )
}

export default PridesGridComponent
