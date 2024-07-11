import React, { useState } from "react";

export default function Units(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit() {
    return props.celsius * 1.8 + 32;
  }

  if (unit === "celsius") {
    return (
      <div className="Units">
        <div className="current-temperature-value">
          {Math.round(props.celsius)}
        </div>
        <div className="current-temperature-unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit} style={{ cursor: "pointer" }}>
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
          <a href="/" onClick={showCelsius} style={{ cursor: "pointer" }}>
            {" "}
            °C
          </a>{" "}
          | °F
        </div>
      </div>
    );
  }
}
