import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import SearchResults from "../components/SearchResults";
import "../css/MoviePage.css";
import MovieData from "../components/MovieData";

function MoviePage() {
  const [search, setSearch] = useState("");
  const { id } = useParams();

  return (
    <>
      <Navbar setSearch={setSearch} />
      {search === "" ? (
        <>
          <MovieData id={id} />
        </>
      ) : (
        <SearchResults search={search} />
      )}
    </>
  );
}

export default MoviePage;
