function MovieInfo({ movieData }) {
  const poster_url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="info-container">
      <div className="poster">
        <img src={poster_url + movieData.poster_path}></img>
      </div>
      <div className="movie-info">
        <h3>{movieData.original_title}</h3>
        <p>
          <span className="info-title">Release Date:</span>{" "}
          {movieData.release_date}
        </p>
        <p>
          <span className="info-title">Runtime:</span> {movieData.runtime}
          min
        </p>
        <p>
          <span className="info-title">Rating:</span> {movieData.vote_average}
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
  );
}

export default MovieInfo;
