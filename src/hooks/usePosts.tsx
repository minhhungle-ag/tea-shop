import { postApi } from 'api/postApi'
import { FilterParams } from 'models/Common'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export function usePosts(params?: FilterParams) {
  const queryKey = ['/posts', params]
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery(queryKey, () =>
    postApi.getAll(params)
  )

  const addPost = useMutation(postApi.add, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  const editPost = useMutation(postApi.edit, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  const removePost = useMutation(postApi.remove, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    postList: data?.data,
    pagination: data?.pagination,

    isLoading,
    error,
    addPost,
    editPost,
    removePost,
  }
}

export function usePost(id: string) {
  const queryKey = ['/post', id]

  const { data, isLoading, error } = useQuery(queryKey, () =>
    postApi.getById(id)
  )

  return { data, isLoading, error }
}
