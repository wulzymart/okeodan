import React from 'react'
import Slider from '@/components/home-components/hero-slider/slider'
import ObasSpeech from '@/components/home-components/obas-speech'
import NewsGridComponent from '@/components/home-components/news/news'
import PlaceSlider from '@/components/home-components/places-slider/slider'

export default async function HomePage() {
  return (
    <div className="home">
      <Slider />
      <ObasSpeech />
      <PlaceSlider />
      <NewsGridComponent />
    </div>
  )
}
