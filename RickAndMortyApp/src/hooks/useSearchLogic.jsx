import { useDispatch, useSelector } from "react-redux";
import {
  setPageNum,
  setSearchQuery,
  filterCharacters,
} from "../store/charactersSlice";

const useSearchLogic = () => {
  const dispatch = useDispatch();

  const status = useSelector((state) => state.characters.status);
  const gender = useSelector((state) => state.characters.gender);
  const species = useSelector((state) => state.characters.species);

  const handleSearchInput = (value) => {
    dispatch(setSearchQuery(value));
    dispatch(setPageNum(1));
    dispatch(
      filterCharacters({
        name: value,
        status,
        gender,
        species,
        pageNum: 1,
      })
    );
  };
  return { handleSearchInput };
};

export default useSearchLogic;
