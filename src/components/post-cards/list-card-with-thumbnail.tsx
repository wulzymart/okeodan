import { cn } from '@/lib/utils'
import { Media, News, Pride } from '@/payload-types'
import { getExcerpt } from '@/utilities/getExcerpt'
import React from 'react'

const ListCardThumbnail = async ({ title, content, featuredImage }: Partial<News | Pride>) => {
  if (typeof featuredImage === 'number') return <></>
  const excerpt = content ? await getExcerpt(content, 100) : undefined
  const imageUrl =
    (featuredImage as Media)?.thumbnailURL || (featuredImage as Media)?.url || '/dark-bg.jpg'
  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center h-fit md:h-[200px] lg:h-[300px] gap-x-6">
      <div className="w-full mb-4">
        <h2 className="text-base font-semibold my-0 text-gray-800 mb-1">{title}</h2>
        <p>{excerpt}</p>
      </div>
      <div
        className={cn(
          'w-full lg:w-[40%] h-[300px] md:h-full bg-gray-700 bg-cover bg-center',
          !featuredImage && 'bg-gray-300',
        )}
        style={{
          backgroundImage: 'url(' + imageUrl + ')',
        }}
      ></div>
    </div>
  )
}

export default ListCardThumbnail
