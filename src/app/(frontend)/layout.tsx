import React from 'react'
import './globals.css'
import Header from '@/components/header/header'
import Footer from '@/components/footer/footer'
import { AdminBar } from '@/components/AdminBar'
import { draftMode } from 'next/headers'

export const metadata = {
  'google-site-verification': 'Eb8TKgyo1c7Rhbn4mICM3YcufiflKjd_dedd-Qo-vFs',
  description:
    'Welcome to Oke-Odan, a fast-growing town in Ogun State, Nigeria. Discover our peaceful and culture-oriented community, explore our tourism attractions, and enjoy fresh farm produce. Visit Oke-Odan, a major border town along the Nigeria-Republic of Benin international road. Join us for the Oke-Odan Cultural Festival and consider raising your family or growing your business here.',
  author: 'olawalemart@gmail.com',
  keywords:
    'Oke-Odan, Ogun State, Nigeria, border town, tourism, culture, farm produce, Oke-Odan Cultural Festival, oke-odan family, oke-odan business',
}

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props
  const { isEnabled } = await draftMode()

  return (
    <html lang="en">
      <body>
        <AdminBar
          adminBarProps={{
            preview: isEnabled,
          }}
        />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
