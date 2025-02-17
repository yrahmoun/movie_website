import { useMovies } from "../context/MovieContext";
import MovieCard from "./MovieCard";

function TopRatedMovies() {
  const { topRatedMovies } = useMovies();

  return (
    <div className="movie-section">
      <h3 className="movie-tag">TOP RATED MOVIES:</h3>
      <div className="movie-container">
        {topRatedMovies.slice(0, 8).map((show) => (
          <MovieCard key={show.id} content={show} />
        ))}
      </div>
    </div>
  );
}

export default TopRatedMovies;
