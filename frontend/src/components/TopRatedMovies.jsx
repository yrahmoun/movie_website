import { useMovies } from "../context/MovieContext";
import { useLocation, Link } from "react-router-dom";
import MovieCard from "./MovieCard";

function TopRatedMovies() {
  const { topRatedMovies } = useMovies();
  const location = useLocation();
  const isTopRatedPage = location.pathname === "/TopRated_movies";
  const movies = isTopRatedPage ? topRatedMovies : topRatedMovies.slice(0, 8);

  return (
    <div className="movie-section">
      <h3 className="movie-tag">TOP RATED MOVIES:</h3>
      <div className="movie-container">
        {movies.map((show) => (
          <Link key={show.id} to={`/movie/${show.id}`}>
            <MovieCard content={show} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default TopRatedMovies;
