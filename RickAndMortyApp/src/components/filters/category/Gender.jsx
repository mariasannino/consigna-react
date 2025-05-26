import useGenderLogic from "../../../hooks/useGenderLogic";
import "./category.css";
import FilterGroup from "../FilterGroup";
function Gender() {
  const { selected, handleClick } = useGenderLogic();
  const genders = ["female", "male", "genderless", "unknown"];

  return (
    <FilterGroup
      title="Gender"
      options={genders}
      selected={selected}
      onSelect={handleClick}
    />
  );
}

export default Gender;
