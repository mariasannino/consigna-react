import useSpeciesLogic from "../../../hooks/useSpeciesLogic";
import FilterGroup from "../FilterGroup";

function Species() {
  const { selected, handleClick } = useSpeciesLogic();
  const species = [
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
    <FilterGroup
      title="Species"
      options={species}
      selected={selected}
      onSelect={handleClick}
    />
  );
}

export default Species;
