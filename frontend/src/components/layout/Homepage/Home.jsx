import React from 'react'
import HairCut from '../../assets/haircut.jpg'

function Home() {
  return (
    <div className='z-80 w-full h-[700px] mx-auto relative '>
      <figure className='w-full h-[700px] bg-gray-900/70   '>
        <img
          className='w-full h-full object-cover mix-blend-overlay '
          src={HairCut}
          alt='Shoes'
        />
      </figure>
      <div className=' max-w-[1240px] mx-auto text-white absolute top-0'>
        <div className='flex flex-col justify-items-center  px-4 py-36 lg:py-60'>
          <div className='pb-10'>
            <p className='text-center text-lg uppercase font-light pb-2'>
              Discover Your New barber & Book your Appointment
            </p>
            <h3 className='text-center text-3xl uppercase font-light lg:text-5xl'>
              Making you Look Awesome & Manly{' '}
            </h3>
          </div>
          <form className='grid  justify-items-center gap-y-2 w-full mx-auto md:flex'>
            <input
              type='text'
              placeholder='select service'
              className='input input-bordered w-5/6  text-black sm:w-1/2 lg:w-full  lg:mr-2  '
            />
            <input
              type='text'
              placeholder='select country'
              className='input input-bordered w-5/6 text-black sm:w-1/2 lg:w-full  lg:mr-2 '
            />
            <input
              type='text'
              placeholder='select state'
              className='input input-bordered  w-5/6 text-black sm:w-1/2 lg:w-full  lg:mr-2 '
            />
            <input
              type='text'
              placeholder='select city'
              className='input input-bordered  w-5/6 text-black sm:w-1/2 lg:w-full  lg:mr-2 '
            />
            <button className='bg-indigo-600 px-5 py-3 rounded-lg w-1/2 sm:w-auto '>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Home
