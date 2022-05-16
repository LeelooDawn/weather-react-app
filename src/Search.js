import React, { useState } from "react";
import axios from "axios";
import CurrentTemperature from "./CurrentTemperature";
import "./Search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      description: response.data.weather[0].description,
      city: response.data.name,
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
      <div>
        <CurrentTemperature data={weatherData} />
        <div className="Search container-fluid">
          <form className="d-flex" id="weather-search" onSubmit={handleSubmit}>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Enter Your City Here or-"
              aria-label="Search"
              onChange={handleCityChange}
            />
            <button className="btn btn-outline-*" type="submit">
              Search
            </button>
          </form>
          <button className="currentButton" id="currentLocation">
            Use My Current Location
          </button>
          <div className="date-time" id="date-time">
            <p>This is the current time</p>
          </div>
        </div>
      </div>
    );
  } else {
    searching();
    return "Loading...";
  }
}
