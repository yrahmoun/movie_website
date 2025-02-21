import { useMovies } from "../context/MovieContext";
import { Link, useSearchParams } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect } from "react";

function TopRatedPagination() {
  const { topRatedPage, setTopRatedPage, totalTopRatedPages } = useMovies();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const pageFromUrl = Number(searchParams.get("page")) || 1;
    if (pageFromUrl !== topRatedPage) {
      setTopRatedPage(pageFromUrl);
    }
    window.scrollTo(0, 0);
  }, [searchParams]);

  return (
    <div className="pagination">
      {topRatedPage > 1 && (
        <div className="page-arrow">
          <Link
            to={`/TopRated_movies?page=${topRatedPage - 1}`}
            onClick={() => {
              setTopRatedPage(topRatedPage - 1);
              setSearchParams({ page: topRatedPage - 1 });
            }}
          >
            <ChevronLeft size={30} />
          </Link>
        </div>
      )}
      <p>Page {topRatedPage}</p>
      {topRatedPage < totalTopRatedPages && (
        <div className="page-arrow">
          <Link
            to={`/TopRated_movies?page=${topRatedPage + 1}`}
            onClick={() => {
              setTopRatedPage(topRatedPage + 1);
              setSearchParams({ page: topRatedPage + 1 });
            }}
          >
            <ChevronRight size={30} />
          </Link>
        </div>
      )}
    </div>
  );
}

export default TopRatedPagination;
