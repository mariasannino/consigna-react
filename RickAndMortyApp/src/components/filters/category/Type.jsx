import useTypeLogic from "../../../hooks/useTypeLogic";
import FilterGroup from "../FilterGroup";
import "./category.css";
function Type() {
  const { selected, handleClick } = useTypeLogic();
  const locationTypes = [
    "Planet",
    "Cluster",
    "Space Station",
    "Microverse",
    "TV",
    "Resort",
    "Fantasy Town",
    "Dream",
    "Dimension",
    "Menagerie",
    "Game",
    "Customs",
    "Daycare",
    "Dwarf Planet (Celestial Dwarf)",
    "Miniverse",
    "Teenyverse",
    "Box",
    "Spacecraft",
    "Artificially Generated World",
    "Machine",
    "Arcade",
    "Spa",
    "Quadrant",
    "Quasar",
    "Mount",
    "Liquid",
    "Convention",
    "Woods",
    "Diegesis",
    "Non-Diegetic Alternative Reality",
    "Nightmare",
    "Asteroid",
    "Acid Plant",
    "Reality",
    "Death Star",
    "Base",
    "Elemental Rings",
    "Human",
    "Space",
    "Hell",
    "Police Department",
    "Country",
    "Consciousness",
    "Memory",
    "Unknown",
  ];

  return (
    <FilterGroup
      title="Type"
      options={locationTypes}
      selected={selected}
      onSelect={handleClick}
    />
  );
}

export default Type;
