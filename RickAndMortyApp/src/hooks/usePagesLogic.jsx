import { useDispatch, useSelector } from "react-redux";
import {
  setPageNum,
  getCharactersByPage,
  searchCharacters,
} from "../store/charactersSlice";

const usePagesLogic = () => {
  const dispatch = useDispatch();
  const pageNum = useSelector((state) => state.characters.pageNum);
  const totalPages = useSelector((state) => state.characters.totalPages);
  const searchQuery = useSelector((state) => state.characters.searchQuery);

  const goToNextPage = () => {
    if (pageNum < totalPages) {
      dispatch(setPageNum(pageNum + 1));
    }
  };

  const goToPrevPage = () => {
    if (pageNum > 1) {
      dispatch(setPageNum(pageNum - 1));
    }
  };

  const fetchPage = () => {
    if (searchQuery.trim() !== "") {
      dispatch(searchCharacters({ name: searchQuery, pageNum }));
    } else {
      dispatch(getCharactersByPage(pageNum));
    }
  };

  return {
    pageNum,
    totalPages,
    goToNextPage,
    goToPrevPage,
    fetchPage,
  };
};

export default usePagesLogic;
