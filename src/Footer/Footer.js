import React, { Component } from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer >
      <button onClick={props.goBackToHome}>Return to Main Page</button>
    </footer>
  );
};

export default Footer;