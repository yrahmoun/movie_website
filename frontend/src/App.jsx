import "./css/App.css";
import PopularMovies from "./components/PopularMovies";
import Navbar from "./components/navbar";
import TopRatedMovies from "./components/TopRatedMovies";

function App() {

  return (
    <>
      <Navbar />
      <div className="movie-display">
        <PopularMovies />
        <TopRatedMovies />
      </div>
    </>
  );
}

export default App;
