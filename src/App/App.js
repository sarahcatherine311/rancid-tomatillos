import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import Movie from '../Movie/Movie';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = {
      specificMovie: null,
      isLoading: true,
      error: null
    };
  }
  
  fetchCall = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => 
        this.setState({
          allMovies: data,
          specificMovie: null,
          isLoading: false
        }))
      .catch(error => this.setState({ error, isLoading: false}))
  }

  componentDidMount = () => {
    this.fetchCall()
  }

  displaySingleMovie = (id) => {
    const filteredMovie = this.state.allMovies.movies.filter(movie => movie.id === id);
    this.setState({
      allMovies: null,
      specificMovie: filteredMovie
    });
  };
  
  goBackToHome = () => {
    this.fetchCall()
  };
  
  render() {
    if (this.state.isLoading) {
      return <div>Loading.....</div>
    } 
    else if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>
    }
     else if (!this.state.specificMovie) {
      return (
        <div>
          <Header />
          <Movies movies={this.state.allMovies} displaySingleMovie={this.displaySingleMovie}/>
        </div>
      );
    } else {
      return (
        <div> 
          <Movie movie={this.state.specificMovie} />
          <footer>
            <button onClick={this.goBackToHome}>Return to Main Page</button>
          </footer>
        </div>
      );
    };
  };
};

export default App;
