import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
  function maxTemperature() {
    console.log(props.unit);
    let temperature = Math.round(props.data.temp.max);
    if (props.unit === "fahrenheit") {
      temperature = Math.round((temperature * 9) / 5 + 32);
      return `${temperature}°`;
    }
    return `${temperature}°`;
  }
  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    if (props.unit === "fahrenheit") {
      temperature = Math.round((temperature * 9) / 5 + 32);
      return `${temperature}°`;
    }
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
      <WeatherIcon
        code={props.data.weather[0].icon}
        alt={props.data.weather[0].desciption}
        width="50px"
      />
      <div>
        <span className="max-temp">{maxTemperature()}</span>
        <span className="min-temp">{minTemperature()}</span>
      </div>
    </div>
  );
}
