import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./DailyForecast.css";

export default function DailyForecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "ff39e85e3d2df1fdfa77a8da0f6b888f";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(handleResponse);

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
