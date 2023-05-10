import React, { Component } from 'react';
import './App.css';
import movieData from '../movie-data';
import Movies from '../Movies/Movies';
import Header from '../Header/Header';

class App extends Component {
  constructor() {
    super();
    this.state = movieData;
  }

  render() {
    return(
      <div>
        <Header />
        <Movies movies={this.state.movies}/>
      </div>
    )
  }
}

export default App;
