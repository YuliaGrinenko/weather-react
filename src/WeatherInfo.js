import React from "react";
import FormattedDate from "./FormattedDate";
import Units from "./Units";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  console.log(props.data.desciption);

  return (
    <div>
      <div className="current-weather row">
        <div className="temperature-container col-md-6 d-flex justify-content-start">
          <Units celsius={props.data.temperature} />
          <div className="current-temperature-icon">
            <img src={props.data.icon} alt={props.data.desciption} />
          </div>
          <WeatherIcon code={props.data.iconCode} alt={props.data.desciption} />
        </div>
        <div className="city-details col-md-6">
          <h1 className="current-city">{props.data.city}</h1>
          <FormattedDate date={props.data.date} />{" "}
          <div className="description">{props.data.description}</div>
          <div>
            humidity:{" "}
            <strong className="weather-conditions">
              {props.data.humidity}%
            </strong>
            , wind:{" "}
            <strong className="weather-conditions">
              {props.data.wind} km/h
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
