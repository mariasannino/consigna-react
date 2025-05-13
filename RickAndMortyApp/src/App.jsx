import "./App.css";
import Characters from "./components/characters/Characters";
import Filters from "./components/filters/Filters";
import Header from "./components/header/Header";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getCharacters } from "./store/charactersSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, [dispatch]);

  return (
    <>
      <Header></Header>

      <div className="container">
        <Filters></Filters>
        <Characters></Characters>
      </div>
    </>
  );
}

export default App;
