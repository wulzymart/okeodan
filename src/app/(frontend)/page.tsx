import React from 'react'
import Slider from '@/components/home-components/hero-slider/slider'
import ObasSpeech from '@/components/home-components/obas-speech'
import NewsGridComponent from '@/components/home-components/news/news'
import PlaceSlider from '@/components/home-components/places-slider/slider'
import ImageModal from '@/components/home-components/image-modal'
import PridesGridComponent from '@/components/home-components/prides/prides'

export default async function HomePage() {
  return (
    <div className="home">
      <Slider />
      <ObasSpeech />
      <PridesGridComponent />
      <PlaceSlider />
      <NewsGridComponent />
      <ImageModal />
    </div>
  )
}
