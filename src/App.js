import "./App.css";

import Search from "./Search";

function App() {
  return (
    <div className="weather-app-wrapper App">
      <div className="outer-box">
        <div className="middle-box">
          <div className="inner-box">
            <div className="container">
              <Search defaultCity="Bernalillo" />
            </div>
          </div>
        </div>
      </div>
      <small>
        <a
          href="https://github.com/LeelooDawn/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          Open-Sourced Code
        </a>{" "}
        by Leslie Nesbit
      </small>
    </div>
  );
}

export default App;
