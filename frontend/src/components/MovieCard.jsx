import "../css/MovieCard.css";

function MovieCard({ content }) {
  const poster_url = "https://image.tmdb.org/t/p/w500";

  return (
    <div className="movie-card">
      <div className="movie-image">
        <div className="movie-rating">
          <p>{content.vote_average}</p>
        </div>
        <img src={poster_url + content.backdrop_path}></img>
      </div>
      <p className="movie-title">{content.title}</p>
    </div>
  );
}

export default MovieCard;
