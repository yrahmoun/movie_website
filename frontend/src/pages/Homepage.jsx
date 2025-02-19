import PopularMovies from "../components/PopularMovies";
import Navbar from "../components/Navbar";
import TopRatedMovies from "../components/TopRatedMovies";
import SearchResults from "../components/SearchResults";
import { useMovies } from "../context/MovieContext";
import TrendingMovies from "../components/TrendingMovies";

function Homepage() {
  const { search } = useMovies();

  return (
    <>
      <Navbar />
      <div className="movie-display">
        {search === "" ? (
          <>
            <TrendingMovies />
            <PopularMovies />
            <TopRatedMovies />
          </>
        ) : (
          <SearchResults />
        )}
      </div>
    </>
  );
}

export default Homepage;
