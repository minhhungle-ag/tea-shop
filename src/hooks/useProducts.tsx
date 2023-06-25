import { productApi } from 'api/productApi'
import { FilterParams } from 'models/Common'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export function useProducts(params?: FilterParams) {
  const queryKey = ['/products', params]
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery(queryKey, () =>
    productApi.getAll(params)
  )

  const addProduct = useMutation(productApi.add, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  const editProduct = useMutation(productApi.edit, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  const remove = useMutation(productApi.remove, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    productList: data?.data,
    pagination: data?.pagination,

    isLoading,
    error,
    addProduct,
    editProduct,
    remove,
  }
}

export function useProduct(id: string) {
  const queryKey = ['/product', id]

  const { data, isLoading, error } = useQuery(queryKey, () =>
    productApi.getById(id)
  )

  return { data, isLoading, error }
}
