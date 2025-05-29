import { useDispatch, useSelector } from "react-redux";
import {
  setDimension,
  setLocationPageNum,
  filterLocations,
} from "../store/locationsSlice";
import { useCallback } from "react";

function useDimensionLogic() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.locations.dimension);
  const type = useSelector((state) => state.locations.type);
  const searchQuery = useSelector((state) => state.locations.searchQuery);

  const handleClick = useCallback(
    (dimension) => {
      const newDimension = selected === dimension ? "" : dimension;
      dispatch(setDimension(newDimension));
      dispatch(setLocationPageNum(1));
      dispatch(
        filterLocations({
          name: searchQuery,
          type,
          dimension: newDimension,
          pageNum: 1,
        })
      );
    },
    [dispatch, selected, searchQuery, type]
  );

  return { selected, handleClick };
}

export default useDimensionLogic;
