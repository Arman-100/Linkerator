import React, { useState } from "react";

import "./UserCreateBars.css";

function UserCreateBars() {
  const [name, setName] = useState("");
  function handleNameChange(event) {
    setName(event.target.value);
  }
  const [userLink, setUserLink] = useState("");
  function handleLinkChange(event) {
    setUserLink(event.target.value);
  }
  const [tags, setUserTags] = useState("");
  function handleTagChange(event) {
    setUserTags(event.target.value);
  }
  async function UserCreatedBlocks(event) {
    event.preventDefault();

    try {
      let tagArray = [];
      tagArray.push(tags);

      console.log(tagArray);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="userCreateArea">
      <div className="createTitle">
        <h2>Create Your Own</h2>
      </div>
      <div className="userCreateBars">
        <input
          onChange={handleNameChange}
          type="text"
          placeholder="Whats the name?"
          size="30"
          className="name"
          value={name}
        ></input>
        <input
          onChange={handleLinkChange}
          type="url"
          placeholder="Whats the link?"
          size="30"
          className="userLink"
          value={userLink}
        ></input>
        <textarea
          onChange={handleTagChange}
          name="tags"
          placeholder="Put as many tags as you want, separate by a space."
          rows="2"
          cols="30"
          className="tags"
          value={tags}
        ></textarea>
        <input
          onClick={UserCreatedBlocks}
          type="submit"
          className="userCreateSubmit"
          value="Create"
        />
      </div>
    </div>
  );
}

export default UserCreateBars;
