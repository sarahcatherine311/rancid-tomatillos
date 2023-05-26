import React, { Component } from "react";
import "./Header.css";
import PropTypes from 'prop-types'

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-top">
        <img className="logo" src="https://i.ibb.co/8bGjmZw/Untitled-Artwork.png" alt="Rancid Tomatillo Logo"/>
      </div>
      <div className="header-bottom">
        <input onChange={(e) => props.searchForTitle()} className="search-bar" id="searchBar"type="text" placeholder="Search for a movie"/>
        <div>
          <select defaultValue={'default'} className="sort" onChange={(e) => props.sortMovies()} id="ratings" name="ratings">
            <option value="default" disabled>Sort By Rating:</option>
            <option id="highest" value="highest">High to Low</option>
            <option id="lowest" value="lowest">Low to High</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;

Header.propTypes = {
  props: PropTypes.object
};