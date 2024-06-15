import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import FormattedDate from "./FormattedDate";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function getResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(reponse.data.dt * 1000),
    });
    console.log(response);
  }

  function Search() {
    let apiKey = `195c2c787bc01a377e2ef01266be08ce`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
  }
  if (weatherData.ready) {
    return (
      <div>
        <form className="search-form">
          <input
            type="search"
            placeholder="Enter a city..."
            required
            autoFocus
            className="search-input"
          />
          <input type="submit" className="search-button" value="Search" />
        </form>
        <div className="container">
          <div className="current-weather row">
            <div className="temperature-container col-md-6 d-flex justify-content-start">
              <div className="current-temperature-value">
                {weatherData.temperature}
              </div>
              <div className="current-temperature-unit">°C</div>
              <div className="current-temperature-icon">
                <img
                  src="https://openweathermap.org/img/wn/02d@2x.png"
                  alt="Weather condictions"
                />
              </div>
            </div>
            <div className="city-details col-md-6">
              <h1 className="current-city">{weatherData.city}</h1>
              <p>Wednesday, 15:53</p>

              <p className="description">{weatherData.description}</p>
              <p>
                humidity:{" "}
                <strong className="weather-conditions">
                  {weatherData.humidity}%
                </strong>
                , wind:{" "}
                <strong className="weather-conditions">
                  {weatherData.wind} km/h
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
