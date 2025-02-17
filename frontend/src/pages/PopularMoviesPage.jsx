import PopularMovies from "../components/PopularMovies";
import Navbar from "../components/navbar";
import SearchResults from "../components/SearchResults";
import { useState } from "react";

function PopularMoviesPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setSearch={setSearch} />
      <div className="movie-display">
        {search === "" ? (
          <>
            <PopularMovies />
          </>
        ) : (
          <SearchResults search={search} />
        )}
      </div>
    </>
  );
}

export default PopularMoviesPage;
