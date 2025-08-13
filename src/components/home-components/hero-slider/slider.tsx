'use client'
import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { sliderData } from './slider-data'
import { Slide } from './slide'
const Slider = () => {
  return (
    <div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
      >
        <CarouselContent>
          {sliderData.map((item, index) => (
            <CarouselItem key={index}>
              <Slide {...item} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="p-6 bg-accent-foreground/50 text-white border-none" />
        <CarouselNext className="p-6 bg-accent-foreground/50 text-white border-none" />
      </Carousel>
    </div>
  )
}

export default Slider
