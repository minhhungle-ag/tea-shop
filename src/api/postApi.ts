import { PostPayload } from 'models/Post'
import axiosClient from './axiosClient'
import { FilterParams, ListResponse } from 'models/Common'
const url = '/posts'

export const postApi = {
  getAll(params?: FilterParams): Promise<ListResponse<PostPayload>> {
    return axiosClient.get(`${url}`, { params })
  },

  getById(id: string): Promise<PostPayload> {
    return axiosClient.get(`${url}/${id}`)
  },

  add(payload: PostPayload): Promise<any> {
    return axiosClient.post(`${url}`, payload)
  },

  edit(payload: PostPayload): Promise<any> {
    const { id, ...body } = payload
    return axiosClient.put(`${url}/${id}`, body)
  },

  remove(id: string): Promise<any> {
    return axiosClient.delete(`${url}/${id}`)
  },
}
