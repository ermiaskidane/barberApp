import React from 'react'
import HairCut from '../../assets/haircut.jpg'
import { IoMdArrowDropleft } from 'react-icons/io'
import { IoMdArrowDropright } from 'react-icons/io'

function Popular() {
  return (
    <div className=' mx-auto py-16 bg-gray-400'>
      <div className='flex flex-col'>
        <h2 className='uppercase text-3xl text-indigo-500 text-center pb-16 lg:text-5xl'>
          Our Popular Service
        </h2>

        <div className='flex gap-x-6 mx-auto'>
          <IoMdArrowDropleft className='hidden sm:block bg-stone-400 text-gray-800 text-4xl self-center ' />
          <div className=''>
            <img className='w-60 h-56' src={HairCut} alt='' />
            <p className='uppercase text-base text-center bg-zinc-500 text-black py-2 lg:text-lg'>
              Eric Nelson
            </p>
          </div>
          <div className='hidden md:block'>
            <img className='w-60 h-56' src={HairCut} alt='' />
            <p className='uppercase text-base text-center bg-zinc-500 text-black py-2 lg:text-lg'>
              Eric Nelson
            </p>
          </div>
          <div className='hidden lg:block'>
            <img className='w-60 h-56' src={HairCut} alt='' />
            <p className='uppercase text-base text-center bg-zinc-500 text-black py-2 lg:text-lg'>
              Eric Nelson
            </p>
          </div>
          <div className='hidden lg:block'>
            <img className='w-60 h-56' src={HairCut} alt='' />
            <p className='uppercase text-base text-center bg-zinc-500  text-black py-2 lg:text-lg'>
              Eric Nelson
            </p>
          </div>
          <IoMdArrowDropright className='hidden sm:block bg-stone-400 text-gray-800 text-4xl self-center ' />
        </div>
        {/* start of  daisy ui style */}
        <div className='flex justify-center w-full pt-6 gap-2'>
          <a href='#item1' className='btn btn-xs'>
            1
          </a>
          <a href='#item2' className='btn btn-xs'>
            2
          </a>
          <a href='#item3' className='btn btn-xs'>
            3
          </a>
          <a href='#item4' className='btn btn-xs'>
            4
          </a>
        </div>
        {/* end of  daisy ui style */}
      </div>
    </div>
  )
}

export default Popular
