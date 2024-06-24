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

  return (
    <div>
      <div> {props.data.dt * 1000}</div>
      <div>{maxTemperature()}</div>

      <div>{minTemperature()}</div>
    </div>
  );
}
