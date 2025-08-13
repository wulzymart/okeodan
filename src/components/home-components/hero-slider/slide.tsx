import React from 'react'
import { SliderItem } from './slider-data'
import Link from 'next/link'

export const Slide = ({ info, bgImage, title, buttonTitle, link }: SliderItem) => {
  return (
    <div>
      <div
        className="w-full h-[450px] md:h-[500px] lg:h-screen overflow-hidden relative bg-cover"
        style={{ backgroundImage: 'url(' + bgImage + ')' }}
      >
        <div className="bg-black/70 w-full absolute h-full"></div>
        <div className="w-full h-full absolute flex flex-col justify-center p-8 md:px-28">
          <div className="space-y-8">
            <h3 className="text-white uppercase font-playfair tracking-wider text-[25px] md:text-4xl font-black">
              {title}
            </h3>
            <p className="w-full md:w-3/4 lg:w-2/3 text-gray-100 md:text-xl leading-6 md:leading-8">
              {info}
            </p>
            <Link href={link}>
              <button className="py-2 min-w-[150px] px-4 rounded-lg text-lg font-bold border-2 border-solid border-[var(--accent)] bg-transparent text-[var(--accent)] hover:text-white hover:bg-[var(--accent)] cursor-pointer">
                {buttonTitle}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
