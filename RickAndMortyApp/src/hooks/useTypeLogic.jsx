import { useDispatch, useSelector } from "react-redux";
import {
  setType,
  setLocationPageNum,
  filterLocations,
} from "../store/locationsSlice";
import { useCallback } from "react";

function useTypeLogic() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.locations.type);
  const searchQuery = useSelector((state) => state.locations.searchQuery);

  const handleClick = useCallback(
    (type) => {
      const newType = selected === type ? "" : type;
      dispatch(setType(newType));
      dispatch(setLocationPageNum(1));
      dispatch(
        filterLocations({
          name: searchQuery,
          type,
          pageNum: 1,
        })
      );
    },
    [dispatch, selected, searchQuery]
  );
  return { selected, handleClick };
}

export default useTypeLogic;
