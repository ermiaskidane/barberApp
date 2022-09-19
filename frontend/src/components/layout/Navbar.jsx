import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { BsScissors } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import Backdrop from '../Backdrop'

function Navbar() {
  const [open, setOpen] = useState(false)

  const openHandler = () => {
    setOpen(!open)
  }

  return (
    <nav className='sticky navbar bg-black py-12 shadow-lg text-neutral-content z-100 '>
      <div className='container mx-auto'>
        <div className='px-4 flex  justify-between w-full'>
          <div className='flex-1 mt-3'>
            <button
              onClick={() => openHandler()}
              className={`${
                open ? 'open' : ''
              } block flex hamburger py-4  z-100 focus:outline-none`}
            >
              <span class='hamburger-top'></span>
              <span class='hamburger-middle'></span>
              <span class='hamburger-bottom'></span>
            </button>
          </div>
          {open ? (
            <>
              <Backdrop open={openHandler} />
              <label className=' fixed top-0 left-0 z-110 w-1/2 h-screen pt-6 flex flex-col justify-between bg-zinc-700 sm:w-1/3 lg:w-1/4'>
                <ul className='list-none w-screen'>
                  <li className='pt-4 pb-2 ml-4'>
                    <a href='#home'>
                      <span className='font-bold'>Home</span>
                    </a>
                  </li>
                  <li className='pt-4 pb-2 ml-4'>
                    <a href='#home'>
                      <span className='font-bold'>Login</span>
                    </a>
                  </li>
                  <li className='pt-4 pb-2 ml-4'>
                    <a href='#home'>
                      <span className='font-bold'>SignUp</span>
                    </a>
                  </li>
                  <li className='pt-4 pb-2 ml-4'>
                    <a href='#home'>
                      <span className='font-bold'>About Us</span>
                    </a>
                  </li>
                  <li className='pt-4 pb-2 ml-4'>
                    <a href='#home'>
                      <span className='font-bold'>FQA</span>
                    </a>
                  </li>
                </ul>
                <div className='bg-sky-500 mb-1.5'>
                  <p
                    className='text-center font-bold uppercase py-2 cursor-pointer'
                    onClick={() => openHandler()}
                  >
                    close
                  </p>
                </div>
              </label>
            </>
          ) : (
            <></>
          )}
          <div className='flex-auto  flex justify-center'>
            <BsScissors className='text-4xl' />
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
