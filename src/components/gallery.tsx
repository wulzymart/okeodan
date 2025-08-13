import Image from 'next/image'
import React from 'react'
export function FeaturedImageGallery({ data }: { data: { src: string; alt: string }[] }) {
  const [active, setActive] = React.useState(data[0])
  if (!data.length) return <></>
  return (
    <div className="grid gap-4">
      <div>
        <img
          className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
          src={active.src}
          alt={active.alt}
        />
      </div>
      <div className="grid grid-flow-col gap-4">
        {data.map(({ src, alt }, index) => (
          <div key={index} className="relative h-20 max-w-full cursor-pointer rounded-lg">
            <Image
              onClick={() => setActive({ src, alt })}
              src={src}
              fill
              className="object-cover object-center"
              alt={alt}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
