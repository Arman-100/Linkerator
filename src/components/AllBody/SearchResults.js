import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleEntry from "./SingleEntry";
import "./SearchResults.css";

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

async function getMyLinks() {
  const myLinks = await axios.get("/api/user/:userId/sites");
  console.log("MyLinks are ", myLinks.data);
  return myLinks.data;
}

function SearchResults() {
  const [myLinks, setMyLinks] = useState([]);
  useEffect(() => {
    getMyLinks().then((results) => {
      setMyLinks(results);
    });
  }, []);
  return (
    <div className="resultArea">
      <h1>Results</h1>
      <dl className="linkMap">{myLinks.map(createResult)}</dl>
    </div>
  );
}

export default SearchResults;
