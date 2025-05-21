import { useDispatch, useSelector } from "react-redux";
import {
  setPageNum as setCharacterPageNum,
  setSearchQuery as setCharacterSearchQuery,
  filterCharacters,
} from "../store/charactersSlice";
import {
  setEpisodePageNum,
  setSearchQuery as setEpisodeSearchQuery,
  searchEpisodes,
} from "../store/episodesSlice";
import { useLocation } from "react-router-dom";

const useSearchLogic = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  let context = "characters";
  if (location.pathname.includes("episodes")) {
    context = "episodes";
  } else if (location.pathname.includes("locations")) {
    context = "locations";
  }

  const status = useSelector((state) =>
    context === "characters" ? state.characters.status : ""
  );
  const gender = useSelector((state) =>
    context === "characters" ? state.characters.gender : ""
  );
  const species = useSelector((state) =>
    context === "characters" ? state.characters.species : ""
  );

  const handleSearchInput = (value) => {
    if (context === "characters") {
      dispatch(setCharacterSearchQuery(value));
      dispatch(setCharacterPageNum(1));
      dispatch(
        filterCharacters({
          name: value,
          status,
          gender,
          species,
          pageNum: 1,
        })
      );
    } else if (context === "episodes") {
      dispatch(setEpisodeSearchQuery(value));
      dispatch(setEpisodePageNum(1));
      dispatch(searchEpisodes({ name: value, pageNum: 1 }));
    }
  };
  return { handleSearchInput };
};

export default useSearchLogic;
