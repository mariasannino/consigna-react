import { useDispatch, useSelector } from "react-redux";
import { useCallback } from "react";

import {
  setStatus,
  setPageNum,
  filterCharacters,
} from "../store/charactersSlice";

function useStatusLogic() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.characters.status);

  const species = useSelector((state) => state.characters.species);
  const gender = useSelector((state) => state.characters.gender);
  const searchQuery = useSelector((state) => state.characters.searchQuery);

  const handleClick = useCallback(
    (status) => {
      const newStatus = selected === status ? "" : status;
      dispatch(setStatus(newStatus));
      dispatch(setPageNum(1));

      dispatch(
        filterCharacters({
          name: searchQuery,
          status: newStatus,
          gender,
          species,
          pageNum: 1,
        })
      );
    },
    [dispatch, selected, searchQuery, gender, species]
  );
  return { selected, handleClick };
}

export default useStatusLogic;
