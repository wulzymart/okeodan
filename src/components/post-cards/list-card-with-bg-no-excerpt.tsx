'use client'
import { Media, News, Pride } from '@/payload-types'
import React from 'react'
import Image from 'next/image'

const ListCardBgNoExcerpt = ({ title, featuredImage }: Partial<News | Pride>) => {
  if (typeof featuredImage === 'number') return <></>
  const imageUrl =
    (featuredImage as Media)?.thumbnailURL || (featuredImage as Media)?.url || '/dark-bg.jpg'
  return (
    <div className="w-full h-full min-h-[400px] flex items-end gap-x-6 relative">
      <Image src={imageUrl} alt={title || ''} fill className="object-cover" />
      <div className="w-full h-full relative z-10 flex items-end">
        <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>
        <div className="w-full mb-4 text-white relative z-50 px-6">
          <h2 className="text-xl font-semibold font-playfair my-0-800 mb-1">{title}</h2>
        </div>
      </div>
    </div>
  )
}

export default ListCardBgNoExcerpt
