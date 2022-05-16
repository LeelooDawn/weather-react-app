import React from "react";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  return (
    <div className="Current">
      <div className="row">
        <div className="col-6 city-center">
          <h1 className="your-city">{props.data.city}</h1>
        </div>
        <div className="col-6">
          <ul>
            <li className="current-temp text-center">
              <span className="emojiIcon" role="img" aria-label="sunemoji">
                ☀️
              </span>
              <strong>{Math.round(props.data.temperature)}</strong>
              <span className="units">°F</span>
            </li>
            <li className="text-center descriptors">
              <small>
                Humidity: <span>{props.data.humidity}</span>%
              </small>
            </li>
            <li className="text-center descriptors">
              <small>
                Wind: <span>{Math.round(props.data.wind)}</span> mph
              </small>
            </li>
            <li className="text-center descriptors">
              <small>{props.data.description}</small>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
