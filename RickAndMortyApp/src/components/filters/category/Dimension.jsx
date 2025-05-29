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
    "Dimension C-500B",
    "Dimension C-500C",
    "Dimension C-500D",
    "Dimension C-500E",
    "Dimension C-500F",
    "Dimension C-500G",
    "Dimension C-500H",
    "Dimension C-500I",
    "Dimension C-500J",
    "Dimension C-500K",
    "Dimension C-500L",
    "Dimension C-500M",
    "Dimension C-500N",
    "Dimension C-500O",
    "Dimension C-500P",
    "Dimension C-500Q",
    "Dimension C-500R",
    "Dimension C-500S",
    "Dimension C-500T",
    "Dimension C-500U",
    "Dimension C-500V",
    "Dimension C-500W",
    "Dimension C-500X",
    "Dimension C-500Y",
    "Dimension C-500Z",
    "Dimension C-501A",
    "Dimension C-501B",
    "Dimension C-501C",
    "Dimension C-501D",
    "Dimension C-501E",
    "Dimension C-501F",
    "Dimension C-501G",
    "Dimension C-501H",
    "Dimension C-501I",
    "Dimension C-501J",
    "Dimension C-501K",
    "Dimension C-501L",
    "Dimension C-501M",
    "Dimension C-501N",
    "Dimension C-501O",
    "Dimension C-501P",
    "Dimension C-501Q",
    "Dimension C-501R",
    "Dimension C-501S",
    "Dimension C-501T",
    "Dimension C-501U",
    "Dimension C-501V",
    "Dimension C-501W",
    "Dimension C-501X",
    "Dimension C-501Y",
    "Dimension C-501Z",
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
