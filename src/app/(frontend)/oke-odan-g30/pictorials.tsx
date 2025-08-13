'use client'
import React from 'react'
import { FeaturedImageGallery } from '@/components/gallery'

const PictorialsG30 = () => {
  const okdWithOba = [
    {
      src: '/okd30/with-oba/okd30-with-oba1.jpg',
      alt: 'Members of OkD-30 with OBA DR. O. O. FAGBENRO OLOKEODAN OF OKEODAN-YEWA',
    },
    {
      src: '/okd30/with-oba/oba.jpg',
      alt: 'OBA DR. O. O. FAGBENRO OLOKEODAN OF OKEODAN-YEWA',
    },
    {
      src: '/okd30/with-oba/okd30-with-oba2.jpg',
      alt: 'Members of OkD-30 with OBA DR. O. O. FAGBENRO OLOKEODAN OF OKEODAN-YEWA',
    },
    {
      src: '/okd30/with-oba/okd30-with-oba3.jpg',
      alt: 'Members of OkD-30 with OBA DR. O. O. FAGBENRO OLOKEODAN OF OKEODAN-YEWA',
    },
    {
      src: '/okd30/with-oba/okd30-with-oba4.jpg',
      alt: 'Members of OkD-30 with OBA DR. O. O. FAGBENRO OLOKEODAN OF OKEODAN-YEWA',
    },
    {
      src: '/okd30/with-oba/okd30-with-oba5.jpg',
      alt: 'Members of OkD-30 with OBA DR. O. O. FAGBENRO OLOKEODAN OF OKEODAN-YEWA',
    },
  ]

  return (
    <section className="mt-8 py-10">
      <div className="container max-sm:w-[90%] mx-auto text-center">
        <h3 className="font-playfair font-bold text-3xl my-6">Pictorials</h3>
        <div className="bg-orange-200/20 w-fit p-4 md:p-6 mt-3">
          <h3 className="font-playfair font-semibold text-2xl m-0 mb-2 leading-none text-left">
            Members of OkD-30 with OBA
          </h3>
          <FeaturedImageGallery data={okdWithOba} />
        </div>
      </div>
    </section>
  )
}

export default PictorialsG30
