import { useState, useEffect } from "react";
import SimilarMovies from "../components/SimilarMovies";
import MovieInfo from "./MovieInfo";

function MovieData({ id }) {
  const api_url = "https://api.themoviedb.org/3/movie/";
  const api_key = import.meta.env.VITE_API_KEY;
  const movieUrl = "https://vidsrc.xyz/embed/movie/";
  const [movieData, setMovieData] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [isTrailer, setIsTrailer] = useState(false);
  const backend_url = import.meta.env.VITE_BACKEND_URL;

  useEffect(() => {
    const getMovieData = async () => {
      try {
        const response = await fetch(`${api_url}${id}?api_key=${api_key}`);
        const data = await response.json();
        setMovieData(data);
      } catch (error) {
        console.error(error);
      }
    };
    getMovieData();
  }, [id]);

  useEffect(() => {
    if (!movieData.original_title || !movieData.release_date) return;
    const getTrailer = async () => {
      try {
        const query = `${movieData.original_title} ${
          movieData.release_date ? movieData.release_date.split("-")[0] : ""
        }`;
        const response = await fetch(
          `${backend_url}search-trailer?query=${query}`
        );
        const data = await response.json();
        setTrailerUrl(data.trailer);
      } catch (error) {
        console.error(error);
      }
    };
    getTrailer();
    console.log(trailerUrl);
  }, [movieData]);

  return (
    <div className="all-container">
      <div className="movie-box">
        <h1>{movieData.original_title}</h1>
        <div className="media-player">
          <iframe
            src={isTrailer ? trailerUrl : `${movieUrl}${id}?autoPlay=false`}
            allowFullScreen
          ></iframe>
        </div>
        <div className="media-option">
          <button
            className="stream"
            onClick={() => {
              setIsTrailer(false);
            }}
          >
            Stream
          </button>
          <button
            className="trailer"
            onClick={() => {
              setIsTrailer(true);
            }}
          >
            Trailer
          </button>
        </div>
        <MovieInfo movieData={movieData} />
        <SimilarMovies id={id} />
      </div>
    </div>
  );
}

export default MovieData;
