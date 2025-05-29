import React from "react";
import "./Filters.css";
import Gender from "./category/Gender";
import Species from "./category/Species";
import Status from "./category/Status";
import { useLocation } from "react-router-dom";
import Type from "./category/type";
import Dimesnion from "./category/Dimension";

export default function Filters() {
  const location = useLocation();

  let context = "characters";
  if (location.pathname.includes("episodes")) {
    context = "episodes";
  } else if (location.pathname.includes("locations")) {
    context = "locations";
  }
  if (context === "characters") {
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
  } else if (context === "locations") {
    return (
      <div>
        <div className="filter-container">
          <h1 className="filters-title">Filters</h1>
          <Type />
          <Dimesnion />
        </div>
      </div>
    );
  }
}
