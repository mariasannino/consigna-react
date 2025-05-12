import { useDispatch } from "react-redux";
import {
  setPageNum,
  searchCharacters,
  setSearchQuery,
} from "../../store/charactersSlice";
import "./Search.css";

function Search() {
  const dispatch = useDispatch();
  const handleSearch = (e) => {
    const value = e.target.value;
    dispatch(setSearchQuery(value));
    dispatch(setPageNum(1));
    dispatch(searchCharacters({ name: value, pageNum: 1 }));
  };

  return (
    <div className="disp">
      <form className="form">
        <input
          onChange={handleSearch}
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
