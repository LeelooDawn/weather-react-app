import React from "react";
import WeatherIcon from "./WeatherIcon";
import UnitConversion from "./UnitConversion";
import "./CurrentTemperature.css";

export default function CurrentTemperature(props) {
  return (
    <div className="Current">
      <div className="row">
        <div className="col-md-5">
          <h1 className="your-city">{props.data.city}</h1>
        </div>
        <div className="col-md-3">
          <WeatherIcon code={props.data.icon} size={64} />
        </div>

        <div className="col-md-4">
          <UnitConversion imperial={props.data.temperature} />
        </div>

        <div className="row">
          <div className="col-md-4">
            <p>Have a Great Day!</p>
          </div>
          <div className="col-md-4 offset-md-4">
            <ul className="descriptors">
              <li>
                <small>
                  Humidity: <span>{props.data.humidity}</span>%
                </small>
              </li>
              <li>
                <small>
                  Wind: <span>{Math.round(props.data.wind)}</span> mph
                </small>
              </li>
              <li>
                <small>{props.data.description}</small>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
