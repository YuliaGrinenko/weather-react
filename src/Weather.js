import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  const [error, setError] = useState(null);
  const [unit, setUnit] = useState("celsius");

  function getResponse(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      coordinates: response.data.coord,
      icon: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      iconCode: response.data.weather[0].icon,
    });
  }

  function Search() {
    let apiKey = `195c2c787bc01a377e2ef01266be08ce`;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios
      .get(apiUrl)
      .then(getResponse)
      .catch((error) => {
        setError();
      });
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
    setError(null);
  }

  function changeCity(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div className="Weather">
        <div className="container">
          <form className="search" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9">
                <input
                  type="text"
                  placeholder="Enter a city"
                  autoFocus="on"
                  onChange={changeCity}
                />
              </div>
              <div className="col-3">
                <button className="button">
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </div>
            </div>
          </form>
          <WeatherInfo data={weatherData} unit={unit} setUnit={setUnit} />
          <WeatherForecast
            coordinates={weatherData.coordinates}
            unit={unit}
            setUnit={setUnit}
          />
        </div>
      </div>
    );
  } else if (error) {
    return <p>"{setError(true)}"</p>;
  } else {
    Search();
    return "Loading...";
  }
}
