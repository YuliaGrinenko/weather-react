import React from "react";
import clearDayIcon from "./images/clear-day.svg";
import clearNightIcon from "./images/clear-night.svg";

export default function WeatherIcon({ code, alt }) {
  const codeMapping = {
    "01d": clearDayIcon,
    "01n": clearNightIcon,
  };
  console.log(code);
  console.log(alt);
  return (
    <div>
      <img src={codeMapping[code]} alt={alt} />
    </div>
  );
}
