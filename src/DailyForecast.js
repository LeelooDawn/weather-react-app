import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./DailyForecast.css";

export default function DailyForecast() {
  return (
    <div className="DailyForecast">
      <div className="row">
        <div className="col">
          <div className="DailyForecast-day">Friday</div>
          <WeatherIcon code="02d" size={50} />
          <div className="DailyForecast-temp">
            <span className="DailyForecast-max">74°</span>
            <span className="DailyForecast-min">55°</span>
          </div>
        </div>
      </div>
    </div>
  );
}
