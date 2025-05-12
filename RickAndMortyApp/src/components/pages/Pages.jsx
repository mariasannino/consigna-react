import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getCharactersByPage,
  setPageNum,
  searchCharacters,
} from "../../store/charactersSlice";
import right from "../../assets/right.png";
import left from "../../assets/left.png";
import "./Pages.css";

function Pages() {
  const dispatch = useDispatch();
  const pageNum = useSelector((state) => state.characters.pageNum);
  const SearchQuery = useSelector((state) => state.characters.SearchQuery);
  useEffect(() => {
    if (SearchQuery) {
      dispatch(searchCharacters({ name: SearchQuery, pageNum }));
    } else {
      dispatch(getCharactersByPage(pageNum));
    }
  }, [pageNum, SearchQuery, dispatch]);

  const next = () => {
    dispatch(setPageNum(pageNum < 42 ? pageNum + 1 : 42));
  };
  const prev = () => {
    dispatch(setPageNum(pageNum > 1 ? pageNum - 1 : 1));
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
