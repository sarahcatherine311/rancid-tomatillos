import React, { Component } from "react";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <div className="header-top">
        <img className="logo" src="https://i.ibb.co/8bGjmZw/Untitled-Artwork.png" alt="Rancid Tomatillo Logo"/>
      </div>
      <div className="header-bottom">
        <input onChange={(e) => props.searchForTitle()} className="search-bar" id="searchBar"type="text" placeholder="Search for a movie"/>
        <div>
          <label className="sort" for="ratings">Sort by Rating:  </label>
          <select className="sort" onChange={(e) => props.sortMovies()} id="ratings" name="ratings">
            <option id="highest" value="highest">High to Low</option>
            <option id="lowest" value="lowest">Low to High</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;