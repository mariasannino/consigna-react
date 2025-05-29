import { useDispatch, useSelector } from "react-redux";
import { useCallback, useEffect } from "react";
import { useLocation } from "react-router-dom";

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

import {
  setLocationPageNum,
  getLocationByPage,
  filterLocations,
} from "../store/locationsSlice";

const usePagesLogic = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  let context = "characters";
  if (location.pathname.includes("episodes")) {
    context = "episodes";
  } else if (location.pathname.includes("locations")) {
    context = "locations";
  }
  const pageNum = useSelector((state) => {
    if (context === "characters") {
      return state.characters.pageNum;
    } else if (context === "episodes") {
      return state.episodes.pageNum;
    } else {
      return state.locations.pageNum;
    }
  });

  const totalPages = useSelector((state) => {
    if (context === "characters") {
      return state.characters.totalPages;
    } else if (context === "episodes") {
      return state.episodes.totalPages;
    } else {
      return state.locations.totalPages;
    }
  });
  const searchQuery = useSelector((state) => {
    if (context === "characters") {
      return state.characters.searchQuery;
    } else if (context === "episodes") {
      return state.episodes.searchQuery;
    } else {
      return state.locations.searchQuery;
    }
  });
  const status = useSelector((state) =>
    context === "characters" ? state.characters.status : ""
  );
  const gender = useSelector((state) =>
    context === "characters" ? state.characters.gender : ""
  );
  const species = useSelector((state) =>
    context === "characters" ? state.characters.species : ""
  );

  const type = useSelector((state) =>
    context === "locations" ? state.locations.type : ""
  );

  const dimension = useSelector((state) =>
    context === "locations" ? state.locations.dimension : ""
  );

  const hasAnyFilter = useCallback(() => {
    if (context === "characters") {
      return searchQuery.trim() !== "" || status || gender || species;
    } else if (context === "locations") {
      return searchQuery.trim() !== "" || type || dimension;
    } else {
      return searchQuery.trim() !== "";
    }
  }, [context, searchQuery, status, gender, species, type, dimension]);

  const fetchPage = useCallback(() => {
    if (context === "characters") {
      if (hasAnyFilter()) {
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
      if (hasAnyFilter()) {
        dispatch(searchEpisodes({ name: searchQuery, pageNum }));
      } else {
        dispatch(getEpisodesByPage(pageNum));
      }
    } else if (context === "locations") {
      if (hasAnyFilter()) {
        dispatch(
          filterLocations({ name: searchQuery, type, dimension, pageNum })
        );
      } else {
        dispatch(getLocationByPage(pageNum));
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
    type,
    dimension,
  ]);

  useEffect(() => {
    fetchPage();
  }, [fetchPage]);

  const goToNextPage = () => {
    if (pageNum < totalPages) {
      if (context === "characters") {
        dispatch(setCharacterPageNum(pageNum + 1));
      } else if (context === "episodes") {
        dispatch(setEpisodePageNum(pageNum + 1));
      } else {
        dispatch(setLocationPageNum(pageNum + 1));
      }
    }
  };

  const goToPrevPage = () => {
    if (pageNum > 1) {
      if (context === "characters") {
        dispatch(setCharacterPageNum(pageNum - 1));
      } else if (context === "episodes") {
        dispatch(setEpisodePageNum(pageNum - 1));
      } else {
        dispatch(setLocationPageNum(pageNum - 1));
      }
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
