import React from 'react'
import { HomeIcon } from 'lucide-react'
import Link from 'next/link'

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-xl w-full px-4 py-8 text-center">
        {/* SVG Illustration */}
        <svg viewBox="0 0 200 200" className="w-48 h-48 mx-auto mb-8">
          <path
            d="M100 20C55.8172 20 20 55.8172 20 100C20 144.183 55.8172 180 100 180C144.183 180 180 144.183 180 100C180 55.8172 144.183 20 100 20Z"
            fill="#E5E7EB"
          />
          <path
            d="M65 80C65 75.5817 68.5817 72 73 72C77.4183 72 81 75.5817 81 80C81 84.4183 77.4183 88 73 88C68.5817 88 65 84.4183 65 80Z"
            fill="#4B5563"
          />
          <path
            d="M119 80C119 75.5817 122.582 72 127 72C131.418 72 135 75.5817 135 80C135 84.4183 131.418 88 127 88C122.582 88 119 84.4183 119 80Z"
            fill="#4B5563"
          />
          <path
            d="M60 120C60 120 75 100 100 100C125 100 140 120 140 120"
            stroke="#4B5563"
            strokeWidth="8"
            strokeLinecap="round"
          />
        </svg>

        {/* Error Message */}
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>

        {/* Home Link */}
        <Link
          href="/"
          className="inline-flex items-center px-6 py-3 text-base font-medium text-white bg-[var(--accent)] rounded-md hover:bg-slate-700 transition-colors duration-300 gap-2"
        >
          <HomeIcon className="w-5 h-5" />
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFoundPage
