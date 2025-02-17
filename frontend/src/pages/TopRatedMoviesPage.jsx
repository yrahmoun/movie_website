import Navbar from "../components/navbar";
import TopRatedMovies from "../components/TopRatedMovies";
import SearchResults from "../components/SearchResults";
import { useState } from "react";

function TopRatedMoviesPage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setSearch={setSearch} />
      <div className="movie-display">
        {search === "" ? (
          <>
            <TopRatedMovies />
          </>
        ) : (
          <SearchResults search={search} />
        )}
      </div>
    </>
  );
}

export default TopRatedMoviesPage;
