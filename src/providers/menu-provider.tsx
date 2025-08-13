'use client'
import { createContext, useCallback, useContext, useState } from 'react'

type MenuContextType = {
  isMenuOpen: boolean
  closeMenu: () => void
  toggleMenu: () => void
}

const MenuContext = createContext<MenuContextType | undefined>(undefined)
const useMenu = () => {
  const context = useContext(MenuContext)
  if (!context) {
    throw new Error('useMenu must be used within a MenuProvider')
  }
  return context
}
const MenuProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false)
  }, [])

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev)
  }, [])

  return (
    <MenuContext.Provider value={{ isMenuOpen, closeMenu, toggleMenu }}>
      {children}
    </MenuContext.Provider>
  )
}

export { MenuContext, MenuProvider, useMenu }
