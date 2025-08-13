'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
const ErrorPage: React.FC = () => {
  const router = useRouter()

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-orange-500 mb-4">Oops! Something went wrong.</h1>
      <p className="text-lg text-gray-700 mb-8">
        An unexpected error has occurred. Please try again.
      </p>
      <div className="flex space-x-4">
        <button
          onClick={() => router.push('/')}
          className="px-4 py-2 bg-[var(--accent)] text-white rounded hover:bg-[var(--accent)]/50"
        >
          Go to Home
        </button>
        <button
          onClick={() => router.refresh()}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-700"
        >
          Refresh Page
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
