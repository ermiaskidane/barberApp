import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    const userData = {
      name,
      email,
      password,
      confirmPassword,
    }

    console.log(userData)
  }
  return (
    <div className='py-16 bg-gray-600'>
      <h1 className='uppercase text-2xl text-indigo-500 font-normal text-center py-4 lg:text-3xl'>
        Sing Up
      </h1>
      <form
        onSubmit={submitHandler}
        className='flex flex-col items-center gap-4'
      >
        <input
          type='text'
          placeholder='Enter name'
          className='input input-bordered w-3/4 md:w-full md:max-w-md '
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='email'
          placeholder='Enter email'
          className='input input-bordered w-3/4 md:w-full md:max-w-md'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type='password'
          placeholder='Enter Password'
          className='input input-bordered w-3/4 md:w-full md:max-w-md'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type='password'
          placeholder='comfirmPassword'
          className='input input-bordered w-3/4 md:w-full md:max-w-md'
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button type='submit' className='btn btn-primary'>
          Register
        </button>
      </form>

      <div className='flex justify-center'>
        <p className='text-black pt-4'>
          {' '}
          Have an Account?
          <Link to='/login' className='pl-1 hover:underline'>
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default SignUp
