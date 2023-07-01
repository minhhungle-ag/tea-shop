import { SubscribePayload } from './../models/Subscribe'
import axiosClient from './axiosClient'
import { FilterParams, ListResponse } from 'models/Common'

const url = '/subscribe'

export const subscribeApi = {
  getAll(params?: FilterParams): Promise<ListResponse<SubscribePayload>> {
    return axiosClient.get(`${url}`, { params })
  },

  add(payload: SubscribePayload): Promise<any> {
    return axiosClient.post(`${url}`, payload)
  },

  remove(id: string): Promise<any> {
    return axiosClient.delete(`${url}/${id}`)
  },
}
