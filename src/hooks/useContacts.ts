import { contactApi } from 'api/contactApi'
import { FilterParams } from 'models/Common'
import { useMutation, useQuery, useQueryClient } from 'react-query'

export function useContacts(params?: FilterParams) {
  const queryKey = ['/contacts', params]
  const queryClient = useQueryClient()

  const { data, isLoading, error } = useQuery(queryKey, () =>
    contactApi.getAll(params)
  )

  const addContact = useMutation(contactApi.add, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  const editContact = useMutation(contactApi.edit, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  const removeContact = useMutation(contactApi.remove, {
    onSuccess: () => queryClient.invalidateQueries(queryKey),
  })

  return {
    contactList: data?.data,
    pagination: data?.pagination,

    isLoading,
    error,
    addContact,
    editContact,
    removeContact,
  }
}

export function usePost(id: string) {
  const queryKey = ['/post', id]

  const { data, isLoading, error } = useQuery(queryKey, () =>
    contactApi.getById(id)
  )

  return { data, isLoading, error }
}
