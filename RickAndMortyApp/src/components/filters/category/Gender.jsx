import { useDispatch, useSelector } from "react-redux";
import {
  setGender,
  setPageNum,
  filterCharacters,
} from "../../../store/charactersSlice";
import "./category.css";

function Gender() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.characters.gender);
  const status = useSelector((state) => state.characters.status);
  const species = useSelector((state) => state.characters.species);
  const searchQuery = useSelector((state) => state.characters.searchQuery);

  let genders = ["female", "male", "genderless", "unknown"];

  const handleClick = (gender) => {
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
  };

  return (
    <div className="filter">
      <h1 className="filter-title">Gender</h1>
      {genders.map((item, index) => (
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

export default Gender;
