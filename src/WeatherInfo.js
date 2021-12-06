import React from "react";
import FormattedDate from "./FormattedDate";
import FormattedTime from "./FormattedTime";
import WeatherIcon from "./WeatherIcon";

import "./WeatherInfo.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li className="icon">
          <WeatherIcon code={props.data.iconUrl} />
        </li>

        <li className="text-uppercase description">
          {" "}
          {props.data.description}
        </li>
        <li className="temperature">
          {" "}
          {Math.round(props.data.temperature)}{" "}
          <span className="units"> °C | °F </span>
        </li>
      </ul>
      <div className="row">
        <div className="col-sm-6 day">
          <FormattedDate date={props.data.date} />{" "}
        </div>
        <div className="col-sm-6 day">
          <FormattedTime date={props.data.date} />
        </div>
      </div>
    </div>
  );
}
