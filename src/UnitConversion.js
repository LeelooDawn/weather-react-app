import React, { useState } from "react";

export default function UnitConversion(props) {
  const [unit, setUnit] = useState("fahrenheit");

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function celsius() {
    return ((props.imperial - 32) * 5) / 9;
  }

  if (unit === "fahrenheit") {
    return (
      <div className="UnitConversion">
        {" "}
        <strong className="temperature">{Math.round(props.imperial)}</strong>
        <span className="units">
          °F|
          <a href="/" onClick={convertToCelsius}>
            °C
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="UnitConversion">
        {" "}
        <strong className="temperature">{Math.round(celsius())}</strong>
        <span className="units">
          <a href="/" onClick={convertToFahrenheit}>
            °F
          </a>
          |°C
        </span>
      </div>
    );
  }
}
