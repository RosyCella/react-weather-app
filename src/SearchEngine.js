import React from "react";

import "./SearchEngine.css";

export default function SearchEngine() {
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
