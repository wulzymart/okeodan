import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import config from '@payload-config'
import { getPayload } from 'payload'
import Link from 'next/link'
import Image from 'next/image'
import { Media } from '@/payload-types'
const PlaceSlider = async () => {
  const payload = await getPayload({ config: config })
  const { docs } = await payload.find({
    collection: 'galleries',
    where: {
      type: {
        equals: 'place',
      },
      isFeatured: {
        equals: true,
      },
      _status: {
        equals: 'published',
      },
    },
    limit: 10,
  })
  if (docs.length === 0) return <></>

  return (
    <div className="w-screen h-fit bg-black/85">
      <section className="w-[90%] mx-auto max-sm:w-[90%] py-10">
        <h3 className="font-playfair text-3xl font-bold my-0 text-center text-white">
          Sites of Oke-Odan
        </h3>
        <div>
          <Carousel>
            <CarouselContent>
              {docs.map((gallery) => {
                const { title, description, images, id } = gallery
                return (
                  <CarouselItem key={id}>
                    <div className="w-full relative">
                      <div>
                        <div className="w-full overflow-hidden relative">
                          <div className="w-full flex flex-col justify-center md:px-28">
                            <div className="space-y-8">
                              <h4 className="text-white uppercase font-playfair tracking-wider text-[25px] md:text-2xl font-semibold">
                                {title}
                              </h4>
                              <p className="w-full md:w-3/4 lg:w-2/3 text-gray-100 leading-6 md:leading-8">
                                {description}
                              </p>
                              <Carousel>
                                <CarouselContent className="w-[80%] mx-auto">
                                  {images.map((image) => {
                                    const i = image.image
                                    if (typeof i === 'number') return ''
                                    return (
                                      <CarouselItem
                                        className="basis-1/2 md:basis-1/2 lg:basis-1/4 pl-2 md:pl-4"
                                        key={image.id}
                                      >
                                        <div className="w-full h-44 relative">
                                          <Image
                                            fill
                                            src={
                                              (i as Media).thumbnailURL ||
                                              (i as Media).url ||
                                              '/dark-bg.jpg'
                                            }
                                            alt={title}
                                          />
                                        </div>
                                      </CarouselItem>
                                    )
                                  })}
                                </CarouselContent>
                                <CarouselPrevious className="bg-gray-500/20 hover:bg-[var(--accent)] text-white p-8 border-none " />
                                <CarouselNext className="bg-gray-500/20 hover:bg-[var(--accent)] text-white p-8 border-none " />
                              </Carousel>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CarouselItem>
                )
              })}
            </CarouselContent>
            <CarouselPrevious className="bg-gray-500/20 hover:bg-[var(--accent)] text-white p-8 border-none " />
            <CarouselNext className="bg-gray-500/20 hover:bg-[var(--accent)] text-white p-8 border-none " />
          </Carousel>
        </div>
        <div className="text-center mt-10">
          <Link
            href="/oke-odan-galleries/places"
            className="py-2 min-w-[150px] px-4 rounded-lg text-lg font-bold border-2 border-solid border-[var(--accent)] bg-transparent text-[var(--accent)] hover:text-white hover:bg-[var(--accent)] cursor-pointer"
          >
            View More
          </Link>
        </div>
      </section>
    </div>
  )
}

export default PlaceSlider
