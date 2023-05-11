import React, { Component } from "react";
import "./Movie.css";


const Movie = (props) => {
  console.log(props.movie)
  return (
  <div className="single-movie">
    <img classname="single-movie-img"src={props.movie[0].backdrop_path} height="100px" />
  </div>
  );
};

export default Movie;