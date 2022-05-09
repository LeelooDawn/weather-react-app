import React from "react";
import "./Forecast.css";

export default function Forecast() {
  let CurrentForecast = {
    temperature: 75,
    currentDay: "Sunday",
  };
  return (
    <div className="col forecast">
      <p>Here is your 5 day forecast:</p>

      <div className="col weather-forecast">
        <span className="emojiIcon" role="img" aria-label="sunemoji">
          ☀️
        </span>
        <div className="forecast-temp">{CurrentForecast.temperature}</div>
        <div className="forecast-day">{CurrentForecast.currentDay}</div>
      </div>
    </div>
  );
}
