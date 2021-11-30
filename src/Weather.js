import React from "react";
import SearchEngine from "./SearchEngine";

import "./Weather.css";

export default function Weather() {
  return (
    <div className="weather">
      <SearchEngine />

      <div className="row">
        <div className="col-sm-10">
          <h1>Melbourne</h1>
        </div>
        <div className="col-sm-2">
          <h5>Friday</h5>
          <h6>10:00 am </h6>
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
            <li className="weatherTemp"> 25°</li>
            <li className="weatherDescription">Sunny</li>
          </ul>
        </div>
        <div className="col-sm-2 forecast">
          <h5> Saturday </h5>
          <img
            src="https://icons-for-free.com/iconfiles/png/512/sun+sunny+weather+icon-1320196635525068067.png"
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
}
