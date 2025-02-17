import MovieCard from "./MovieCard";
import { useMovies } from "../context/MovieContext";

function PopularMovies() {
  const { popularMovies } = useMovies();

  return (
    <div className="movie-section">
      <h3 className="movie-tag">POPULAR MOVIES:</h3>
      <div className="movie-container">
        {popularMovies.slice(0, 8).map((movie) => (
          <MovieCard key={movie.id} content={movie} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
