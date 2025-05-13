import { useDispatch } from "react-redux";
import {
  setPageNum,
  searchCharacters,
  setSearchQuery,
  getCharacters,
} from "../store/charactersSlice";

const useSearchLogic = () => {
  const dispatch = useDispatch();

  const handleSearchInput = (value) => {
    dispatch(setSearchQuery(value));
    dispatch(setPageNum(1));

    if (value.trim() === "") {
      dispatch(getCharacters());
    } else {
      dispatch(searchCharacters({ name: value, pageNum: 1 }));
    }
  };
  return { handleSearchInput };
};

export default useSearchLogic;
