import React from 'react'
import NavbarItem from './NavbarItem'

const Navbar = () => {
  return (
    <div className='flex justify-center gap-6 dark:bg-gray-600 bg-amber-100 p-4 lg:text-lg '>
      <NavbarItem title='Trending' param='trending' />
      <NavbarItem title='Top Rated' param='rated' />
      
    </div>
  )
}

export default Navbar
