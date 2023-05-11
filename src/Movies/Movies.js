import react from "react"
import "./Movies.css"

const Movies = ({movies, displaySingleMovie}) => {
    const moviePoster = movies.map(movie => {
        return (
           <img key={movie.id} src={movie.poster_path} onClick={() => displaySingleMovie(movie.id)} height="100px"/>
        )
    })
    return (
        <div className="movie-posters">
            {moviePoster}
        </div>
    )
    
    
    
}

export default Movies