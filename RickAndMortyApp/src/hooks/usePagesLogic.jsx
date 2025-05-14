import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import {
  setPageNum,
  getCharactersByPage,
  filterCharacters,
} from "../store/charactersSlice";

const usePagesLogic = () => {
  const dispatch = useDispatch();
  const pageNum = useSelector((state) => state.characters.pageNum);
  const totalPages = useSelector((state) => state.characters.totalPages);
  const searchQuery = useSelector((state) => state.characters.searchQuery);
  const status = useSelector((state) => state.characters.status);
  const gender = useSelector((state) => state.characters.gender);
  const species = useSelector((state) => state.characters.species);

  const hasAnyFilter = searchQuery.trim() !== "" || status || gender || species;

  const fetchPage = useCallback(() => {
    if (hasAnyFilter) {
      dispatch(
        filterCharacters({
          name: searchQuery,
          status,
          gender,
          species,
          pageNum,
        })
      );
    } else {
      dispatch(getCharactersByPage(pageNum));
    }
  }, [dispatch, pageNum, searchQuery, status, gender, species, hasAnyFilter]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

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

  return {
    pageNum,
    totalPages,
    goToNextPage,
    goToPrevPage,
    fetchPage,
  };
};

export default usePagesLogic;
