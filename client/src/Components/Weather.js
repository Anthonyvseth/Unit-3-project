import React, { useState, useEffect } from "react";
import { __GetWeather } from "../services/WeatherService";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export default () => {
  let [weatherData, setWeatherData] = useState(null);

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
  if (weatherData !== null) {
    return (
      <div>
        <Button variant="secondary" onClick={handleShow}>
          <img
            src={
              `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x` +
              `.png`
            }
            alt="weather icon"
          />
          <p>{weatherData.name} Forecast</p>
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
                <h2>{weatherData.weather[0].description}</h2>
                <h2>{weatherData.main.temp}°F</h2>
              </Modal.Body>
            </Modal.Title>
          </Modal.Header>
        </Modal>
        {/* {console.log("Weather: ", weatherData.main.temp)} */}
      </div>
    );
  } else {
    return null;
  }
};
