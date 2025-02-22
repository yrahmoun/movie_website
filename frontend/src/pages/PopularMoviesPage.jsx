import PopularMovies from "../components/PopularMovies";
import Navbar from "../components/Navbar";
import SearchResults from "../components/SearchResults";
import { useMovies } from "../context/MovieContext";
import MoviesLoading from "../components/MoviesLoading";

function PopularMoviesPage() {
  const { search, isPopularLoading } = useMovies();

  return (
    <>
      <Navbar />
      <div className="movie-display">
        {search === "" ? (
          <>{isPopularLoading ? <MoviesLoading /> : <PopularMovies />}</>
        ) : (
          <SearchResults />
        )}
      </div>
    </>
  );
}

export default PopularMoviesPage;
