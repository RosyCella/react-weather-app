import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";

import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  function showForecast(response) {
    console.log(response.data);
  }
  let lon = props.coordinates.lon;
  let lat = props.coordinates.lat;
  let apiKey = "456a5de287faeb02ba871a9c7698e2c6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${apiKey}&unit=metrics`;

  axios.get(apiUrl).then(showForecast);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col forecast-day">Wed</div>
        <div className="weatherIconForecast">
          <WeatherIcon size={36} code="10d" />{" "}
        </div>
        <div className="forecast-temp">
          <span className="forecast-minTemp">10°</span>
          <span className="forecast-maxTemp">19°</span>
        </div>
      </div>
    </div>
  );
}
