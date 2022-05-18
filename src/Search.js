import React, { useState } from "react";
import axios from "axios";
import CurrentTemperature from "./CurrentTemperature";

import "./Search.css";
import DailyForecast from "./DailyForecast";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
      date: new Date(response.data.dt * 1000),
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    searching();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function searching() {
    const apiKey = "ff39e85e3d2df1fdfa77a8da0f6b888f";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Search">
        <CurrentTemperature data={weatherData} />
        <br />
        <DailyForecast coordinates={weatherData.coordinates} />
        <br />

        <form className="d-flex" onSubmit={handleSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Enter Your City Here"
            aria-label="Search"
            autoFocus="on"
            onChange={handleCityChange}
          />
          <input className="btn" value="Search" type="submit" />
        </form>
        <div>
          <p className="text-center"> Have a great day! </p>
        </div>
      </div>
    );
  } else {
    searching();
    return "Loading...";
  }
}
