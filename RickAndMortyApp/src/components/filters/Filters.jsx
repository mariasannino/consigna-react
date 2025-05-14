import React from "react";
import "./Filters.css";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";

export default function Filters() {
  return (
    <div>
      <div className="filter-container">
        <h1 className="filters-title">Filters</h1>
        <Gender />
        <Species />
        <Status />
      </div>
    </div>
  );
}
