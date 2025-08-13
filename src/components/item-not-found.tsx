import React from 'react'
import { Search, AlertCircle } from 'lucide-react'

const ItemNotFound = ({
  title = 'No items found',
  message = "We couldn't find what you're looking for.",
  suggestion = 'Try adjusting your search.',
  icon = 'search',
}: {
  title?: string
  message?: string
  suggestion?: string
  icon?: 'search'
}) => {
  const Icon = icon === 'search' ? Search : AlertCircle

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="mb-6 rounded-full bg-gray-100 p-4">
        <Icon className="h-8 w-8 text-gray-400" />
      </div>

      <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>

      <div className="max-w-sm">
        <p className="mb-1 text-sm text-gray-600">{message}</p>
        <p className="text-sm text-gray-500">{suggestion}</p>
      </div>
    </div>
  )
}

export default ItemNotFound
