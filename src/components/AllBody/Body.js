import React from "react";
import SearchBars from "./SearchBars";
import SearchResults from "./SearchResults";
import UserCreateBars from "./UserCreateBar";

function Body() {
  return (
    <div className="body">
      <UserCreateBars />
      <SearchBars />

      <SearchResults />
    </div>
  );
}

export default Body;
