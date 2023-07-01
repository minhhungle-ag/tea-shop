import { subscribeApi } from 'api/subscribeApi'
import { FilterParams } from 'models/Common'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export function useSubscribe(params?: FilterParams) {
  const queryKey = ['/subscribes', params]
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery(queryKey, () =>
    subscribeApi.getAll(params)
  )

  const addSubscribe = useMutation(subscribeApi.add, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  const removeSubscribe = useMutation(subscribeApi.remove, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    subscribeList: data?.data,
    pagination: data?.pagination,

    isLoading,
    error,
    addSubscribe,
    removeSubscribe,
  }
}
