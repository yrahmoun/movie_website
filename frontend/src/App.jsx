import "./css/App.css";
import PopularMovies from "./components/PopularMovies";
import Navbar from "./components/navbar";
import TopRatedMovies from "./components/TopRatedMovies";
import SearchResults from "./components/SearchResults";
import { useState } from "react";
import TrendingMovies from "./components/TrendingMovies";

function App() {
  const [search, setSearch] = useState("");

  return (
    <>
      <Navbar setSearch={setSearch} />
      <TrendingMovies />
      <div className="movie-display">
        {search === "" ? (
          <>
            <PopularMovies />
            <TopRatedMovies />
          </>
        ) : (
          <SearchResults search={search}/>
        )}
      </div>
    </>
  );
}

export default App;
