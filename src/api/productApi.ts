import { ProductPayload } from 'models/Product'
import axiosClient from './axiosClient'
import { FilterParams, ListResponse } from 'models/Common'
const url = '/products'

export const productApi = {
  getAll(params?: FilterParams): Promise<ListResponse<ProductPayload>> {
    return axiosClient.get(`${url}`, { params })
  },

  getById(id: string): Promise<ProductPayload> {
    return axiosClient.get(`${url}/${id}`)
  },

  add(payload: ProductPayload): Promise<any> {
    return axiosClient.post(`${url}`, payload)
  },

  edit(payload: ProductPayload): Promise<any> {
    const { id, ...body } = payload
    return axiosClient.put(`${url}/${id}`, body)
  },

  remove(id: string): Promise<any> {
    return axiosClient.delete(`${url}/${id}`)
  },
}
