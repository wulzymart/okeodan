import { Media, News, Pride } from '@/payload-types'
import { getExcerpt } from '@/utilities/getExcerpt'
import Image from 'next/image'
import React from 'react'

const ListCardBg = async ({ title, content, featuredImage }: Partial<News | Pride>) => {
  if (typeof featuredImage === 'number') return <></>
  const excerpt = content ? await getExcerpt(content, 100) : undefined
  const imageUrl =
    (featuredImage as Media)?.thumbnailURL || (featuredImage as Media)?.url || '/dark-bg.jpg'

  return (
    <div
      className="w-full h-full flex items-end gap-x-6 relative bg-cover"
      style={{
        backgroundPosition: 'top center',
        backgroundImage: 'url(' + imageUrl + ')',
      }}
    >
      <Image src={imageUrl} alt={title || ''} fill className="object-cover" />
      <div className="relative z-10 w-full h-full flex items-end">
        <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>
        <div className="w-full mb-4 text-white relative z-50 px-6">
          <h2 className="text-xl font-semibold font-playfair my-0-800 mb-1">{title}</h2>

          <p>{excerpt}</p>
        </div>
      </div>
    </div>
  )
}

export default ListCardBg
