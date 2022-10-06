import axios from 'axios'
import {
  CLIENT_ORDER_FAIL,
  CLIENT_ORDER_REQUEST,
  CLIENT_ORDER_SUCCESS,
} from '../constants/clientConstants'

export const clientBooking =
  (id, name, email, phone, currentAddress, age) =>
  async (dispatch, getState) => {
    try {
      dispatch({
        CLIENT_ORDER_REQUEST,
      })

      const {
        userLogin: { userInfo },
      } = getState()

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      }

      console.log(id, name, email, phone, currentAddress, age)
      const { data } = await axios.post(
        `/api/clients/`,
        { id, name, email, phone, currentAddress, age },
        config
      )

      dispatch({
        type: CLIENT_ORDER_SUCCESS,
        payload: data,
      })
    } catch (error) {
      dispatch({
        type: CLIENT_ORDER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      })
    }
  }
