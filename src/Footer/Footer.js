import React, { Component } from "react";
import "./Footer.css";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Footer = (props) => {
  return (
    <footer className="footer" >
      <Link to={'/'} aria-label="Link to home page" onClick={props.goBackToHome} onKeyDown={(e)=> e.keyCode === 13 && props.goBackToHome}>
         <img className="footer-logo" src="https://i.ibb.co/8bGjmZw/Untitled-Artwork.png" alt="Rancid Tomatillo Logo"/>
      </Link>
    </footer>
  );
};

export default Footer;

Footer.propTypes = {
  props: PropTypes.object
};