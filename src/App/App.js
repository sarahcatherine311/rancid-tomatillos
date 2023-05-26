import React, { Component } from 'react';
import './App.css';
import Movies from '../Movies/Movies';
import Movie from '../Movie/Movie';
import Header from '../Header/Header';
import Back from '../Back/Back';
import { Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor() {
    super();
    this.state = {
      specificMovie: [],
      isLoading: true,
      search: "",
      error: null,
      clicked: false
    };
  }
  
  moviesFetchCall = () => {
    fetch("https://rancid-tomatillos.herokuapp.com/api/v2/movies")
      .then(response => response.json())
      .then(data => 
        this.setState({
          allMovies: data,
          includedMovies: data,
          clicked: false,
          isLoading: false
        }))
      .catch(error => this.setState({ error, isLoading: false}))
  }

  componentDidMount = () => {
    this.moviesFetchCall()
  }
  
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
        isLoading: false
      })
    } else {
      this.setState({
        allMovies: { movies: data.movies.sort((a,b) => a.average_rating - b.average_rating )},
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
        isLoading: false
      })

    } else {
      this.setState({
        allMovies: data,
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
              <Movies movies={this.state.includedMovies} />
            </div>
          )
          }
        />
      );
    } 
    return (
      <main>
        <Switch>
          <Route path='/:id'render={({ match }) => {
            const theId = parseInt(match.params.id)
            return (
              <div> 
                  <Back goBackToHome={this.goBackToHome}/>
                  <Movie key={theId} id={theId} />
                </div>
              )
            }
          }
          />
          <Route path='/' render={() => (
              <div>
                <Header searchForTitle={this.searchForTitle} sortMovies={this.sortMovies}/>
                <Movies movies={this.state.allMovies} />
              </div>
              )
            }
          /> 
        </Switch>
      </main>
    )
  };
};

export default App;
