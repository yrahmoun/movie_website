import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";

function TopRatedMovies() {
  const [shows, setShows] = useState([]);
  const api_key = import.meta.env.VITE_API_KEY;
  const api_url = "https://api.themoviedb.org/3/movie/top_rated";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${api_url}?api_key=${api_key}`);
      const data = await response.json();
      setShows(data.results);
    };
    fetchData();
  }, []);

  return (
    <div className="movie-section">
      <h3 className="movie-tag">TOP RATED MOVIES:</h3>
      <div className="movie-container">
        {shows.map((show) => (
          <MovieCard key={show.id} content={show} />
        ))}
      </div>
    </div>
  );
}

export default TopRatedMovies;
