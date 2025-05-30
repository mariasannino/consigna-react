import useDimensionLogic from "../../../hooks/useDimensionLogic";
import FilterGroup from "../FilterGroup";
import "./category.css";
function Dimesnion() {
  const { selected, handleClick } = useDimensionLogic();
  const locationDimensions = [
    "Dimension C-137",
    "Replacement Dimension",
    "Cronenberg Dimension",
    "Dimension 5-126",
    "Dimension J19ζ7",
    "Dimension K-83",
    "Dimension D-99",
    "Dimension D716",
    "Dimension D716-B",
    "Dimension D716-C",
    "Dimension J-22",
    "Dimension K-22",
    "Dimension C-35",
    "Dimension C-500A",
    "Unknown",
  ];

  return (
    <FilterGroup
      title="Dimension"
      options={locationDimensions}
      selected={selected}
      onSelect={handleClick}
    />
  );
}

export default Dimesnion;
