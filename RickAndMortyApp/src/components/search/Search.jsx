import React from "react";
import "./Search.css";
function Search() {
  return (
    <div className="disp">
      <form className="form">
        <input placeholder="Search Characters ... " type="text" />
        <button>Search</button>
      </form>
    </div>
  );
}

export default Search;
