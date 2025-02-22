import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../css/NotFound.css";

function NotFound() {
  return (
    <>
      <Navbar />;
      <div className="not-found">
        <h1>404</h1>
        <p>The page you were looking for was not found</p>
        <Link to="/">
            <button>Go to Homepage</button>
        </Link>
      </div>
    </>
  )
}

export default NotFound