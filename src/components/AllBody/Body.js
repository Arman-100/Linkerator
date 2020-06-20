import React from "react";
import SearchBars from "./SearchBars";
import SearchResults from "./SearchResults";

function Body() {
  return (
    <div className="body">
      <SearchBars />
      <SearchResults />
    </div>
  );
}

export default Body;
