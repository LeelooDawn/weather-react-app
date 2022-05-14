import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature() {
  let weatherData = {
    humidity: 20,
    wind: 4,
    description: "clear",
    currentWeather: 75,
  };

  return (
    <div className="Current">
      <ul>
        <li className="current-temp text-center">
          <span className="emojiIcon" role="img" aria-label="sunemoji">
            ☀️
          </span>
          <strong>{weatherData.currentWeather}</strong>
          <span className="units">°F</span>
        </li>
        <li className="text-center descriptors">
          <small>
            Humidity: <span id="humidity">{weatherData.humidity}</span>%
          </small>
        </li>
        <li className="text-center descriptors">
          <small>
            Wind: <span id="windSpeed">{weatherData.wind}</span> mph
          </small>
        </li>
        <li className="text-center descriptors" id="description">
          <small>{weatherData.description}</small>
        </li>
      </ul>
    </div>
  );
}
