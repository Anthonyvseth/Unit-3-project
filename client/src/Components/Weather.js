import React, {useState, useEffect} from 'react'
import { __GetWeather } from '../services/WeatherService'


export default () => {
    
    let [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        console.log('HIT Weather UE')
        if(weatherData === null){
            console.log("HIT Weather UE getting Weather")
            getWeather()
        }
    })

    const getWeather = async () => {
        console.log('HIT getWeather')
        try{
            const newWeatherData = await __GetWeather()
            setWeatherData(newWeatherData)
            
        }catch(error){
            console.log(error)
        }
    }
    if (weatherData !== null) {
        return (
            <div>
                {console.log('Weather: ', weatherData.main.temp)}
                <h2>Current weather in {weatherData.name}:</h2>
                <h2>{weatherData.main.temp}°F</h2>
                <h2>{weatherData.weather[0].description}</h2>
                <img src={`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x`+`.png`} alt='weather icon'/>               
            </div>
        )

    } else{
        return null
    }
}
