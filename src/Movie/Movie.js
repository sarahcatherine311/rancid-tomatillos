import React, { Component } from "react";
import "./Movie.css";
import Videos from "../Videos/Videos";


const Movie = (props) => {
  const budget = props.movie.movie.budget;
  const revenue = props.movie.movie.revenue;
  let dollarUSLocale = Intl.NumberFormat('en-US');

  return (
    <div>
      <div className="backdrop-img-section">
      <img className="backdrop-img"src={props.movie.movie.backdrop_path} />
      </div>
      <div className="main">
        <img className="movie-poster" src={props.movie.movie.poster_path}/>
        <section className="movie-details">
          <div>
            <h2>{props.movie.movie.title}</h2>
            <h3>{props.movie.movie.tagline}</h3>
          </div>
          <p>Genres: {props.movie.movie.genres.join(', ')}</p>
          <p>Release date: {props.movie.movie.release_date}</p>
          <p>Average rating: {props.movie.movie.average_rating}</p>
          <p>Runtime: {props.movie.movie.runtime} minutes</p>
          <p>Overview: {props.movie.movie.overview}</p>
          <div>
            <p>Budget: ${dollarUSLocale.format(budget)}</p>
            <p>Revenue: ${dollarUSLocale.format(revenue)}</p>
          </div>
          <div className="videos">
            <Videos embedId={props.video.key} />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Movie;