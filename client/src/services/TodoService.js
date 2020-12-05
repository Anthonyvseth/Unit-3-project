import ApiClient from './ApiClient'

export const __GetTodos = async (account_id) => {
  try {
    const res = await ApiClient.get(`/accounts/${account_id}/todos`)
    return res.data.todos
  } catch (error) {
    throw error
  }
}

export const __CreateTodo = async (formData) => {
  const account_id = localStorage.getItem('accountId')
  try {
    const res = await ApiClient.post(`/accounts/${account_id}`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __UpdateTodo = async (id, formData) => {
  try {
    const res = await ApiClient.put(`/tasks/${id}`, formData)
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