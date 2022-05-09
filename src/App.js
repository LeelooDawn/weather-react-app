import "./App.css";
import CurrentCity from "./CurrentCity";
import CurrentTemperature from "./CurrentTemperature";
import Forecast from "./Forecast";
import Search from "./Search";

function App() {
  return (
    <div className="weather-app-wrapper App">
      <div className="outer-box">
        <div className="middle-box">
          <div className="inner-box">
            <div className="container">
              <div className="row">
                <div className="col-6 city-center">
                  <CurrentCity />
                </div>
                <div className="col-6">
                  <CurrentTemperature />
                </div>
              </div>
              <Forecast />
              <br />
              <Search />
            </div>
          </div>
        </div>
      </div>
      <small>
        <a href="#" target="_blank" rel="noreferrer">
          Open-Sourced Code
        </a>{" "}
        by Leslie Nesbit
      </small>
    </div>
  );
}

export default App;
