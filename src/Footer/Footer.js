import React, { Component } from "react";
import "./Footer.css";
import { Link } from 'react-router-dom'

const Footer = (props) => {
  return (
    <footer >
      <Link to={'/'}>
         <img onClick={props.goBackToHome} className="footer-logo" src="https://i.ibb.co/8bGjmZw/Untitled-Artwork.png" alt="Rancid Tomatillo Logo"/>
      </Link>
      {/* <button onClick={props.goBackToHome}>Return to Main Page</button> */}
    </footer>
  );
};

export default Footer;