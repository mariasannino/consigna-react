import { useState } from "react";
import "./App.css";
import Characters from "./components/characters/Characters";
import Filters from "./components/filters/Filters";
import Header from "./components/header/Header";
import Search from "./components/search/Search";
function App() {
  const [characters, setCharacters] = useState([]);
  return (
    <>
      <Header setCharacters={setCharacters}></Header>

      <div className="container">
        <Filters></Filters>
        <Characters characters={characters}></Characters>
      </div>
    </>
  );
}

export default App;
