import PageHeading from '@/components/page-heading'
import React from 'react'
import AboutG30 from './about-us'
import Excos from './excos'
import PictorialsG30 from './pictorials'

const OKDG30Page = () => {
  return (
    <>
      <PageHeading smallText="Oke-Odan" bigText="G30" bgImg="/okd-g30.jpeg" />
      <main className="w-[90vw]">
        <AboutG30 />
        <Excos />
        <PictorialsG30 />
      </main>
    </>
  )
}

export default OKDG30Page
