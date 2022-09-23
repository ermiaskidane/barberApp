import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import UserContext from '../context/user/UserContext'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { user, LoginUser } = useContext(UserContext)
  const submitHandler = (e) => {
    e.preventDefault()
    const userData = {
      email,
      password,
    }

    LoginUser(email, password)

    // console.log(userData)
  }

  return (
    <div className='py-16 bg-gray-600'>
      <h1 className='uppercase text-2xl text-indigo-500 font-normal text-center py-4 lg:text-3xl'>
        Login
      </h1>
      <form
        onSubmit={submitHandler}
        className='flex flex-col items-center gap-4'
      >
        <input
          type='text'
          placeholder='Enter Email'
          className='input input-bordered w-3/4 md:w-full md:max-w-md '
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type='password'
          placeholder='Enter password'
          className='input input-bordered w-3/4 md:w-full md:max-w-md'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type='submit' className='btn btn-primary '>
          Register
        </button>
      </form>

      <div className='flex justify-center'>
        <p className='text-black pt-4'>
          {' '}
          New Customer?
          <Link to='/signup' className='pl-1 hover:underline'>
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn
