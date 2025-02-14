import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function SearchResults({ search }) {
  const [movies, setMovies] = useState([]);
  const api_key = import.meta.env.VITE_API_KEY;
  const api_url = "https://api.themoviedb.org/3/search/movie";

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(
          `${api_url}?api_key=${api_key}&query=${search}`
        );
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, [search]);

  return (
    <div className="movie-section">
      <h3 className="movie-tag">SEARCH RESULTS:</h3>
      <div className="movie-container">
        {movies.map((movie) => (
          <MovieCard key={movie.id} content={movie} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
