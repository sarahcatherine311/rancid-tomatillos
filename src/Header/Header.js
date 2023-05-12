import React, { Component } from "react";
import "./Header.css";

const Header = (props) => {
  // console.log(props, "movie props")
  return (
    <header>
      <div className="header-top">
        <img className="logo" placeholder="Rancid Tomatillo Logo"/>
        <h1>Rancid Tomatillos</h1>
      </div>
      <div className="header-bottom">
        <input className="search-bar" type="text" placeholder="Search for a movie"/>
        <div>
          <label for="ratings">Sort by Rating:  </label>
          <select onChange={(e) => props.sortMovies()} id="ratings" name="ratings">
            <option value="highest">High to Low</option>
            <option value="lowest">Low to High</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;