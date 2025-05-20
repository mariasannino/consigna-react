import useSearchLogic from "../../hooks/useSearchLogic";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";

function Search() {
  const location = useLocation();

  let context = "characters";
  if (location.pathname.includes("episodes")) {
    context = "episodes";
  } else if (location.pathname.includes("locations")) {
    context = "locations";
  }
  const { handleSearchInput } = useSearchLogic();
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    handleSearchInput(value);
  };

  return (
    <div className="disp">
      <form className="form">
        <input
          value={inputValue}
          onChange={handleChange}
          placeholder="Search Characters ... "
          type="text"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default Search;
