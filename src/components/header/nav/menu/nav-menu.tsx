import React from 'react'
import { ResponsiveMenu } from './responsive-menu'
import { menuData } from './menu-data'
import { MenuProvider } from '@/providers/menu-provider'

const NavMenu = () => {
  return (
    <div className="w-full flex border-solid border-y-4 border-x-0 border-[var(--accent)] rounded-0 relative z-[1000] bg-[#f7f3ed] py-4 md:justify-center">
      <MenuProvider>
        <ResponsiveMenu items={menuData} />
      </MenuProvider>
    </div>
  )
}

export default NavMenu
