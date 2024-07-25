import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className='w-full py-5 flex sm:px-10 px-5 items-center justify-between'>
      <nav className='screen-max-width w-full flex justify-between items-center'>
        <img src={appleImg} alt="Apple" width={14} height={18} />

        <div className='sm:flex justify-center items-center hidden'>
          {
            navLists.map((nav) => (
              <div className='px-2' key={nav}>
                <a href='#' className='px-3 text-gray-200 hover:text-white'>{nav}</a>
              </div>
            ))
          }
        </div>

        <div className='flex items-center gap-3'>
          <img src={searchImg} alt="search" className='mx-2' width={18} height={18} />
          <img src={bagImg} alt="search" className='mx-2' width={18} height={18} />
        </div>
      </nav>
    </header>
  )
}

export default Navbar;