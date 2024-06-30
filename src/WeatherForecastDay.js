import React from "react";

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
      <span className="max-temp">{maxTemperature()}</span>

      <span className="min-temp">{minTemperature()}</span>
    </div>
  );
}
