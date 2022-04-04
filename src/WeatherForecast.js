import React from "react";
import ForecastThu from "./ForecastThu.js";
import ForecastFri from "./ForecastFri.js";
import ForecastSat from "./ForecastSat.js";
import ForecastSun from "./ForecastSun.js";
import ForecastMon from "./ForecastMon.js";
import ForecastTue from "./ForecastTue.js";

export default function WeatherForecast() {
  return (
    <div className="weather-forecast">
      <div className="row">
        <ForecastThu />
        <ForecastFri />
        <ForecastSat />
        <ForecastSun />
        <ForecastMon />
        <ForecastTue />
      </div>
    </div>
  );
}
