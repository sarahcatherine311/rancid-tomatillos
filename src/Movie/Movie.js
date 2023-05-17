import React, { Component } from "react";
import "./Movie.css";
import Videos from "../Videos/Videos";


const Movie = (props) => {
  console.log(props, 'propssss')
  // props.moreData(props.id)
  //   .then(data => {
  //     console.log(data, 'data in new fetch')
  //   })
  //   .catch(error => this.setState({ error, isLoading: false}))
  const budget = props.movie.budget;
  const revenue = props.movie.revenue;
  let dollarUSLocale = Intl.NumberFormat('en-US');

  return (
    <div>
      <div className="backdrop-img-section">
      <img className="backdrop-img"src={props.movie.backdrop_path} alt={`Backdrop image for ${props.movie.title}`} />
      </div>
      <div className="main">
        <img className="movie-poster" src={props.movie.poster_path} alt={`Movie poster for ${props.movie.title}`}/>
        <section className="movie-details">
          <div>
            <h2>{props.movie.title}</h2>
            <h3>{props.movie.tagline}</h3>
          </div>
          {/* <p>Genres: {props.movie.genres.join(', ')}</p> */}
          <p>Release date: {props.movie.release_date}</p>
          <p>Average rating: {props.movie.average_rating} stars</p>
          <p>Runtime: {props.movie.runtime} minutes</p> 
           <p>Overview: {props.movie.overview}</p> 
           <div>
            <p>Budget: ${dollarUSLocale.format(budget)}</p>
            <p>Revenue: ${dollarUSLocale.format(revenue)}</p>
          </div>
          {props.video && props.video.key && (
          <div className="videos">
            <Videos embedId={props.video.key} />
          </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Movie;