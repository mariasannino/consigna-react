import useStatusLogic from "../../../hooks/useStatusLogic";
import "./category.css";

function Status() {
  const { selected, handleClick } = useStatusLogic();
  let statusOptions = ["alive", "dead", "unknown"];

  return (
    <div className="filter">
      <h1 className="filter-title">Status</h1>
      {statusOptions.map((item, index) => (
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

export default Status;
