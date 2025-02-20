import { useState, useEffect } from "react";
import SimilarMovies from "../components/SimilarMovies";

function MovieData({ id }) {
  const api_url = "https://api.themoviedb.org/3/movie/";
  const api_key = import.meta.env.VITE_API_KEY;
  const movieUrl = "https://vidsrc.xyz/embed/movie/";
  const poster_url = "https://image.tmdb.org/t/p/w500";
  const [movieData, setMovieData] = useState([]);

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

  return (
    <div className="all-container">
      <div className="movie-box">
        <h1>{movieData.original_title}</h1>
        <div className="media-player">
          <iframe
            src={`${movieUrl}${id}?autoPlay=false`}
            allowFullScreen
          ></iframe>
        </div>
        <div className="info-container">
          <div className="poster">
            <img src={poster_url + movieData.poster_path}></img>
          </div>
          <div className="movie-info">
            <h3>{movieData.original_title}</h3>
            <p>
              <span className="info-title">Release Date:</span> {movieData.release_date}
            </p>
            <p>
              <span className="info-title">Runtime:</span> {movieData.runtime}
              min
            </p>
            <p>
              <span className="info-title">Rating:</span>{" "}
              {movieData.vote_average}
            </p>
            <p>
              <span className="info-title">Overview:</span>
            </p>
            <p>{movieData.overview}</p>
            <p>
              <span className="info-title">Genres:</span>{" "}
              {movieData.genres && movieData.genres.length > 0
                ? movieData.genres.map((genre) => genre.name).join(", ")
                : "No genres available"}
            </p>
            <p>
              <span className="info-title">Country:</span>{" "}
              {movieData.origin_country}
            </p>
          </div>
        </div>
        <SimilarMovies id={id} />
      </div>
    </div>
  );
}

export default MovieData;
