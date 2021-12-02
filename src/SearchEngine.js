import React from "react";
import axios from "axios";

import "./SearchEngine.css";

export default function SearchEngine() {
  function showDetails(response) {
    console.log(response.data);
  }
  let apiKey = "456a5de287faeb02ba871a9c7698e2c6";
  let city = "london";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showDetails);
  return (
    <div className="SearchEngine">
      <form>
        <input
          type="search"
          placeholder="Enter a city"
          className="enterCity"
          autoFocus="on"
        />
        <input type="submit" value="Search" className="searchButton" />
      </form>
    </div>
  );
}
