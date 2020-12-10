import React, { useState, useEffect } from "react";
import { __GetWeather } from "../services/WeatherService";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { __UpdateZip } from "../services/AccountService";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationArrow } from '@fortawesome/free-solid-svg-icons'
import TextInput from '../components/TextInput'

export default (props) => {
  let [weatherData, setWeatherData] = useState(null);
  
  let [zipValue,setZipValue] = useState(null)
  const { setNeedsRefresh } = props
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    console.log("HIT Weather UE");
    if (weatherData === null) {
      console.log("HIT Weather UE getting Weather");
      getWeather();
    }
  });

  const getWeather = async () => {
    console.log("HIT getWeather");
    try {
      const newWeatherData = await __GetWeather();
      setWeatherData(newWeatherData);
    } catch (error) {
      console.log(error);
    }
  };

  const updateZipcode = async (e) => {
      e.preventDefault()
      try{
          const sentValues = {zipcode: zipValue }
          const updatedZip = await __UpdateZip(sentValues)
          setNeedsRefresh(true)
      }catch(error){
          throw error
      }
  }

  
  const capitalizeString = (str) => {
      str = `${weatherData.weather[0].description}`
      let arr = str.split(' ')
      arr.map((word, index, array) => {
          array[index] = array[index][0].toUpperCase() + array[index].slice(1)
          return array[index]
      })
      console.log(arr)
      return arr.join(' ')
}
    
    if (weatherData !== null) {
        return (
          <div>
            {console.log(weatherData.weather[0].description)}
            <Button variant="secondary" onClick={handleShow}>
              <img
                src={
                  `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x` +
                  `.png`
                }
                alt="weather icon"
              />
              <p>Current {weatherData.name} Weather</p>
              {/* <FontAwesomeIcon
                className="fas fa-white"
                icon={faLocationArrow}
                onClick={
                  <Modal show={show} onHide={handleClose} backdrop="static">
                    <Modal.Header closeButton>
                      <Modal.Title>
                        Update Your Location
                        <Modal.Body>
                          <form onSubmit={(e) => updateZipcode(e)}>
                            <input
                              type="text"
                              name="zipcode"
                              value={zipValue}
                              placeholder="Your Current Zipcode"
                            />
                          </form>
                        </Modal.Body>
                      </Modal.Title>
                    </Modal.Header>
                  </Modal>
                }
              /> */}
            </Button>
            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
              closeLabel={false}
            >
              <Modal.Header closeButton>
                <Modal.Title>
                  <Modal.Body>
                    <h4>
                      {capitalizeString(
                        `${weatherData.weather[0].description}`
                      )}
                    </h4>
                    <h4>Real Temp: {weatherData.main.feels_like}°F</h4>
                    <h4>Humidity: {weatherData.main.humidity}%</h4>
                    <h4>Feels Like: {weatherData.main.temp}°F</h4>
                    <Button variant='secondary' onClick={handleShow}>
                      <FontAwesomeIcon
                        className="fas fa-white"
                        icon={faLocationArrow}
                        onClick={()=>
                          <Modal
                            show={show}
                            onHide={handleClose}
                            backdrop="static"
                          >
                            <Modal.Header closeButton>
                              <Modal.Title>
                                Update Your Location
                                <Modal.Body>
                                  <form onSubmit={(e) => updateZipcode(e)}>
                                    <input
                                      type="text"
                                      name="zipcode"
                                      value={zipValue}
                                      placeholder="Your Current Zipcode"
                                    />
                                  </form>
                                </Modal.Body>
                              </Modal.Title>
                            </Modal.Header>
                          </Modal>
                        }
                      />
                    </Button>
                  </Modal.Body>
                </Modal.Title>
              </Modal.Header>
            </Modal>
          </div>
        );
  } else {
    return null;
  }
};
