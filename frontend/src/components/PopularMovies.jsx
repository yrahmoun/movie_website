import MovieCard from "./MovieCard";
import { useMovies } from "../context/MovieContext";
import { useLocation, Link } from "react-router-dom";

function PopularMovies() {
  const { popularMovies } = useMovies();
  const location = useLocation();
  const isPopularPage = location.pathname === "/Popular_movies";
  const movies = isPopularPage ? popularMovies : popularMovies.slice(0, 8);

  return (
    <div className="movie-section">
      <h3 className="movie-tag">POPULAR MOVIES:</h3>
      <div className="movie-container">
        {movies
          .filter(
            (movie) =>
              movie.poster_path && movie.original_title && movie.vote_average
          )
          .map((movie) => (
            <Link key={movie.id} to={`/movie/${movie.id}`}>
              <MovieCard content={movie} />
            </Link>
          ))}
      </div>
    </div>
  );
}

export default PopularMovies;
