import React, { Component } from "react";
import "./Movie.css";
import Videos from "../Videos/Videos";
import PropTypes from 'prop-types'

class Movie extends Component {
  constructor( props ) {
    super(props)
    this.state = {
      currentMovie: [],
      isLoading: false
    }
  }
  individualMovieFetchCall = (id) => {
    this.setState({isLoading: true})
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/`)
      .then(response => response.json())
      .then(data =>
        this.setState({
          currentMovie: data.movie,
          isLoading: false})
        )
        .catch(error => this.setState({ error, isLoading: false}))
  }

  videoFetchCall = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/videos`)
      .then(response => response.json())
      .then(data => 
        this.setState({
          trailer: data.videos.find(video => video.type === "Trailer"),
          isLoading: false
        }))
      .catch(error => this.setState({ error, isLoading: false}))
  }

  componentDidMount = () => {
    this.videoFetchCall(this.props.id)
    this.individualMovieFetchCall(this.props.id)
  }
  render() {
    const budget = this.state.currentMovie.budget;
    const revenue = this.state.currentMovie.revenue;
    let dollarUSLocale = Intl.NumberFormat('en-US');
    
    {this.state.isLoading &&  <div>Loading.....</div>}
    return (
      <div>
        <div className="backdrop-img-section">
        <img className="backdrop-img"src={this.state.currentMovie.backdrop_path} alt={`Backdrop image for ${this.state.currentMovie.title}`} />
        </div>
        <div className="main">
          <img className="movie-poster" src={this.state.currentMovie.poster_path} alt={`Movie poster for ${this.state.currentMovie.title}`}/>
          <section className="movie-details">
            <div>
              <h2>{this.state.currentMovie.title}</h2>
              <h3>{this.state.currentMovie.tagline}</h3>
            </div>
            <p>Release date: {this.state.currentMovie.release_date}</p>
            <p>Average rating: {this.state.currentMovie.average_rating} stars</p>
            <p>Runtime: {this.state.currentMovie.runtime} minutes</p> 
             <p>Overview: {this.state.currentMovie.overview}</p> 
             <div>
              <p>Budget: ${dollarUSLocale.format(budget)}</p>
              <p>Revenue: ${dollarUSLocale.format(revenue)}</p>
            </div>
            {this.state.trailer && this.state.trailer.key && (
            <div className="videos">
              <Videos embedId={this.state.trailer.key} />
            </div>
            )}
          </section>
        </div>
      </div>
    )
  }
};

export default Movie;

Movie.propTypes = {
  id: PropTypes.number
}