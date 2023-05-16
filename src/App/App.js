import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import Movie from '../Movie/Movie';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Route, NavLink } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      specificMovie: null,
      isLoading: true,
      search: "",
      error: null
    };
  }
  
  moviesFetchCall = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => 
        this.setState({
          allMovies: data,
          includedMovies: data,
          specificMovie: null,
          isLoading: false
        }))
      .catch(error => this.setState({ error, isLoading: false}))
  }

  individualMovieFetchCall = (id) => {
    fetch(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/${id}/`)
      .then(response => response.json())
      .then(data => 
        this.setState({
          allMovies: null,
          specificMovie: data,
          includedMovies: null,
          isLoading: false
        }))
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
    this.moviesFetchCall()
  }

  displaySingleMovie = (id) => {
    this.individualMovieFetchCall(id)
    this.videoFetchCall(id)
    console.log(id)
    console.log("this is working")
  };
  
  goBackToHome = () => {
    this.moviesFetchCall()
  };

  sortMovies = () => {
    const sortSelector = document.getElementById("ratings")
    const sortInputValue = sortSelector.value
    const data = this.state.allMovies
    if (sortInputValue === "highest") {
      this.setState({
        allMovies: { movies: data.movies.sort((a,b) => b.average_rating - a.average_rating )},
        specificMovie: null,
        isLoading: false
      })
    } else {
      this.setState({
        allMovies: { movies: data.movies.sort((a,b) => a.average_rating - b.average_rating )},
        specificMovie: null,
        isLoading: false
      })
    }
  }
  
  searchForTitle = () => {
    const data = this.state.allMovies
    const searchBar = document.getElementById('searchBar')
    this.setState({search: searchBar.value.toUpperCase() })
    let includedMovies = this.state.allMovies.movies.filter((movie) => movie.title.toUpperCase().includes(this.state.search))

    if (this.state.search !== "") {
      this.setState({
        allMovies: data,
        includedMovies: {movies: includedMovies},
        specificMovie: null,
        isLoading: false
      })

    } else {
      this.setState({
        allMovies: data,
        specificMovie: null,
        isLoading: false
      })
    } 
  }
  
  render() {
    if (this.state.isLoading) {
      return <div>Loading.....</div>
    } 
    else if (this.state.error) {
      return <div>Error: {this.state.error.message}</div>
    }
     else if (this.state.search !== "") {
      return (
        <Route
          exact
          path='/'
          render={() => (
            <div>
              <Header searchForTitle={this.searchForTitle} sortMovies={this.sortMovies}/>
              <Movies movies={this.state.includedMovies} displaySingleMovie={this.displaySingleMovie}/>
            </div>
          )
          }
        />
      );
    } else if (!this.state.specificMovie) {
      return (
        <Route 
          exact 
          path='/' 
          render={() => (
            <div>
              <Header searchForTitle={this.searchForTitle} sortMovies={this.sortMovies}/>
              <Movies movies={this.state.allMovies} displaySingleMovie={this.displaySingleMovie}/>
            </div>
            )
          }
        /> 
     );
    } else {
      return (
        <Route 
          path='/:id'
          render={({ match }) => {
            console.log(match, 'yoooooooooo')
            const theId = parseInt(match.params.id)
            console.log('match', match)
            console.log(theId, 'id')
            return (
              <div> 
                <Movie id={theId} movie={this.state.specificMovie} video={this.state.trailer} />
                <Footer goBackToHome={this.goBackToHome}/>
              </div>
            )
          }
          }
        />
      );
    };
  };
};

export default App;
