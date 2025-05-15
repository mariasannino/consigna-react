import { useDispatch, useSelector } from "react-redux";
import {
  setGender,
  setPageNum,
  filterCharacters,
} from "../store/charactersSlice";
import { useCallback } from "react";

function useGenderLogic() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.characters.gender);
  const status = useSelector((state) => state.characters.status);
  const species = useSelector((state) => state.characters.species);
  const searchQuery = useSelector((state) => state.characters.searchQuery);

  const handleClick = useCallback(
    (gender) => {
      const newGender = selected === gender ? "" : gender;
      dispatch(setGender(newGender));
      dispatch(setPageNum(1));
      dispatch(
        filterCharacters({
          name: searchQuery,
          status,
          gender: newGender,
          species,
          pageNum: 1,
        })
      );
    },
    [dispatch, selected, searchQuery, status, species]
  );
  return { selected, handleClick };
}

export default useGenderLogic;
