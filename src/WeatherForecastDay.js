import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }
  function day() {
    let date = new Date(props.data.dt * 1000);
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    let day = date.getDay();
    return days[day];
  }
  return (
    <div className="WeatherForecastDay">
      <div className="day"> {day()}</div>
      <div className="forecast-icon">
        <WeatherIcon
          code={props.data.weather[0].icon}
          alt={props.data.weather[0].desciption}
        />
      </div>
      <span className="max-temp">{maxTemperature()}</span>

      <span className="min-temp">{minTemperature()}</span>
    </div>
  );
}
