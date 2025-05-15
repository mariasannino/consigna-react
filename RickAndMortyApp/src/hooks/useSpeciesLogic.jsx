import { useDispatch, useSelector } from "react-redux";
import {
  setSpecies,
  setPageNum,
  filterCharacters,
} from "../store/charactersSlice";
import { useCallback } from "react";

function useSpeciesLogic() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.characters.species);
  const status = useSelector((state) => state.characters.status);
  const gender = useSelector((state) => state.characters.gender);
  const searchQuery = useSelector((state) => state.characters.searchQuery);

  const handleClick = useCallback(
    (species) => {
      const newSpecies = selected === species ? "" : species;
      dispatch(setSpecies(newSpecies));
      dispatch(setPageNum(1));
      dispatch(
        filterCharacters({
          name: searchQuery,
          status,
          gender,
          species: newSpecies,
          pageNum: 1,
        })
      );
    },
    [dispatch, selected, searchQuery, status, gender]
  );
  return { selected, handleClick };
}

export default useSpeciesLogic;
