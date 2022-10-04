import React, { useState, useEffect, useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Spinner from '../components/layout/Spinner'
import UserContext from '../context/user/UserContext'
import Message from '../components/layout/Message'
import { login } from '../store/actions/userActions'
import { useDispatch, useSelector } from 'react-redux'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const { userInfo, loading, error } = useSelector((state) => state.userLogin)

  //  if already login
  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [navigate, userInfo])

  const submitHandler = (e) => {
    e.preventDefault()

    dispatch(login(email, password))

    setEmail('')
    setPassword('')

    // console.log(userData)
  }

  return (
    <>
      <div className='py-16 bg-gray-600'>
        {loading && <Spinner />}
        {error && <Message>{error}</Message>}
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
            Login
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
    </>
  )
}

export default SignIn
