import React from "react";
import FormattedDate from "./FormattedDate";
import Units from "./Units";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="current-weather row">
        <div className="temperature-container col-sm-3">
          <Units
            celsius={props.data.temperature}
            unit={props.unit}
            setUnit={props.setUnit}
          />
        </div>
        <div className="current-temperature-icon col-sm-3">
          <WeatherIcon
            code={props.data.iconCode}
            alt={props.data.desciption}
            width="150px"
          />
        </div>
        <div className="city-details col-sm-6">
          <h1 className="current-city">{props.data.city}</h1>
          <FormattedDate date={props.data.date} />{" "}
          <div className="description">{props.data.description}</div>
          <div>
            humidity:{" "}
            <strong className="weather-conditions">
              {props.data.humidity}%
            </strong>
          </div>
          <div>
            {" "}
            wind:{" "}
            <strong className="weather-conditions">
              {props.data.wind} km/h
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
}
