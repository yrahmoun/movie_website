import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import { useState } from "react";
import { Menu, X } from "lucide-react";

function Navbar() {
  const { search, setSearch } = useMovies();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="navbar">
        <div className="title">
          <h1>123Movies</h1>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="search movie...."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <div className="navlist">
          <Link
            className="list-item"
            onClick={() => {
              setSearch("");
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            className="list-item"
            onClick={() => {
              setSearch("");
            }}
            to="/Popular_movies"
          >
            Popular
          </Link>
          <Link
            className="list-item"
            onClick={() => {
              setSearch("");
            }}
            to="/TopRated_movies"
          >
            Top-Rated
          </Link>
        </div>
        <div className="menu-icon" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <X color="#bdbdbd" size={30} />
          ) : (
            <Menu color="#bdbdbd" size={30} />
          )}
        </div>
      </div>
      {isOpen && (
        <div className="menu-links">
          <Link
            className="menu-item"
            onClick={() => {
              setSearch("");
            }}
            to="/"
          >
            Home
          </Link>
          <Link
            className="menu-item"
            onClick={() => {
              setSearch("");
            }}
            to="/Popular_movies"
          >
            Popular
          </Link>
          <Link
            className="menu-item"
            onClick={() => {
              setSearch("");
            }}
            to="/TopRated_movies"
          >
            Top-Rated
          </Link>
        </div>
      )}
    </>
  );
}

export default Navbar;
