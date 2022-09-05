import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { RiScissors2Fill } from 'react-icons/ri'
import { ImCross } from 'react-icons/im'

function Navbar() {
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(!open)
  }
  return (
    <nav className='navbar bg-black py-8 shadow-lg text-neutral-content '>
      <div className='container mx-auto'>
        <div className='px-4 flex  justify-between w-full'>
          <div className='flex-1 mt-3'>
            <button
              onClick={() => openHandler()}
              class={`${
                open ? 'open' : ''
              } block flex hamburger py-4 focus:outline-none`}
            >
              <span class='hamburger-top'></span>
              <span class='hamburger-middle'></span>
              <span class='hamburger-bottom'></span>
            </button>
          </div>
          <div className='flex-auto  flex justify-center'>
            <RiScissors2Fill className='text-4xl' />
          </div>
          <div className='flex-1  flex justify-end space-x-6'>
            <a className=' hover:text-lime-700 '>Home</a>
            <a className=' hover:text-lime-700 '>Home</a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
