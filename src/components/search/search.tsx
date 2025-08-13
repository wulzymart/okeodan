'use client'
import React, { useState } from 'react'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { Search } from 'lucide-react'
import { useRouter } from 'next/navigation'

const SearchInput = ({ url, entity }: { url: string; entity: string }) => {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const handleClick = () => {
    if (!search) return
    router.push(`${url}?search=${search}`)
  }
  return (
    <div className="flex justify-end mb-10">
      <div className="w-full md:w-[300px]">
        <div className="flex w-full relative">
          <Input
            type="text"
            placeholder={`Search ${entity}`}
            className="bg-white text-gray-700 "
            onChange={(e) => setSearch(e.currentTarget.value)}
          />
          <Button
            type="button"
            size="icon"
            onClick={handleClick}
            className="bg-[var(--accent)] text-white absolute right-0"
          >
            <Search />
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SearchInput
