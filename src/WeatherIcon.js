import React from "react";
import clearDayIcon from "./images/clear-day.svg";
import clearNightIcon from "./images/clear-night.svg";
import cloudyIcon from "./images/cloudy.svg";
import overcastIcon from "./images/overcast.svg";
import overcastNightIcon from "./images/overcast-night.svg";
import partlyCloudyDayIcon from "./images/partly-cloudy-day.svg";
import partlyCloudyNightIcon from "./images/partly-cloudy-night.svg";
import showerRainIcon from "./images/shower-rain.svg";
import dayRainIcon from "./images/day-rain.svg";
import nightRainIcon from "./images/night-rain.svg";
import ThunderstormIcon from "./images/thunderstorms.svg";
import snowIcon from "./images/snow.svg";
import mistIcon from "./images/mist.svg";

export default function WeatherIcon(props) {
  const codeMapping = {
    "01d": clearDayIcon,
    "01n": clearNightIcon,
    "02d": partlyCloudyDayIcon,
    "02n": partlyCloudyNightIcon,
    "03d": cloudyIcon,
    "03n": cloudyIcon,
    "04d": overcastIcon,
    "04n": overcastNightIcon,
    "09d": showerRainIcon,
    "09n": showerRainIcon,
    "10d": dayRainIcon,
    "10n": nightRainIcon,
    "11d": ThunderstormIcon,
    "11n": ThunderstormIcon,
    "13d": snowIcon,
    "13n": snowIcon,
    "50d": mistIcon,
    "50n": mistIcon,
  };

  return <img src={codeMapping[props.code]} alt={props.alt} />;
}
