import ApiClient from './ApiClient'

export const __GetWeather = async () => {
  console.log("HIT __GetWeather")
  const accountId = localStorage.getItem('account_id')
  try {
    const res = await ApiClient.get(`/accounts/${accountId}/weather`)
    console.log('Weather Service res.data: ', res.data)
    return res.data
  } catch (error) {
    throw error
  }
  
}