/** @format */

import { AxiosPromise } from 'axios'
import request from '../utils/request'

export function getFund(): AxiosPromise {
  return request({
    url: '/fund/getFund',
    method: 'get',
    data: {
      id: 1,
    },
  })
}
