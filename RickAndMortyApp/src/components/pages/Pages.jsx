import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import usePagesLogic from "../../hooks/usePagesLogic";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import "./Pages.css";

function Pages() {
  const location = useLocation();

  let context = "characters";
  if (location.pathname.includes("episodes")) {
    context = "episodes";
  } else if (location.pathname.includes("locations")) {
    context = "locations";
  }

  const { pageNum, totalPages, goToNextPage, goToPrevPage, fetchPage } =
    usePagesLogic(context);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  return (
    <div className="pages">
      <button className="nav" onClick={goToPrevPage}>
        <img className="arrow" src={left} />
      </button>
      <p>{pageNum}</p>
      <button
        className="nav"
        onClick={goToNextPage}
        disabled={pageNum >= totalPages}
      >
        <img className="arrow" src={right} />
      </button>
    </div>
  );
}

export default Pages;
//icon author :<a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons">Arrows icons created by Freepik - Flaticon</a>
