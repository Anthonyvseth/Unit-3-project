import ApiClient from './ApiClient'

export const __GetTodos = async () => {
  const accountId = localStorage.getItem('account_id')
  try {
    const res = await ApiClient.get(`/accounts/${accountId}/todos`)
    return res.data.todos
  } catch (error) {
    throw error
  }
}

export const __CreateTodo = async (formData) => {
  const accountId = localStorage.getItem('account_id')
  try {
    console.log('__CreateTodo todo formData',formData)
    const res = await ApiClient.post(`/accounts/${accountId}/todos`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __UpdateTodo = async (id, formData) => {
  try {
    const res = await ApiClient.put(`/todos/${id}`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __DeleteTodo = async (id) => {
  try {
    const res = await ApiClient.delete(`/todos/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}