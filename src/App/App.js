import React, { Component } from 'react';
import './App.css';
import movieData from '../movie-data';
import Movies from '../Movies/Movies';
import Movie from '../Movie/Movie';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allMovies: movieData,
      specificMovie: null
    };
  }
  displaySingleMovie = (id) => {
    const filteredMovie = this.state.allMovies.movies.filter(movie => movie.id === id)
    this.setState({
      allMovies: null,
      specificMovie: filteredMovie
    })
  }
  goBackToHome = () => {
    this.setState({
      allMovies: movieData,
      specificMovie: null
    })
  }
  render() {
    if (!this.state.specificMovie) {
      return(
        <div>
          {/* <Header /> */}
          <Movies movies={this.state.allMovies.movies} displaySingleMovie={this.displaySingleMovie}/>
        </div>
      )
    } else {
      return (
        <div> 
          <button className='leave-button' onClick={this.goBackToHome}></button>
          <Movie movie={this.state.specificMovie} />
        </div>
      )
    }
  }
}

export default App;
