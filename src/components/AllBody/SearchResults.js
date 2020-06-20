import React from "react";
import Mylinks from "../TestData";
import SingleEntry from "./SingleEntry";
import "./SearchResults.css";

console.log(Mylinks);

function createResult(linkData) {
  return (
    <SingleEntry
      key={linkData.id}
      logo={linkData.logo}
      name={linkData.name}
      url={linkData.url}
    />
  );
}

function SearchResults() {
  return (
    <div className="resultArea">
      <h1>Results</h1>
      <dl className="linkMap">{Mylinks.map(createResult)}</dl>
    </div>
  );
}

export default SearchResults;
