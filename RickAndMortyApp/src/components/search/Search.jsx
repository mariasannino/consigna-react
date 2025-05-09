import { useState, useEffect } from "react";
import "./Search.css";
import { fetchSearchFilter } from "../../services/api";

function Search({ setCharacters }) {
  let [search, setSearch] = useState("");
  useEffect(() => {
    async function getSearch() {
      const data = await fetchSearchFilter(search);
      setCharacters(data);
    }
    getSearch();
  }, [search, setCharacters]);

  return (
    <div className="disp">
      <form className="form">
        <input
          onChange={(e) => {
            setSearch(e.target.value);
          }}
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
