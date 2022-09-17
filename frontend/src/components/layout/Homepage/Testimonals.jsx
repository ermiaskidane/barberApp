import React from 'react'
import HairCut6 from '../../assets/haircut6.jpg'
import HairCut8 from '../../assets/haircut8.jpg'

function Testimonals() {
  return (
    <div className='py-16 '>
      <div className='flex flex-col'>
        <p className='uppercase text-3xl text-indigo-500 text-center pb-16 lg:text-5xl'>
          Testimonals
        </p>
        <div className='flex flex-col gap-6  lg:flex-row lg:w-3/4 lg:mx-auto '>
          <div className='flex flex-col items-center w-5/6 mx-auto bg-gray-600/80 shadow-2xl py-4 pb-8 rounded hover:shadow-gray-600'>
            <img className='w-24 h-24 rounded-full ' src={HairCut6} alt='' />
            <h3 className='text-white uppercase text-center font-medium pt-4 text-sm md:text-base '>
              petter json
            </h3>
            <p className='text-black capitalize text-center pt-4 px-2 text-sm  md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam laborum possimus enim non consectetur consequuntur
              dolore tenetur odio voluptatem obcaecati perferendis natus quo
              voluptate itaque perspiciatis necessitatibus, quis fuga
              distinctio?
            </p>
          </div>
          <div className='flex flex-col items-center w-5/6 mx-auto bg-gray-600/80 shadow-2xl py-4 pb-8 rounded hover:shadow-gray-600'>
            <img className='w-24 h-24 rounded-full' src={HairCut8} alt='' />
            <h3 className='text-white uppercase text-center font-medium pt-4 text-sm md:text-base '>
              Jack william
            </h3>
            <p className='text-black capitalize text-center pt-4 px-2 text-sm md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam laborum possimus enim non consectetur consequuntur
              dolore tenetur odio voluptatem obcaecati perferendis natus quo
              voluptate itaque perspiciatis necessitatibus, quis fuga
              distinctio?
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonals
