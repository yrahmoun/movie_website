import { GridLoader } from "react-spinners";

function MoviesLoading() {
  return (
    <div className="loading-container">
        <GridLoader size={80} color="#bdbdbd" />
        <p>fetching movies...</p>
    </div>
  )
}

export default MoviesLoading;
