'use client'
import { Media, News, Pride } from '@/payload-types'
import React from 'react'

const ListCardBgNoExcerpt = ({ title, featuredImage }: Partial<News | Pride>) => {
  if (typeof featuredImage === 'number') return <></>
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
      <div className="w-full h-full absolute inset-0 bg-black opacity-50"></div>
      <div className="w-full mb-4 text-white relative z-50 px-6">
        <h2 className="text-xl font-semibold font-playfair my-0-800 mb-1">{title}</h2>
      </div>
    </div>
  )
}

export default ListCardBgNoExcerpt
