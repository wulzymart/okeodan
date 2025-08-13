import Link from 'next/link'
import React from 'react'
import { aboutLinks, resourceLinks } from './footer-data'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="bg-gray-900 w-full overflow-hidden">
      <div className="w-full p-4 py-6 lg:py-8">
        <div className="w-full md:flex md:justify-center gap-10 md:gap-20 lg:gap-40">
          <div className="mb-6 md:mb-0 w-fit">
            <Link href="/" className="flex items-center">
              <Image
                src="/Okeodan-flag.png"
                width="150"
                height="180"
                className="me-3"
                alt="oke-odan Logo"
              />
            </Link>
          </div>
          <div className="grid lg:grid-cols-2 gap-20">
            <div className="w-full flex gap-20">
              <div className="w-full md:w-fit min-w-fit">
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">Resources</h2>
                <ul className="font-medium">
                  {resourceLinks.map((item, index) => (
                    <li key={index} className="mb-4">
                      <Link href={item.link} className="no-underline text-gray-100">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-fit min-w-fit">
                <h2 className="mb-6 text-sm font-semibold uppercase text-white">About</h2>
                <ul className="font-medium">
                  {aboutLinks.map((item, index) => (
                    <li key={index} className="mb-4">
                      <Link href={item.link} className="no-underline text-gray-100">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="w-full">
              <iframe
                loading="lazy"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15850.086136262355!2d2.8980859499999996!3d6.7060185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b6d027da03763%3A0x23a6ec7be3f5b2ad!2sOke%20Odan%20112106%2C%20Ogun%20State!5e0!3m2!1sen!2sng!4v1716293786944!5m2!1sen!2sng"
                className="w-full"
                style={{ border: 0 }}
              />
              <p className="mt-4 text-sm text-gray-100">
                Email:
                <a className="no-underline text-[var(--accent)]" href="mailto:okeodan1@gmail.com">
                  okeodan1&#64;gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="flex gap-2 text-sm text-gray-500 sm:text-center dark:text-gray-400">
            <span>© {new Date().getFullYear()}</span>
            <Link
              href="/oke-odan-g30"
              className="no-underline text-[var(--accent)] hover:underline"
            >
              Oke-Odan G30™
            </Link>
            .<span>All Rights Reserved.</span>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
