import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="container-fluid">
      <form className="d-flex" id="weather-search">
        <input
          className="form-control me-2"
          type="search"
          placeholder="Enter Your City Here or-"
          aria-label="Search"
          id="weather-input"
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
  );
}
