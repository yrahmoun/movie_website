import "./css/App.css";
import PopularMovies from "./components/PopularMovies";
import Navbar from "./components/navbar";

function App() {

  return (
    <>
      <Navbar />
      <div className="movie-display">
        <PopularMovies />
      </div>
    </>
  );
}

export default App;
