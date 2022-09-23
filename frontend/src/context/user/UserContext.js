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

  return (
    <UserContext.Provider
      value={{
        user: state.user,
        LoginUser,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}

export default UserContext
