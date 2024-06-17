import React, { useState } from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function getResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
    });
  }

  function Search() {
    let apiKey = `195c2c787bc01a377e2ef01266be08ce`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(getResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function changeCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form className="search-form" onSubmit={handleSubmit}>
            <input
              type="search"
              placeholder="Enter a city..."
              required
              autoFocus
              className="search-input"
              onChange={changeCity}
            />
            <input type="submit" className="search-button" value="Search" />
          </form>
          <WeatherInfo data={weatherData} />
        </div>
      </div>
    );
  } else {
    Search();
    return "Loading...";
  }
}
