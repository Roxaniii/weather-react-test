import "./App.css";
import Date from "./Date.js";
import Footer from "./Footer.js";
import Form from "./Form.js";
import Quote from "./Quote.js";
import WeatherForecast from "./WeatherForecast.js";
import WeatherToday from "./WeatherToday.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app-wrapper">
          <div className="weather-app">
            <Form />
            <Date />
            <WeatherToday />

            <Quote />

            <hr />
            <WeatherForecast />
          </div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
