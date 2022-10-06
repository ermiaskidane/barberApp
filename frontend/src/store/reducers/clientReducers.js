import {
  CLIENT_ORDER_FAIL,
  CLIENT_ORDER_REQUEST,
  CLIENT_ORDER_SUCCESS,
} from '../constants/clientConstants'

export const clientBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case CLIENT_ORDER_REQUEST:
      return { loading: true }
    case CLIENT_ORDER_SUCCESS:
      return { loading: false, userInfo: action.payload }
    case CLIENT_ORDER_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
