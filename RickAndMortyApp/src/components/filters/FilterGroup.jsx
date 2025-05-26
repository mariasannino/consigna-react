const FilterGroup = ({ title, options, selected, onSelect }) => (
  <div className="filter">
    <h1 className="filter-title">{title}</h1>
    {options.map((item, index) => (
      <button
        key={index}
        className={selected === item ? "filter-btn selected" : "filter-btn"}
        onClick={() => onSelect(item)}
      >
        {item}
      </button>
    ))}
  </div>
);

export default FilterGroup;
