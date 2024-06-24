import React, { useState } from "react";
import axios from "axios";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function getForecast(response) {
    setForecast(response.data.daily);
    setLoaded(true);
    console.log(response);
  }

  if (loaded) {
    console.log(forecast);
    return (
      <div>
        <div>{forecast[0].dt}</div>
        <div>{forecast[0].temp.max}</div>
        <div>{forecast[0].temp.min}</div>
      </div>
    );
  } else {
    let latitude = props.coordinates.lat;
    let longitude = props.coordinates.lon;
    let apiKey = `195c2c787bc01a377e2ef01266be08ce`;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude={part}&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(getForecast);
  }
}
