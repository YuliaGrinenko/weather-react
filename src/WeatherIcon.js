import React from "react";
import clearDayIcon from "./images/01d.svg";
import clearNightIcon from "./images/clear-night.svg";
import cloudyDayIcon from "./images/cloudy.svg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearDayIcon,
    "01n": clearNightIcon,
    "03d": cloudyDayIcon,
  };

  return <img src={codeMapping[props.code]} alt={props.alt} />;
}
