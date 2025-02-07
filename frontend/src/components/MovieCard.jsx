import "../css/MovieCard.css";

function MovieCard({ movie }) {
  const poster_url = "https://image.tmdb.org/t/p/w185";

  return (
    <div className="movie-card">
      <div className="movie-image">
        <div className="movie-rating">
          <p>{movie.vote_average}</p>
        </div>
        <img src={poster_url + movie.backdrop_path}></img>
      </div>
      <p className="movie-title">{movie.title}</p>
    </div>
  );
}

export default MovieCard;
