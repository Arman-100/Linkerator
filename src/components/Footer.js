import React from "react";
import "./Footer.css";

const year = new Date().getFullYear();

function Footer() {
  return (
    <div className="footer">
      <span>Created by Arman Shoraka </span>
      <p> Copyright {year}</p>
    </div>
  );
}

export default Footer;
