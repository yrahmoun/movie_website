import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [popularPage, setPopularPage] = useState(1);
  const [topRatedPage, setTopRatedPage] = useState(1);
  const [totalPopularPages, setTotalPopularPages] = useState(1);
  const [totalTopRatedPages, setTotalTopRatedPages] = useState(1);
  const [search, setSearch] = useState("");
  const api_key = import.meta.env.VITE_API_KEY;
  const popular_movies_api_url = "https://api.themoviedb.org/3/movie/popular";
  const top_rated_movies_api_url =
    "https://api.themoviedb.org/3/movie/top_rated";

  useEffect(() => {
    const getPopularMovies = async () => {
      try {
        const response = await fetch(
          `${popular_movies_api_url}?page=${popularPage}&api_key=${api_key}`
        );
        const data = await response.json();
        setPopularMovies(data.results);
        setTotalPopularPages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    getPopularMovies();
  }, [popularPage]);

  useEffect(() => {
    const getTopRatedMovies = async () => {
      try {
        const response = await fetch(
          `${top_rated_movies_api_url}?page=${topRatedPage}&api_key=${api_key}`
        );
        const data = await response.json();
        setTopRatedMovies(data.results);
        setTotalTopRatedPages(data.total_pages);
      } catch (error) {
        console.error(error);
      }
    };
    getTopRatedMovies();
  }, [topRatedPage]);

  return (
    <MovieContext.Provider
      value={{
        popularMovies,
        topRatedMovies,
        search,
        setSearch,
        popularPage,
        setPopularPage,
        topRatedPage,
        setTopRatedPage,
        totalPopularPages,
        setTotalPopularPages,
        totalTopRatedPages,
        setTotalTopRatedPages,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovies = () => useContext(MovieContext);
