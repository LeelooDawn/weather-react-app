import React, { useState } from "react";
import axios from "axios";
import CurrentTemperature from "./CurrentTemperature";
import FormattedDate from "./FormattedDate";
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
      date: new Date(response.data.dt * 1000),
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
        <button className="currentButton">Use My Current Location</button>
        <div>
          <FormattedDate date={weatherData.date} />
        </div>
      </div>
    );
  } else {
    searching();
    return "Loading...";
  }
}
