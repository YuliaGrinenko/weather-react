import React, { useState } from "react";

export default function Units(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return props.celsius * 1.8 + 32;
  }

  function handleUnitClick(event) {
    event.preventDefault();
    if (
      event.type === "click" ||
      (event.type === "touchend" && event.cancelable)
    ) {
      if (unit === "celsius") {
        showFahrenheit(event);
      } else {
        showCelsius(event);
      }
    }
  }
  if (unit === "celsius") {
    return (
      <div className="Units">
        <div className="current-temperature-value">
          {Math.round(props.celsius)}
        </div>
        <div className="current-temperature-unit">
          °C |{" "}
          <a
            href="/"
            onClick={showFahrenheit}
            onTouchEnd={handleUnitClick}
            style={{ cursor: "pointer" }}
          >
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
          <a
            href="/"
            onClick={showCelsius}
            onTouchEnd={handleUnitClick}
            style={{ cursor: "pointer" }}
          >
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}
