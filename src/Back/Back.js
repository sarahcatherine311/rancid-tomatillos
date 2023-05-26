import React, { Component } from "react";
import "./Back.css";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Back = (props) => {
  return (
    <Link to={'/'} aria-label="Link to home page" onClick={props.goBackToHome} onKeyDown={(e)=> e.keyCode === 13 && props.goBackToHome}>
        <img className="back-logo" src="https://i.ibb.co/8bGjmZw/Untitled-Artwork.png" alt="Rancid Tomatillo Logo"/>
    </Link>
  );
};

export default Back;

Back.propTypes = {
  props: PropTypes.object
};