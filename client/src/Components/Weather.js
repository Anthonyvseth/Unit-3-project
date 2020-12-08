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
                <h2>{weatherData.main.temp}</h2>
            </div>
        )

    } else{
        return null
    }
}
