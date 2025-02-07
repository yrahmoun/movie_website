import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "../css/PopularMovies.css";

function PopularMovies() {
  const [movies, setMovies] = useState([]);
  const api_key = import.meta.env.VITE_API_KEY;
  const api_url = "https://api.themoviedb.org/3/movie/popular";

  useEffect(() => {
    const getPopularMovies = async () => {
      const response = await fetch(`${api_url}?api_key=${api_key}`);
      const data = await response.json();
      setMovies(data.results);
    };
    getPopularMovies();
  }, []);

  return (
    <div className="movie-section">
      <h3 className="movie-tag">POPULAR MOVIES:</h3>
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default PopularMovies;
