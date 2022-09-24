import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa'
import { BsScissors } from 'react-icons/bs'
import { ImCross } from 'react-icons/im'
import Backdrop from '../Backdrop'
import UserContext from '../../context/user/UserContext'

function Navbar() {
  const [open, setOpen] = useState(false)

  const { user, loading, LoginUser, Logout } = useContext(UserContext)

  const openHandler = () => {
    setOpen(!open)
  }

  const LogoutHandler = () => {
    Logout()
  }

  return (
    <nav className='sticky navbar bg-black py-12 shadow-lg text-neutral-content z-200 '>
      <div className='w-full px-3 mx-auto'>
        <div className=' flex  justify-between w-full'>
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
              <label className=' fixed top-0 left-0 z-210 w-1/2 h-screen pt-6 flex flex-col justify-between bg-zinc-700 sm:w-1/3 lg:w-1/4'>
                <ul className='list-none w-full'>
                  <li className='pt-4 pb-2 ml-4'>
                    <Link to='/'>
                      <span className='font-bold'>Home</span>
                    </Link>
                  </li>
                  <li className='pt-4 pb-2 ml-4'>
                    <Link to='login'>
                      <span className='font-bold'>Login</span>
                    </Link>
                  </li>
                  <li className='pt-4 pb-2 ml-4'>
                    <Link to='signup'>
                      <span className='font-bold'>SignUp</span>
                    </Link>
                  </li>
                  <li className='pt-4 pb-2 ml-4'>
                    <Link to='about'>
                      <span className='font-bold'>About Us</span>
                    </Link>
                  </li>
                  <li className='pt-4 pb-2 ml-4'>
                    <Link to='/faq'>
                      <span className='font-bold'>FQA</span>
                    </Link>
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
            {user ? (
              <>
                <p className='cursor-pointer'>{user.name}</p>
                <p onClick={LogoutHandler} className='cursor-pointer'>
                  Logout
                </p>
              </>
            ) : (
              <>
                <Link to='/login' className=' hover:text-lime-700 '>
                  Login
                </Link>
                <Link to='/signup' className=' hover:text-lime-700 '>
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
