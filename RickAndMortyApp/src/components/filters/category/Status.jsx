import useStatusLogic from "../../../hooks/useStatusLogic";
import FilterGroup from "../FilterGroup";

function Status() {
  const { selected, handleClick } = useStatusLogic();
  const statusOptions = ["alive", "dead", "unknown"];

  return (
    <FilterGroup
      title="Status"
      options={statusOptions}
      selected={selected}
      onSelect={handleClick}
    />
  );
}

export default Status;
