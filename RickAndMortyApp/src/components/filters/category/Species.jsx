import useSpeciesLogic from "../../../hooks/useSpeciesLogic";
import "./category.css";

function Species() {
  const { selected, handleClick } = useSpeciesLogic();
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
