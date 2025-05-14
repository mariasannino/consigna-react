import { useDispatch, useSelector } from "react-redux";
import {
  setSpecies,
  setPageNum,
  filterCharacters,
} from "../../../store/charactersSlice";
import "./category.css";

function Species() {
  const dispatch = useDispatch();
  const selected = useSelector((state) => state.characters.species);
  const status = useSelector((state) => state.characters.status);
  const gender = useSelector((state) => state.characters.gender);
  const searchQuery = useSelector((state) => state.characters.searchQuery);

  let species = [
    "human",
    "alien",
    "humanoid",
    "poopybutthole",
    "mythological",
    "unknown",
    "animal",
    "disease",
    "robot",
    "cronenberg",
    "planet",
  ];

  const handleClick = (species) => {
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
  };
  return (
    <div className="filter">
      <h1 className="filter-title">Species</h1>
      {species.map((item, index) => (
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

export default Species;
