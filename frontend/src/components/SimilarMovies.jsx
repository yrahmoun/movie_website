import MovieCard from "./MovieCard";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SimilarMovies({ id }) {
  const [movies, setMovies] = useState([]);
  const api_key = import.meta.env.VITE_API_KEY;
  const api_url = `https://api.themoviedb.org/3/movie/${id}/similar`;

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(`${api_url}?api_key=${api_key}`);
        const data = await response.json();
        setMovies(data.results.slice(0, 6));
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, [id]);

  return (
    <div className="movie-section">
      <h3 className="movie-tag">Similar MOVIES:</h3>
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

export default SimilarMovies;
