import "../css/Navbar.css";

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
        <ul>
          <li>Home</li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
