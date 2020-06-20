import React, { useState, useEffect } from "react";
import Header from "./Header";
import Body from "./AllBody/Body";
import Footer from "./Footer";
import { getAll } from "../api";

function App() {
  const [message, setMessage] = useState("");
  useEffect(() => {
    getAll()
      .then((response) => {
        setMessage(response.message);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  });

  return (
    <div>
      <h1>{message}</h1>
      <Header />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
