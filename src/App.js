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
      <footer className="text-center">
        This project was coded by Leslie Nesbit and is {""}
        <a
          href="https://github.com/LeelooDawn/weather-react-app"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced code on Github
        </a>
      </footer>
    </div>
  );
}

export default App;
