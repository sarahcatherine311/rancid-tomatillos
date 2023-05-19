import react from "react";
import "./Movies.css";
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Movies = ({movies}) => {
  const moviePoster = movies.movies.map(movie => {
    return (
      <Link to={`/${movie.id}`} key={movie.id} aria-label={`Link to ${movie.title}'s details page`} >
        <img className="movie-posters" id={movie.id} key={movie.id} src={movie.poster_path} alt={`Movie poster for ${movie.title}`} />
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

Movies.propTypes = {
  movies: PropTypes.object
}