import React, { useState } from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import axios from "axios";

import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  function showDetails(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      city: response.data.name,
      icon: `https://icons-for-free.com/iconfiles/png/512/sun+sunny+weather+icon-1320196635525068067.png`,
      description: response.data.weather[0].description,
      date: new Date(response.data.dt * 1000),
    });
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form className="SearchEngine">
          <input
            type="search"
            placeholder="Enter a city"
            className="enterCity"
            autoFocus="on"
          />
          <input type="submit" value="Search" className="searchButton" />
        </form>

        <div className="row">
          <div className="col-sm-10">
            <h1>{weatherData.city}</h1>
          </div>
          <div className="col-sm-2">
            <h5>
              <FormattedDate date={weatherData.date} />{" "}
            </h5>
            <h6>
              <FormattedTime date={weatherData.date} />
            </h6>
          </div>
        </div>
        <div className="col-sm-12">
          <img
            src="https://icons-for-free.com/iconfiles/png/512/sun+sunny+weather+icon-1320196635525068067.png"
            alt="Sunshine Icon"
            className="weatherIconHeading"
          />
        </div>

        <div className="row">
          <div className="col-sm-2">
            <ul>
              <li className="weatherDescription"> °C | °F </li>
              <li className="weatherTemp">
                {" "}
                {Math.round(weatherData.temperature)}
              </li>
              <li className="weatherDescription text-capitalize">
                {weatherData.description}
              </li>
            </ul>
          </div>
          <div className="col-sm-2 forecast">
            <h5> Saturday </h5>
            <img
              src={weatherData.icon}
              alt="Sunshine Icon"
              className="weatherIconForecast"
            />{" "}
            <br />
            <span className="dailyTemp">25° | 30° </span>
          </div>
          <div className="col-sm-2 forecast">
            <h5> Sunday</h5>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/sun+sunny+weather+icon-1320196635525068067.png"
              alt="Sunshine Icon"
              className="weatherIconForecast"
            />{" "}
            <br />
            <span className="dailyTemp">25° | 30° </span>
          </div>
          <div className="col-sm-2 forecast">
            <h5> Monday </h5>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/sun+sunny+weather+icon-1320196635525068067.png"
              alt="Sunshine Icon"
              className="weatherIconForecast"
            />{" "}
            <br />
            <span className="dailyTemp">25° | 30° </span>
          </div>
          <div className="col-sm-2 forecast">
            <h5> Tuesday </h5>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/sun+sunny+weather+icon-1320196635525068067.png"
              alt="Sunshine Icon"
              className="weatherIconForecast"
            />{" "}
            <br />
            <span className="dailyTemp">25° | 30° </span>
          </div>
          <div className="col-sm-2 forecast">
            <h5> Wednesday </h5>
            <img
              src="https://icons-for-free.com/iconfiles/png/512/sun+sunny+weather+icon-1320196635525068067.png"
              alt="Sunshine Icon"
              className="weatherIconForecast"
            />{" "}
            <br />
            <span className="dailyTemp">25° | 30° </span>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "456a5de287faeb02ba871a9c7698e2c6";

    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showDetails);
    return "Loading...";
  }
}
