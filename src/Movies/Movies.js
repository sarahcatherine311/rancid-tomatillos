import react from "react";
import "./Movies.css";

const Movies = ({movies, displaySingleMovie}) => {
  console.log(movies, "movies")
  const moviePoster = movies.movies.map(movie => {
    return (
      <img className="movie-posters" key={movie.id} src={movie.poster_path} onClick={() => displaySingleMovie(movie.id)}/>
    );
  });
  return (
    <div className="movie-posters-section">
      {moviePoster}
    </div>
  );
};

export default Movies;