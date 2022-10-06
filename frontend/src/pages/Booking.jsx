import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { clientBooking } from '../store/actions/clientActions'

function Booking() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [style, setStyle] = useState('')
  const [country, setCountry] = useState('')
  const [state, setState] = useState('')
  const [city, setCity] = useState('')
  const [age, setAge] = useState('')

  const dispatch = useDispatch()

  const { userInfo, loading, error } = useSelector(
    (state) => state.clientBooking
  )

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(
      clientBooking(name, email, phone, { style, country, state, city }, age)
    )

    setEmail('')

    console.log(name, email, phone, age)
  }
  return (
    <div className='py-16 bg-gray-600'>
      <form
        onSubmit={submitHandler}
        className='grid  justify-items-center gap-y-2 w-full mx-auto '
      >
        <input
          type='text'
          placeholder='name'
          className='input input-bordered w-5/6  text-black sm:w-1/2 lg:w-96  lg:mr-2  '
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          placeholder='email'
          className='input input-bordered w-5/6  text-black sm:w-1/2 lg:w-96 lg:mr-2  '
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='text'
          placeholder='phone'
          className='input input-bordered w-5/6  text-black sm:w-1/2 lg:w-96 lg:mr-2  '
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type='text'
          placeholder='select service'
          className='input input-bordered w-5/6  text-black sm:w-1/2 lg:w-96 lg:mr-2  '
          value={style}
          onChange={(e) => setStyle(e.target.value)}
        />
        <input
          type='text'
          placeholder='select country'
          className='input input-bordered w-5/6 text-black sm:w-1/2 lg:w-96 lg:mr-2 '
          value={country}
          onChange={(e) => setCountry(e.target.value)}
        />
        <input
          type='text'
          placeholder='select state'
          className='input input-bordered  w-5/6 text-black sm:w-1/2 lg:w-96  lg:mr-2 '
          value={state}
          onChange={(e) => setState(e.target.value)}
        />
        <input
          type='text'
          placeholder='select city'
          className='input input-bordered  w-5/6 text-black sm:w-1/2 lg:w-96  lg:mr-2 '
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input
          type='text'
          placeholder='age'
          className='input input-bordered w-5/6  text-black sm:w-1/2 lg:w-96  lg:mr-2  '
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <button className='bg-indigo-600 px-5 py-3 rounded-lg w-1/2 sm:w-auto '>
          Submit
        </button>
      </form>
    </div>
  )
}

export default Booking
