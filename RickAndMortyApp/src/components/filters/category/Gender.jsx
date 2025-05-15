import useGenderLogic from "../../../hooks/useGenderLogic";
import "./category.css";

function Gender() {
  const { selected, handleClick } = useGenderLogic();
  const genders = ["female", "male", "genderless", "unknown"];
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
