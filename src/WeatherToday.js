import React from "react";

export default function WeatherToday() {
  let weatherData = {
    city: "Berlin",
    temperature: "20",
    humidity: "20%",
    wind: "5 km/h",
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col">
          <div className="clearfix">
            <h1>{weatherData.city}</h1>

            <h2>
              <span>{weatherData.temperature}</span>
              <span className="float-left">
                <a href="/"> °C</a> |<a href="/">°F</a>
              </span>
            </h2>

            <h3>Scattered Clouds</h3>
            <ul className="weather-condition">
              <li>
                Humidity:
                <span className="percentage"> {weatherData.humidity}</span>
              </li>

              <li>
                Wind: <span></span>
                <span className="percentage">{weatherData.wind}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="col">
          <img
            src="https://openweathermap.org/img/wn/10d@2x.png"
            alt="clear"
            className="float-left"
            width="200"
          />
        </div>
      </div>
    </div>
  );
}
