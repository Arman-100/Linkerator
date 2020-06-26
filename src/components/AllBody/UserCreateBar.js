import React from "react";
import "./UserCreateBars.css";

function UserCreateBars() {
  return (
    <div className="userCreateArea">
      <div className="createTitle">
        <h2>Create Your Own</h2>
      </div>
      <div className="userCreateBars">
        <input
          type="text"
          placeholder="Whats the name?"
          size="30"
          className="name"
        ></input>
        <input
          type="url"
          placeholder="Whats the link?"
          size="30"
          className="userLink"
        ></input>
        <textarea
          name="tags"
          placeholder="Put as many tags as you want, separate by a space."
          rows="2"
          cols="30"
          className="tags"
        ></textarea>
        <button type="submit">Create</button>
      </div>
    </div>
  );
}

function grabInfo() {}

export default UserCreateBars;
