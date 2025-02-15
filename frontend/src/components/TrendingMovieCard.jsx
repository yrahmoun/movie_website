import "../css/TrendingMovieCard.css";

function TrendingMovieCard({content}) {
    const poster_url = "https://image.tmdb.org/t/p/original";
    console.log(content);

  return (
    <div
      className="trending-movie-card"
      style={{
        backgroundImage: `url(${poster_url + content.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="movie-info">
        <h3>{content.title}</h3>
        <div className="movie-data">
          <p>{content.media_type}</p>
          <p>{content.release_date.split('-')[0]}</p>
          <p>{content.vote_average}</p>
        </div>
        <div className="movie-overview">
          <p>{content.overview}</p>
        </div>
        <button>Watch Now</button>
      </div>
    </div>
  )
}

export default TrendingMovieCard;