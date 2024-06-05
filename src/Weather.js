import React from "react";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Weather() {
  return (
    <div>
      <form className="search-form">
        <input
          type="search"
          placeholder="Enter a city..."
          required
          className="search-input"
        />
        <button type="submit" className="search-button">
          <i className="fa fa-search"></i>
        </button>
      </form>
      <div className="container">
        <div className="current-weather row">
          <div className="temperature-container col-md-6 d-flex justify-content-start">
            <div className="current-temperature-value">20</div>
            <div className="current-temperature-unit">°C</div>
            <div className="current-temperature-icon">
              <img
                src="https://openweathermap.org/img/wn/02d@2x.png"
                alt="Weather condictions"
              />
            </div>
          </div>
          <div className="city-details col-md-6">
            <h1 className="current-city">London</h1>
            <p>Wednesday, 15:53</p>

            <p className="description">few clouds</p>
            <p>
              humidity: <strong className="weather-conditions">50%</strong>,
              wind: <strong className="weather-conditions">5.5 km/h</strong>
            </p>
          </div>
        </div>
        <footer>
          <p>
            This project was coded by {}
            <a
              href="https://github.com/YuliaGrinenko"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              Yulia Hrinenko
            </a>
            {} and is {}
            <a
              href="https://github.com/YuliaGrinenko/weather-react"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              on GitHub
            </a>
            {} and {}
            <a
              href="https://weather-app-react-yulia.netlify.app"
              target="_blank"
              rel="noreferrer"
              className="link"
            >
              hosted on Netlify
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
