import "../css/Navbar.css";
import { Link } from "react-router-dom";

function Navbar({ setSearch }) {
  return (
    <div className="navbar">
      <div className="title">
        <h1>123Movies</h1>
      </div>
      <div className="searchBar">
        <input
          type="text"
          placeholder="search movie...."
          onChange={(e) => setSearch(e.target.value)}
        ></input>
      </div>
      <div className="navlist">
        <Link className="list-item" to="/">Home</Link>
        <Link className="list-item" to="/Popular_movies">Popular</Link>
        <Link className="list-item" to="/TopRated_movies">Top-Rated</Link>
      </div>
    </div>
  );
}

export default Navbar;
