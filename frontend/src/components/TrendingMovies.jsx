import { useState, useEffect } from "react";
import TrendingMovieCard from "./TrendingMovieCard";

function TrendingMovies() {
  const [movies, setMovies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const api_key = import.meta.env.VITE_API_KEY;
  const api_url = "https://api.themoviedb.org/3/trending/movie/day";

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await fetch(`${api_url}?api_key=${api_key}`);
        const data = await response.json();
        setMovies(data.results.slice(0, 5));
      } catch (error) {
        console.error(error);
      }
    };
    getMovies();
  }, []);

  useEffect(() => {
    const intervalId = setInterval(nextBtn, 3000);
    return () => clearInterval(intervalId);
  }, [currentIndex]);

  const nextBtn = () => {
    (currentIndex + 1 === movies.length) ? setCurrentIndex(0) : setCurrentIndex(currentIndex + 1);
  }

  const prevBtn = () => {
    (currentIndex - 1 < 0) ? setCurrentIndex(movies.length - 1) : setCurrentIndex(currentIndex - 1);
  }

  return (
    <div className="trending-movies">
      <img src="/arrow_back.svg" className="prev-btn" onClick={prevBtn}></img>
      <img src="/arrow_forward.svg" className="next-btn" onClick={nextBtn}></img>
      {movies.length && <TrendingMovieCard content={movies[currentIndex]} />}
    </div>
  );
}

export default TrendingMovies;
