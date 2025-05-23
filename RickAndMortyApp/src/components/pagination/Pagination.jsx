import { useEffect } from "react";
import usePagesLogic from "../../hooks/usePagesLogic";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import "./Pagination.css";

function Pages({ context }) {
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
