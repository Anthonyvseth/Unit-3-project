const axios = require( "axios")
const API_KEY = '&appid=17d8f8b0577bc4046466859bae5da432'

const ApiClient = axios.create({
    baseURL: `http://api.openweathermap.org/data/2.5`
});

const getCurrentWeather = async (zipCode) => {
    console.log('zipCode: ', zipCode)
    const weatherURL = `/weather?zip=${zipCode},us&appid=17d8f8b0577bc4046466859bae5da432`
    try {
        const res = await ApiClient.get(weatherURL)
        console.log('Service: ', res.data)
        return res.data
    } catch (error) {
        throw error
    }
}

module.exports = {
    getCurrentWeather
}