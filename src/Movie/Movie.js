import React, { Component } from "react";
import "./Movie.css";


const Movie = (props) => {
  console.log(props.movie)
  return (
    <div>
      <img className="backdrop-img"src={props.movie[0].backdrop_path} />
      <div className="main">
        <img className="movie-poster" src={props.movie[0].poster_path}/>
        <div className="movie-details">
          <h2>{props.movie[0].title}</h2>
          <p>Release date: {props.movie[0].release_date}</p>
          <p>Average rating: {props.movie[0].average_rating}</p>
        </div>
      </div>
    </div>
  );
};

export default Movie;