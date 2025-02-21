import { useMovies } from "../context/MovieContext";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

function popularPagination() {
  const { popularPage, setPopularPage, totalPopularPages } = useMovies();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const pageFromUrl = Number(searchParams.get("page")) || 1;
    if (pageFromUrl !== popularPage) {
      setPopularPage(pageFromUrl);
    }
    window.scrollTo(0, 0);
  }, [searchParams]);

  return (
    <div className="pagination">
      {popularPage > 1 && (
        <div className="page-arrow">
          <Link
            to={`/Popular_movies?page=${popularPage - 1}`}
            onClick={() => {
              setPopularPage(popularPage - 1);
              setSearchParams({ page: popularPage - 1 });
            }}
          >
            <ChevronLeft size={30} />
          </Link>
        </div>
      )}
      <p>Page {popularPage}</p>
      {popularPage < totalPopularPages && (
        <div className="page-arrow">
          <Link
            to={`/Popular_movies?page=${popularPage + 1}`}
            onClick={() => {
              setPopularPage(popularPage + 1);
              setSearchParams({ page: popularPage + 1 });
            }}
          >
            <ChevronRight size={30} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default popularPagination;
