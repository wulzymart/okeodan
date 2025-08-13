import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const NavHeader = () => {
  return (
    <nav className="bg-okd-street w-full h-fit pt-10 relative">
      <div className="absolute w-full h-full bg-slate-800/95 top-0"></div>
      <div className="flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10 lg:gap-20 relative px-10 pb-4 md:pb-10 z-50">
        <Link href="/">
          <div>
            <Image src="/Okeodan-logo.png" alt="okeodan logo" width={150} height={180} />
          </div>
        </Link>
        <div className="flex flex-col items-end">
          <h1 className="mb-1 text-base poppins-bold sm:text-lg md:text-xl lg:text-3xl text-white">
            ....Welcome To{' '}
            <span className="font-bold text-2xl md:text-3xl lg:text-4xl text-[var(--accent)]">
              Oke-Odan
            </span>{' '}
            Yewa.
          </h1>
          <p className="mt-0 poppins-regular-italic text-orange-300">Powered by OKD-G30</p>
        </div>
        <div className="hidden md:block">
          <Link href="/">
            <Image src="/Okeodan-flag.png" alt="okeodan flag" width="180" height="180" />
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default NavHeader
