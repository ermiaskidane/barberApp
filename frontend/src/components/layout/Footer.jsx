import React from 'react'
import { BsScissors } from 'react-icons/bs'
import { ImFacebook } from 'react-icons/im'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiOutlineGooglePlus } from 'react-icons/ai'
import { IoLogoInstagram } from 'react-icons/io'
import { IoLogoPinterest } from 'react-icons/io'
import { RiArrowDropRightLine } from 'react-icons/ri'

function Footer() {
  return (
    <div className='pt-16 bg-gray-800/60'>
      <div className=''>
        <div className='grid grid-rows-4 grid-cols-none  md:grid-cols-4 md:grid-rows-1  pb-16  '>
          <div className='flex flex-col items-center justify-self-center'>
            <BsScissors className='w-10 h-10 ' />
            <div className='flex justify-between gap-6 w-full pt-4 '>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <ImFacebook className='w-5 h-5' />
                </a>
              </p>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <AiOutlineTwitter className='w-5 h-5' />
                </a>
              </p>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <AiOutlineGooglePlus className='w-5 h-5' />
                </a>
              </p>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <IoLogoInstagram className='w-5 h-5' />
                </a>
              </p>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <IoLogoPinterest className='w-5 h-5' />
                </a>
              </p>
            </div>
          </div>
          <div className='pl-4 '>
            <h3 className='uppercase text-xl text-indigo-500  pb-1 lg:text-3xl'>
              Useful Links
            </h3>
            <div>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <RiArrowDropRightLine className='inline' /> Home
                </a>
              </p>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <RiArrowDropRightLine className='inline' /> Services
                </a>
              </p>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <RiArrowDropRightLine className='inline' /> About Us
                </a>
              </p>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <RiArrowDropRightLine className='inline' /> For Barber
                </a>
              </p>
            </div>
          </div>
          <div className='pl-4 '>
            <h3 className='uppercase text-xl text-indigo-500  pb-1 lg:text-3xl'>
              Important Links
            </h3>
            <div>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <RiArrowDropRightLine className='inline' /> Login
                </a>
              </p>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <RiArrowDropRightLine className='inline' /> Registration
                </a>
              </p>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <RiArrowDropRightLine className='inline' /> For Professionals
                </a>
              </p>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <RiArrowDropRightLine className='inline' /> Terms and
                  Conditions Barber
                </a>
              </p>
              <p>
                <a
                  href='#hello'
                  className='hover:text-slate-200 transition delay-150 duration-300 ease-in-out'
                >
                  <RiArrowDropRightLine className='inline' />
                  Privacy Policy
                </a>
              </p>
            </div>
          </div>
          <div className='pl-4 pt-3 md:pt-0'>
            <h3 className='uppercase text-xl text-indigo-500  pb-1 lg:text-3xl'>
              About US
            </h3>
            <p className='pt-2 pl-2 md:pl-0'>
              Best Barbers city center <br /> Leicester 15 charles street <br />{' '}
              LE1 5TS
            </p>

            <a
              href='#home'
              className='font-medium block pt-2 hover:text-indigo-800'
            >
              Read More
            </a>
          </div>
        </div>
        <div className='bg-black py-6'>
          <p className='text-white text-center'>
            Copyright @2022 best Barber. All Rights reserved.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Footer
