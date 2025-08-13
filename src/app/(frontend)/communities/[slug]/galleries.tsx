'use client'
import React, { useEffect, useState } from 'react'
import { Gallery } from '@/payload-types'
import { GalleryType, getCommunityGalleries } from './actions'
import { Button } from '@/components/ui/button'
import ListCardBgNoExcerpt from '@/components/post-cards/list-card-with-bg-no-excerpt'
import Link from 'next/link'

const GalleriesComponent = ({
  slug,
  name,
  type,
}: {
  slug: string
  name: string
  type: GalleryType
}) => {
  const [hasPrev, setHasPrev] = useState(false)
  const [hasNext, setHasNext] = useState(false)
  const [galleriesList, setGalleriesList] = useState<Gallery[]>([])
  const [page, setPage] = useState(1)
  const populate = (page: number = 1) => {
    getCommunityGalleries(slug, type, page).then(({ docs, hasNextPage, hasPrevPage }) => {
      setGalleriesList(docs)
      setHasNext(hasNextPage)
      setHasPrev(hasPrevPage)
    })
  }
  useEffect(() => {
    populate(page)
  }, [page])

  if (galleriesList.length === 0) return <></>

  return (
    <div>
      <h3 className="font-playfair text-2xl font-bold">
        {name} Community {type}s galleria
      </h3>
      <div className="mx-auto my-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {galleriesList.map(({ images, title, slug }, i) => {
          const image = images[0].image

          return (
            <Link
              key={i}
              href={`/oke-odan-galleries/${type}s/${slug}`}
              className="block w-full h-[400px]"
            >
              <ListCardBgNoExcerpt title={title} featuredImage={image} />
            </Link>
          )
        })}
      </div>
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

export default GalleriesComponent
