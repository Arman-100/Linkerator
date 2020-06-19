import React from "react";
import "./SearchBars.css";

function SearchBars() {
  return (
    <div className="searchBars">
      <input
        type="text"
        placeholder="Search for any site, we will find it!"
        size="30"
        className="inputBar"
      ></input>
      <button type="submit">
        <span role="img">search</span>
        {
          //change the span to an emoji
        }
      </button>
    </div>
  );
}
export default SearchBars;
