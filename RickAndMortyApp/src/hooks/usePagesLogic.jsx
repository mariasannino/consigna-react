import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import {
  setPageNum as setCharacterPageNum,
  getCharactersByPage,
  filterCharacters,
} from "../store/charactersSlice";
import {
  setEpisodePageNum,
  getEpisodesByPage,
  searchEpisodes,
} from "../store/episodesSlice";

const usePagesLogic = (context = "characters") => {
  const dispatch = useDispatch();
  const pageNum = useSelector((state) =>
    context === "characters" ? state.characters.pageNum : state.episodes.pageNum
  );
  const totalPages = useSelector((state) =>
    context === "characters"
      ? state.characters.totalPages
      : state.episodes.totalPages
  );
  const searchQuery = useSelector((state) =>
    context === "characters"
      ? state.characters.searchQuery
      : state.episodes.searchQuery
  );
  const status = useSelector((state) =>
    context === "characters" ? state.characters.status : ""
  );
  const gender = useSelector((state) =>
    context === "characters" ? state.characters.gender : ""
  );
  const species = useSelector((state) =>
    context === "characters" ? state.characters.species : ""
  );

  const hasAnyFilter =
    context === "characters"
      ? searchQuery.trim() !== "" || status || gender || species
      : searchQuery.trim() !== "";

  const fetchPage = useCallback(() => {
    if (context === "characters") {
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
    } else if (context === "episodes") {
      if (searchQuery.trim() !== "") {
        dispatch(searchEpisodes({ name: searchQuery, pageNum }));
      } else {
        dispatch(getEpisodesByPage(pageNum));
      }
    }
  }, [
    dispatch,
    context,
    pageNum,
    searchQuery,
    status,
    gender,
    species,
    hasAnyFilter,
  ]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  const goToNextPage = () => {
    if (pageNum < totalPages) {
      dispatch(
        context === "characters"
          ? setCharacterPageNum(pageNum + 1)
          : setEpisodePageNum(pageNum + 1)
      );
    }
  };

  const goToPrevPage = () => {
    if (pageNum > 1) {
      dispatch(
        context === "characters"
          ? setCharacterPageNum(pageNum - 1)
          : setEpisodePageNum(pageNum - 1)
      );
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
