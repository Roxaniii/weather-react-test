import React from "react";

export default function ForecastSun() {
  return (
    <div className="col-2">
      <div className="weather-forecast-date">Sun</div>
      <img
        src="https://openweathermap.org/img/wn/10d@2x.png"
        alt="weather icon"
        width="55"
      />
      <div className="weather-forecast-temperature">
        <span className="weather-forecast-temp-max">20° </span>|
        <span className="weather-forecast-temp-min">15°</span>
      </div>
    </div>
  );
}
