import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import MovieCard from "./MovieCard";
import { useMovies } from "../context/MovieContext";

function SearchResults() {
  const [movies, setMovies] = useState([]);
  const { search, setSearch } = useMovies();
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
          <Link key={movie.id} to={`/movie/${movie.id}`} onClick={() => setSearch("")}>
            <MovieCard content={movie} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SearchResults;
