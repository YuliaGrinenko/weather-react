import React from "react";

export default function FormattedDate(props) {
  let hours = props.date.getHours();
  if (hours <= 0) {
    hours = `0${hours}`;
  }
  let minutes = props.date.getMinutes();
  if (minutes <= 0) {
    minutes = `0${minutes}`;
  }
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  return (
    <div>
      {day}, {hours}:{minutes}
    </div>
  );
}
