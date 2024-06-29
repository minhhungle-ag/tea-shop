import axiosClient from './axiosClient'
import { FilterParams, ListResponse } from 'models/Common'
import { ContactPayload } from 'models/Contact'
const url = '/contact'

export const contactApi = {
  getAll(params?: FilterParams): Promise<ListResponse<ContactPayload>> {
    return axiosClient.get(`${url}`, { params })
  },

  getById(id: string): Promise<ContactPayload> {
    return axiosClient.get(`${url}/${id}`)
  },

  add(payload: ContactPayload): Promise<any> {
    return axiosClient.post(`${url}`, payload)
  },

  edit(payload: ContactPayload): Promise<any> {
    const { id, ...body } = payload
    return axiosClient.put(`${url}/${id}`, body)
  },

  remove(id: string): Promise<any> {
    return axiosClient.delete(`${url}/${id}`)
  },
}
