import "./css/App.css";
import { Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import PopularMoviesPage from "./pages/PopularMoviesPage";
import TopRatedMoviesPage from "./pages/TopRatedMoviesPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Popular_movies" element={<PopularMoviesPage />} />
        <Route path="/TopRated_movies" element={<TopRatedMoviesPage />} />
      </Routes>
    </>
  );
}

export default App;
