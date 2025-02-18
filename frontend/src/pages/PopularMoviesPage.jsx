import PopularMovies from "../components/PopularMovies";
import Navbar from "../components/navbar";
import SearchResults from "../components/SearchResults";
import { useMovies } from "../context/MovieContext";

function PopularMoviesPage() {
  const { search } = useMovies();

  return (
    <>
      <Navbar />
      <div className="movie-display">
        {search === "" ? (
          <>
            <PopularMovies />
          </>
        ) : (
          <SearchResults />
        )}
      </div>
    </>
  );
}

export default PopularMoviesPage;
