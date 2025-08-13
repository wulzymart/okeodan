'use client'
import React, { useState } from 'react'
import { ChevronDown, ChevronUp, Menu as MenuIcon, X } from 'lucide-react'
import { MenuItemProps } from './menu-data'
import Link from 'next/link'
import { useMenu } from '@/providers/menu-provider'

const MenuItem = ({ item, level = 0 }: { item: MenuItemProps; level?: number }) => {
  const { closeMenu } = useMenu()
  const [isOpen, setIsOpen] = useState(false)
  const hasChildren = item.items && item.items.length > 0

  const toggleSubMenu = (e: React.MouseEvent) => {
    if (hasChildren) {
      e.preventDefault()
      setIsOpen(!isOpen)
    }
  }

  return (
    <li className="relative min-w-[250px]">
      {item.href ? (
        <Link
          href={item.href || '#'}
          className={`text-xl font-semibold text-gray-600 flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100 ${level > 0 ? 'pl-6' : ''}`}
          onClick={closeMenu}
        >
          <span>{item.label}</span>
          {hasChildren &&
            (isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
        </Link>
      ) : (
        <p
          className={`text-xl font-semibold text-gray-600 flex items-center justify-between w-full px-4 py-2 text-left hover:bg-gray-100 ${level > 0 ? 'pl-6' : ''}`}
          onClick={toggleSubMenu}
        >
          <span>{item.label}</span>
          {hasChildren &&
            (isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />)}
        </p>
      )}

      {hasChildren && isOpen && (
        <ul className="pl-2 border-l border-gray-200">
          {item.items!.map((subItem, index) => (
            <MenuItem key={index} item={subItem} level={level + 1} />
          ))}
        </ul>
      )}
    </li>
  )
}

export const ResponsiveMenu = ({ items }: { items: MenuItemProps[] }) => {
  const { toggleMenu, isMenuOpen } = useMenu()

  return (
    <div className="relative">
      {/* Mobile menu button */}
      <button
        className="md:hidden p-2 text-gray-600 hover:text-gray-900"
        onClick={() => toggleMenu()}
      >
        {isMenuOpen ? <X className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
      </button>
      {/* Desktop menu - always visible on md and up */}
      <nav className="hidden md:block">
        <ul className="flex flex-row gap-4 lg:gap-10 xl:gap-16">
          {items.map((item, index) => (
            <MenuEntry key={index} item={item} />
          ))}
        </ul>
      </nav>
      {/* Mobile menu - shown when isMenuOpen is true */}
      {isMenuOpen && (
        <nav className="absolute top-full left-0 right-0 bg-white border border-gray-200 shadow-lg rounded z-20 min-w-[75vw] md:hidden">
          <ul className="py-2">
            {items.map((item, index) => (
              <MenuItem key={index} item={item} />
            ))}
          </ul>
        </nav>
      )}
    </div>
  )
}

const MenuEntry = ({ item }: { item: MenuItemProps }) => {
  const hasChildren = item.items && item.items.length > 0
  const { closeMenu } = useMenu()
  // const [isOpen, setIsOpen] = useState(false)
  // const toggleSubMenu = (e: React.MouseEvent) => {
  //   if (hasChildren) {
  //     e.preventDefault()
  //     setIsOpen(!isOpen)
  //   }
  // }
  return (
    <li className="relative group">
      <div className="flex items-center gap-2">
        {item.href ? (
          <Link
            href={item.href}
            onClick={closeMenu}
            className="block text-xl font-semibold text-gray-600 hover:bg-gray-100"
          >
            {item.label}
          </Link>
        ) : (
          <p className="block  text-xl font-semibold text-gray-600 hover:bg-gray-100">
            {item.label}
          </p>
        )}
        {hasChildren && (
          <>
            <ChevronUp className="h-4 w-4 hidden group-hover:inline" />
            <ChevronDown className="h-4 w-4 group-hover:hidden" />
          </>
        )}
      </div>
      {item.items && item.items.length > 0 && (
        <ul className="absolute left-0 mt-1 bg-white border border-gray-200 rounded shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 min-w-[200px] z-10">
          {item.items.map((subItem, subIndex) => (
            <MenuItem key={subIndex} item={subItem} />
          ))}
        </ul>
      )}
    </li>
  )
}
