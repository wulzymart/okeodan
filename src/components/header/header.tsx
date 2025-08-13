import React from 'react'
import NavHeader from './nav/nav-header'
import NavMenu from './nav/menu/nav-menu'

const Header = () => {
  return (
    <div className="bg-slate-700 w-full">
      <NavHeader />
      <NavMenu />
    </div>
  )
}

export default Header
