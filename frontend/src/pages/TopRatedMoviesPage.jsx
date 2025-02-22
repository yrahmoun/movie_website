import Navbar from "../components/Navbar";
import TopRatedMovies from "../components/TopRatedMovies";
import SearchResults from "../components/SearchResults";
import { useMovies } from "../context/MovieContext";
import MoviesLoading from "../components/MoviesLoading";

function TopRatedMoviesPage() {
  const { search, isTopRatedLoading } = useMovies();

  return (
    <>
      <Navbar />
      <div className="movie-display">
        {search === "" ? (
          <>{isTopRatedLoading ? <MoviesLoading /> : <TopRatedMovies />}</>
        ) : (
          <SearchResults />
        )}
      </div>
    </>
  );
}

export default TopRatedMoviesPage;
