import React, { Component } from "react";
import "./Footer.css";

const Footer = (props) => {
  return (
    <footer >
      <img onClick={props.goBackToHome} className="footer-logo" src="https://i.ibb.co/8bGjmZw/Untitled-Artwork.png" alt="Rancid Tomatillo Logo"/>
      {/* <button onClick={props.goBackToHome}>Return to Main Page</button> */}
    </footer>
  );
};

export default Footer;