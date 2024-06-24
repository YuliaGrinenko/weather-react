import React from "react";

export default function WeatherForecastDay(props) {
  return (
    <div>
      <div>{props.data.dt * 1000}</div>
      <div>{props.data.temp.max}</div>
      <div>{props.data.temp.min}</div>
    </div>
  );
}
