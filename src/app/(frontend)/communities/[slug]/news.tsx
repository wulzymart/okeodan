'use client'
import React, { useEffect, useState } from 'react'
import { Media, News } from '@/payload-types'
import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid'
import { Link } from 'lucide-react'
import Image from 'next/image'
import { getCommunityNews } from './actions'
import { Button } from '@/components/ui/button'

const NewsComponent = ({ slug, name }: { slug: string; name: string }) => {
  const [hasPrev, setHasPrev] = useState(false)
  const [hasNext, setHasNext] = useState(false)
  const [newsList, setNewsList] = useState<News[]>([])
  const [page, setPage] = useState(1)
  const populate = async (page: number = 1) => {
    const { docs, hasNextPage, hasPrevPage } = await getCommunityNews(slug, page)
    setNewsList(docs)
    setHasNext(hasNextPage)
    setHasPrev(hasPrevPage)
  }
  useEffect(() => {
    populate(page)
  }, [page])

  if (newsList.length === 0) return <></>

  return (
    <div>
      <h3 className="font-playfair text-2xl font-bold">{name} Community News</h3>
      <BentoGrid className="max-w-4xl mx-auto">
        {newsList.map(({ featuredImage, title, slug }, i) => {
          const img =
            typeof featuredImage === 'number'
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

export default NewsComponent
