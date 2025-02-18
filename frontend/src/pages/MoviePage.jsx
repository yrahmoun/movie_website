import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/navbar";
import SearchResults from "../components/SearchResults";
import "../css/MoviePage.css";
import MovieData from "../components/MovieData";
import { useMovies } from "../context/MovieContext";

function MoviePage() {
  const { search } = useMovies();
  const { id } = useParams();

  return (
    <>
      <Navbar />
      {search === "" ? (
        <>
          <MovieData id={id} />
        </>
      ) : (
        <SearchResults />
      )}
    </>
  );
}

export default MoviePage;
