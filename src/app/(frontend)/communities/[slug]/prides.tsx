'use client'
import React, { useEffect, useState } from 'react'
import { Media, Pride } from '@/payload-types'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import Image from 'next/image'
import { getCommunityPrides } from './actions'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const PridesComponent = ({ slug, name }: { slug: string; name: string }) => {
  const [hasPrev, setHasPrev] = useState(false)
  const [hasNext, setHasNext] = useState(false)
  const [pridesList, setPridesList] = useState<Pride[]>([])
  const [page, setPage] = useState(1)
  const populate = async (page: number = 1) => {
    const { docs, hasNextPage, hasPrevPage } = await getCommunityPrides(slug, page)
    setPridesList(docs)
    setHasNext(hasNextPage)
    setHasPrev(hasPrevPage)
  }
  useEffect(() => {
    populate(page)
  }, [page])

  if (pridesList.length === 0) return <></>

  return (
    <div>
      <h3 className="font-playfair text-2xl font-bold">
        {name} Community People of Esteemed Honour
      </h3>
      <BentoGrid className="max-w-4xl mx-auto">
        {pridesList.map(({ featuredImage, title, slug }, i) => {
          const img =
            typeof featuredImage === 'number'
              ? '/dark-bg.jpg'
              : (featuredImage as Media).thumbnailURL ||
                (featuredImage as Media).url ||
                '/dark-bg.jpg'
          return (
            <Link key={i} href={`/prides-of-oke-odan/${slug}`}>
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
      <div className="flex items-center justify-center gap10">
        {hasPrev ? (
          <Button
            variant="link"
            className="text-[var(--accent)] hover:text-orange-400"
            onClick={() => setPage(page - 1)}
          >
            Prev
          </Button>
        ) : (
          ''
        )}
        {hasNext ? (
          <Button
            variant="link"
            className="text-[var(--accent)] hover:text-orange-400"
            onClick={() => setPage(page + 1)}
          >
            Next
          </Button>
        ) : (
          ''
        )}
      </div>
    </div>
  )
}

export default PridesComponent
