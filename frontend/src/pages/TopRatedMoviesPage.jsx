import Navbar from "../components/navbar";
import TopRatedMovies from "../components/TopRatedMovies";
import SearchResults from "../components/SearchResults";
import { useMovies } from "../context/MovieContext";

function TopRatedMoviesPage() {
  const { search } = useMovies();

  return (
    <>
      <Navbar />
      <div className="movie-display">
        {search === "" ? (
          <>
            <TopRatedMovies />
          </>
        ) : (
          <SearchResults />
        )}
      </div>
    </>
  );
}

export default TopRatedMoviesPage;
