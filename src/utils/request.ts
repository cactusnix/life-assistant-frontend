/** @format */
import axios from 'axios'
import { message } from 'antd'

const instance = axios.create({
  baseURL: process.env.REACT_APP_BASE_API,
  timeout: 1000,
})

instance.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    message.error(error.message)
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    message.error(error.message)
    return Promise.reject(error)
  }
)
export default instance
