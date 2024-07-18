import React from "react";

export default function Units(props) {
  function showFahrenheit(event) {
    event.preventDefault();
    props.setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    props.setUnit("celsius");
  }

  function convertToFahrenheit() {
    return props.celsius * 1.8 + 32;
  }

  if (props.unit === "celsius") {
    return (
      <div className="Units">
        <div className="current-temperature-value">
          {Math.round(props.celsius)}
        </div>
        <div className="current-temperature-unit">
          °C |
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="Units">
        <div className="current-temperature-value">
          {Math.round(convertToFahrenheit())}
        </div>
        <div className="current-temperature-unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>
          | °F
        </div>
      </div>
    );
  }
}
