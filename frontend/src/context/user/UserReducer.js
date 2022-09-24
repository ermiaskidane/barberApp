const UserReducer = (state, action) => {
  switch (action.type) {
    case 'GET_USER':
      return {
        ...state,
        user: action.payload,
        loading: false,
      }
    case 'SET_LOADING':
      return {
        ...state,
        loading: true,
      }
    case 'REGISTER_USER':
      return {
        ...state,
        user: action.payload,
      }
    case 'USER_LOGOUT': {
      return {}
    }
    default:
      return state
  }
}

export default UserReducer
