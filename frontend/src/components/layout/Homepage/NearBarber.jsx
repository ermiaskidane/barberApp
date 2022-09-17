import React from 'react'
import HairCut from '../../assets/haircut.jpg'
import HairCut2 from '../../assets/haircut2.jpg'
import HairCut3 from '../../assets/haircut3.jpg'
import HairCut4 from '../../assets/haircut4.jpg'
import HairCut5 from '../../assets/haircut5.jpg'
import HairCut6 from '../../assets/haircut6.jpg'
import HairCut7 from '../../assets/haircut7.jpg'
import HairCut8 from '../../assets/haircut8.jpg'

function NearBarber() {
  return (
    <div className='mx-auto py-16'>
      <div className='px-8'>
        <p className='uppercase text-3xl text-indigo-500 text-center pb-16 lg:text-5xl'>
          The Best shop near by you
        </p>

        <div className='flex flex-col items-center lg:flex-row justify-center gap-8'>
          <div className='bg-gray-800/60 relative'>
            <img
              className='w-98 h-80 mix-blend-overlay'
              src={HairCut4}
              alt=''
            />
            <div className='absolute bottom-5'>
              <div className='flex gap-4 pl-3'>
                <img
                  className='w-10 h-10 border-4 rounded-full border-gray-50 self-center'
                  src={HairCut3}
                  alt=''
                />
                <div className='text-white text-sm lg:text-base'>
                  <p>eric nelson</p>
                  <h3>52 bruce street, Leicester, LE3 0AG</h3>
                </div>
                <div className='flex-1 justify-self-end self-center lg:translate-x-10'>
                  <p className=' text-white text-center align-bottom text-sm lg:text-base'>
                    2 Miles
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className='bg-gray-800/60 relative'>
            <img
              className='w-98 h-80 mix-blend-overlay'
              src={HairCut5}
              alt=''
            />
            <div className='absolute bottom-5'>
              <div className='flex gap-4 pl-3'>
                <img
                  className='w-10 h-10 border-4 rounded-full border-gray-50 self-center '
                  src={HairCut6}
                  alt=''
                />
                <div className='text-white text-sm lg:text-base'>
                  <p>eric nelson</p>
                  <h3>52 bruce street, Leicester, LE3 0AG</h3>
                </div>
                <div className='flex-1 justify-self-end self-center lg:translate-x-10'>
                  <p className=' text-white text-center align-bottom text-sm lg:text-base'>
                    2 Miles
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NearBarber
