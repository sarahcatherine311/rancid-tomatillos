import react from "react";
import "./Movies.css";
import { Link } from 'react-router-dom'

const Movies = ({movies, displaySingleMovie}) => {
  const moviePoster = movies.movies.map(movie => {
    return (
      <Link to={`/${movie.id}`} key={movie.id}>
        <img className="movie-posters" id={movie.id} key={movie.id} src={movie.poster_path} onClick={() => displaySingleMovie(movie.id)}/>
      </Link>
    );
  });
  return (
    <div className="movie-posters-section">
      {moviePoster}
    </div>
  );
};

export default Movies;