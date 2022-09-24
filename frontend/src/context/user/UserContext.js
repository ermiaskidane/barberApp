import axios from 'axios'
import { createContext, useReducer } from 'react'
import UserReducer from './UserReducer'

const UserContext = createContext()

export const UserProvider = ({ children }) => {
  const initialState = {
    user: {},
    loading: false,
  }

  const [state, dispatch] = useReducer(UserReducer, initialState)

  // Login User
  const LoginUser = async (email, password) => {
    setLoading()
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    console.log(email, password)
    const { data } = await axios.post(
      '/api/users/login',
      { email, password },
      config
    )

    dispatch({
      type: 'GET_USER',
      payload: data,
    })
  }

  // Register User
  const RegisterUser = async (name, email, password) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    const { data } = await axios.post(
      '/api/users',
      { name, email, password },
      config
    )

    dispatch({
      type: 'REGISTER_USER',
      payload: data,
    })
  }

  // Log out user
  const Logout = async () => {
    dispatch({ type: 'USER_LOGOUT' })
  }

  // Set Loading
  const setLoading = () => dispatch({ type: 'SET_LOADING' })

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        LoginUser,
        RegisterUser,
        Logout,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
