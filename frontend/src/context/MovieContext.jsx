import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [search, setSearch] = useState("");
  const api_key = import.meta.env.VITE_API_KEY;
  const popular_movies_api_url = "https://api.themoviedb.org/3/movie/popular";
  const top_rated_movies_api_url =
    "https://api.themoviedb.org/3/movie/top_rated";

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          `${popular_movies_api_url}?api_key=${api_key}`
        );
        const data = await response.json();
        setPopularMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    const getTopRatedMovies = async () => {
      try {
        const response = await fetch(
          `${top_rated_movies_api_url}?api_key=${api_key}`
        );
        const data = await response.json();
        setTopRatedMovies(data.results);
      } catch (error) {
        console.error(error);
      }
    };
    getPopularMovies();
    getTopRatedMovies();
  }, []);

  return (
    <MovieContext.Provider
      value={{ popularMovies, topRatedMovies, search, setSearch }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
