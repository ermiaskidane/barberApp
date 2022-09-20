import React from 'react'
import HairCut from '../assets/haircut.jpg'
import HairCut8 from '../assets/haircut8.jpg'
import HairCut9 from '../assets/haircut9.jpg'
import { AiFillStar } from 'react-icons/ai'

function Review() {
  return (
    <div className='mx-auto bg-gray-600 py-16'>
      <div className='flex flex-col items-center'>
        <h3 className='uppercase text-3xl text-black text-indigo-500 text-center pb-16 lg:text-5xl'>
          Latest Reviews
        </h3>

        <div className='flex flex-col items-center gap-8 sm:flex-row '>
          <img
            className='w-48 h-48 border-2 border-gray-400/90 '
            src={HairCut8}
            alt=''
          />
          <div className='flex flex-col items-center justify-center sm:items-start'>
            <div className='flex '>
              <img
                className='w-10 h-10 border-2 rounded-full border-gray-50 self-center'
                src={HairCut9}
                alt=''
              />

              <div className='flex flex-col pl-4 '>
                <p className='text-lg capitalize text-black text-base lg:text-lg'>
                  anchor lee
                </p>
                <div className='flex'>
                  <AiFillStar className='text-amber-500' />
                  <AiFillStar className='text-amber-500' />
                  <AiFillStar className='text-amber-500' />
                  <AiFillStar className='text-amber-500' />
                  <AiFillStar className='text-amber-500' />
                </div>
              </div>
            </div>
            <p className='text-black capitalize pt-4 text-sm w-11/12 mx-auto md:text-base md:w-full'>
              great barber, defintely recommends for friends
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Review
