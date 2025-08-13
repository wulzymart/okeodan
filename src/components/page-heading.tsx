import React from 'react'
type PageHeadingProp = {
  smallText: string
  bigText: string
  bgImg: string
}

const PageHeading = ({ smallText, bgImg, bigText }: PageHeadingProp) => {
  return (
    <div className="w-full relative">
      <div>
        <div
          className="w-full h-[450px] md:h-[500px] lg:h-screen overflow-hidden relative bg-cover"
          style={{ backgroundImage: `url(${bgImg})` }}
        >
          <div className="bg-black/70 w-full absolute h-full"></div>
          <div className="w-full h-full absolute flex flex-col justify-center items-center p-8 md:px-28 z-50">
            {smallText && (
              <div className="text-white flex gap-1 items-center">
                <div className="border border-solid w-20 h-0"></div>
                <span>{smallText}</span>
                <div className="border border-solid w-20 h-0"></div>
              </div>
            )}
            <h1 className="text-white text-5xl font-extrabold">{bigText}</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PageHeading
