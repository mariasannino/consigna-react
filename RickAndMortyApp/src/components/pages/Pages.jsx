import React from "react";
import { useState, useEffect } from "react";
import { fetchPages } from "../../services/api";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import "./Pages.css";

function Pages({ setCharacters }) {
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    async function getPage() {
      const data = await fetchPages(pageNum);
      setCharacters(data);
    }
    getPage();
  }, [pageNum, setCharacters]);

  let next = () => {
    setPageNum((num) => (num < 42 ? num + 1 : 42));
  };
  let prev = () => {
    setPageNum((num) => (num > 1 ? num - 1 : 1));
  };
  return (
    <div className="pages">
      <button className="nav" onClick={prev}>
        <img className="arrow" src={left} />
      </button>
      <p>{pageNum}</p>
      <button className="nav" onClick={next}>
        {" "}
        <img className="arrow" src={right} />
      </button>
    </div>
  );
}

export default Pages;
//icon author :<a href="https://www.flaticon.com/free-icons/arrows" title="arrows icons">Arrows icons created by Freepik - Flaticon</a>
