import ApiClient from './ApiClient'

export const __CreateWeblink = async (formData) => {
  const accountId = localStorage.getItem('account_id')
  try {
    console.log('__CreateWeblink formData',formData)
    const res = await ApiClient.post(`/accounts/${accountId}/weblinks`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __UpdateWeblink = async (id, formData) => {
  try {
    const res = await ApiClient.put(`/weblinks/${id}`, formData)
    return res.data
  } catch (error) {
    throw error
  }
}

export const __DeleteWeblink = async (id) => {
  try {
    const res = await ApiClient.delete(`/weblinks/${id}`)
    return res.data
  } catch (error) {
    throw error
  }
}