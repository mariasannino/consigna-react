import "./App.css";
import Characters from "./components/characters/Characters";
import Filters from "./components/filters/Filters";
import Header from "./components/header/Header";

function App() {
  return (
    <>
      <Header></Header>;
      <div className="container">
        <Filters></Filters>
        <Characters></Characters>
      </div>
    </>
  );
}

export default App;
