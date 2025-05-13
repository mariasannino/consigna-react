import { useEffect } from "react";
import usePagesLogic from "../../hooks/usePagesLogic";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import "./Pages.css";

function Pages() {
  const { pageNum, totalPages, goToNextPage, goToPrevPage, fetchPage } =
    usePagesLogic();

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
