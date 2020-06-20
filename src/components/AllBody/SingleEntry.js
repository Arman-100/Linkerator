import React from "react";
import "./SearchResults.css";

function SingleEntry(props) {
  return (
    <div className="link">
      <a href={props.url}>
        <img src={props.logo} alt="" />
      </a>
      <a href={props.url}>
        <h2>{props.name}</h2>
      </a>
      <a href={props.url}>{props.url}</a>
    </div>
  );
}

export default SingleEntry;
