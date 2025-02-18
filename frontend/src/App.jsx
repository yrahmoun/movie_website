import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Popular_movies" element={<PopularMoviesPage />} />
        <Route path="/TopRated_movies" element={<TopRatedMoviesPage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
      </Routes>
    </>
  );
}

export default App;
