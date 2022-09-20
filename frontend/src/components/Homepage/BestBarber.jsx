import React from 'react'
import HairCut from '../assets/haircut.jpg'
import { AiOutlineHeart } from 'react-icons/ai'
import { ImCross } from 'react-icons/im'

function BestBarber() {
  return (
    <div className=' mx-auto py-8 pb-16'>
      <h2 className='text-3xl uppercase font-light text-center pt-8 pb-16 lg:text-5xl'>
        Best Rated barbers
      </h2>
      <div className='carousel carousel-end rounded-box'>
        <div className='carousel-item'>
          <img className='w-54 h-56' src={HairCut} alt='Drink' />
        </div>
        <div className='carousel-item'>
          <img className='w-54 h-56' src={HairCut} alt='Drink' />
        </div>
        <div className='carousel-item'>
          <img className='w-54 h-56' src={HairCut} alt='Drink' />
        </div>
        <div className='carousel-item'>
          <img className='w-54 h-56' src={HairCut} alt='Drink' />
        </div>
        <div className='carousel-item'>
          <img className='w-54 h-56' src={HairCut} alt='Drink' />
        </div>
        <div className='carousel-item'>
          <img className='w-54 h-56' src={HairCut} alt='Drink' />
        </div>
        <div className='carousel-item'>
          <img
            className='w-54 h-56'
            src='https://placeimg.com/400/300/arch'
            alt='Drink'
          />
        </div>
      </div>

      {/* <div className='flex flex-col items-center'>
        <h2 className='text-lg'>Best Rated barbers</h2>
        <div className=' flex overflow-hidden space-between   '>
          <img className='w-4/5 lg:w-1/4' src={HairCut} alt='' />
          <img className='w-4/5 lg:w-1/4' src={HairCut} alt='' />
          <img className='w-4/5 lg:w-1/4' src={HairCut} alt='' />
          <img className='w-4/5 lg:w-1/4' src={HairCut} alt='' />
          <img className='w-4/5 lg:w-1/4' src={HairCut} alt='' />
          <div className='flex flex-col items-start absolute bottom-20 left-24  text-white  '>
            <img src={HairCut} className='w-10 h-10 rounded-full' alt='' />
            <span className='self-start'>lee charles</span>
            <span>52 manchester road, HD7 5RD</span>
            <AiOutlineHeart />
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default BestBarber
