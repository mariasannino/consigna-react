import React from "react";
import Characters from "../components/characters/Characters";
import Filters from "../components/filters/Filters";
import "../App.css";
function Home() {
  return (
    <div className="container">
      <Filters></Filters>
      <Characters></Characters>
    </div>
  );
}

export default Home;
