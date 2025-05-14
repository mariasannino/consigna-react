import { useDispatch, useSelector } from "react-redux";
import {
  setStatus,
  setPageNum,
  filterCharacters,
} from "../../../store/charactersSlice";
import "./category.css";

function Status() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.characters.status);

  const species = useSelector((state) => state.characters.species);
  const gender = useSelector((state) => state.characters.gender);
  const searchQuery = useSelector((state) => state.characters.searchQuery);

  let statusOptions = ["alive", "dead", "unknown"];

  const handleClick = (status) => {
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
  };

  console.log("Fetching status:", status);

  return (
    <div className="filter">
      <h1 className="filter-title">Status</h1>
      {statusOptions.map((item, index) => (
        <button
          key={index}
          className={selected === item ? " filter-btn selected" : "filter-btn"}
          onClick={() => handleClick(item)}
        >
          {item}
        </button>
      ))}
    </div>
  );
}

export default Status;
