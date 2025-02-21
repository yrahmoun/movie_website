import "../css/Navbar.css";
import { Link } from "react-router-dom";
import { useMovies } from "../context/MovieContext";
import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

function Navbar() {
  const { search, setSearch } = useMovies();
  const [isOpen, setIsOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/Popular_movies", label: "Popular" },
    { path: "/TopRated_movies", label: "Top-Rated" },
  ];

  return (
    <>
      <div className="navbar">
        <div className="title">
          <Link to="/">
            <h1>123Movies</h1>
          </Link>
        </div>
        <div className="searchBar">
          <input
            type="text"
            placeholder="search movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
        <div
          className="search-icon"
          onClick={() => {
            setIsSearchOpen(!isSearchOpen);
            setIsOpen(false);
          }}
        >
          <Search size={30} color="#fefefe" />
        </div>
        <div className="navlist">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              className="list-item"
              onClick={() => {
                setSearch("");
              }}
              to={path}
            >
              {label}
            </Link>
          ))}
        </div>
        <div
          className="menu-icon"
          onClick={() => {
            setIsOpen(!isOpen);
            setIsSearchOpen(false);
          }}
        >
          {isOpen ? (
            <X color="#fefefe" size={33} />
          ) : (
            <Menu color="#fefefe" size={33} />
          )}
        </div>
      </div>
      {isSearchOpen && (
        <div className="search-container">
          <input
            type="text"
            placeholder="search movie..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </div>
      )}
      {isOpen && (
        <div className="menu-links">
          {navLinks.map(({ path, label }) => (
            <Link
              key={path}
              className="menu-item"
              onClick={() => {
                setSearch("");
              }}
              to={path}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </>
  );
}

export default Navbar;
