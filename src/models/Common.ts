import { ReactNode } from 'react'

export interface Menu {
  label: string
  path: string
  icon?: ReactNode
}

export interface SelectOption {
  label: string
  value: string
}

export interface Pagination {
  page?: number
  limit?: number
  total: number
  totalPage: number
}

export interface ListResponse<T> {
  data: T[]
  pagination: Pagination
}

export interface FilterParams {
  page: number
  limit: number

  type?: string
  title?: string
  author?: string
}
