import React from 'react'
import HairCut8 from '../../assets/haircut8.jpg'

const scissors = 'https://www.goodbarberapp.com/frontassets/images/cta-bg.jpg'

function BarberPro() {
  return (
    <div
      className=' bg-auto py-16 flex flex-col'
      style={{ backgroundImage: `url(${scissors})` }}
    >
      <div className='flex flex-col gap-4 w-3/4 mx-auto'>
        <h3 className='uppercase text-3xl text-indigo-500 text-center pb-1 lg:text-5xl'>
          Are you a Professional barber?
        </h3>
        <p className='text-white capitalize text-center mb-4 text-sm md:text-base'>
          if you are professional barber and want to please your client Sign Up
          and apply for a job.
        </p>
      </div>
      {/* diasy ui style button */}
      <button className='btn bg-indigo-600 w-32 block self-center text-sm hover:bg-indigo-500 md:text-base'>
        Sign Up
      </button>
    </div>
  )
}

export default BarberPro
