import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";

import { __GetWeather } from "../services/WeatherService";

export default (props) => {
  let [weatherData, setWeatherData] = useState(null);

  const { setNeedsRefresh } = props;
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

  const capitalizeString = (str) => {
    str = `${weatherData.weather[0].description}`;
    let arr = str.split(" ");
    arr.map((word, index, array) => {
      array[index] = array[index][0].toUpperCase() + array[index].slice(1);
      return array[index];
    });
    console.log(arr);
    return arr.join(" ");
  };

  if (weatherData !== null) {
    return (
      <div>
        {console.log(weatherData.weather[0].description)}

        <button className={"btn-list"} onClick={handleShow}>
          <img
            src={
              `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x` +
              `.png`
            }
            alt="weather icon"
            />
        </button>
        <div>
          {weatherData.main.feels_like}°F
        </div>
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
                <h4>Current Weather in {weatherData.name}</h4>
                <h4>
                  {capitalizeString(`${weatherData.weather[0].description}`)}
                </h4>
                <h4>Real Temp: {weatherData.main.feels_like}°F</h4>
                <h4>Humidity: {weatherData.main.humidity}%</h4>
                <h4>Feels Like: {weatherData.main.temp}°F</h4>
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
