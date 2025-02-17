import PopularMovies from "../components/PopularMovies";
import Navbar from "../components/navbar";
import TopRatedMovies from "../components/TopRatedMovies";
import SearchResults from "../components/SearchResults";
import { useState } from "react";
import TrendingMovies from "../components/TrendingMovies";

function Homepage() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setSearch={setSearch} />
      <div className="movie-display">
        {search === "" ? (
          <>
            <TrendingMovies />
            <PopularMovies />
            <TopRatedMovies />
          </>
        ) : (
          <SearchResults search={search} />
        )}
      </div>
    </>
  );
}

export default Homepage;
