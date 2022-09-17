import React from 'react'
import { IoCheckmarkOutline } from 'react-icons/io5'
import HairCut2 from '../../assets/haircut2.jpg'
import AppStore from '../../assets/appStore.png'
import PlayStore from '../../assets/playStore.png'

function MobileApp() {
  return (
    <div className='py-16 bg-gray-600'>
      <div className='flex flex-col lg:flex-row'>
        {/* start Diasy ui code */}
        <div className='mockup-phone w-4/5 h-[30rem] mobile:w-auto mobile:h-auto lg:mx-0  '>
          <div className='camera'></div>
          <div className='display'>
            <div className='artboard  phone-1'>
              <img className='w-full' src={HairCut2} alt='' />
            </div>
          </div>
        </div>
        {/* end Diasy ui code */}
        <div className='flex flex-col items-center gap-2 px-4 text-black'>
          <h3 className='uppercase text-2xl text-indigo-500 font-normal text-center pt-4 lg:text-3xl'>
            Explore Amazing Features
          </h3>
          <p className='uppercase text-lg text-indigo-500 text-center lg:text-xl'>
            Download our latest Iphone and Android App
          </p>
          <p className='lg:w-[45rem]'>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod
            eligendi at, tempore quo autem odit. Voluptatibus animi dicta
            necessitatibus. Id perspiciatis voluptates sit distinctio ullam
            minima. Natus animi fugit hic!
          </p>
          <ul className=' pb-4'>
            <li className=''>
              <IoCheckmarkOutline className='inline' /> Find A local Barber or
              BarberShop
            </li>
            <li>
              <IoCheckmarkOutline className='inline' /> Book Your Appointment
            </li>
            <li>
              <IoCheckmarkOutline className='inline' /> Online Payment
            </li>
            <li>
              <IoCheckmarkOutline className='inline' /> Filter Your Results +
              Save Your Favorites
            </li>
            <li>
              <IoCheckmarkOutline className='inline' /> Read and write Review
            </li>
          </ul>

          <div className='flex gap-2'>
            <a href='https://apps.apple.com/'>
              <img src={AppStore} alt='' />
            </a>
            <a href='https://play.google.com/'>
              <img src={PlayStore} alt='' />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobileApp
