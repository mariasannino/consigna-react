import rick from "../../assets/rick.png";
import morty from "../../assets/morty.png";
import "./Header.css";
import Pages from "../pages/pages";
import Search from "../search/Search";
export function Header({ setCharacters }) {
  return (
    <header className="main-header">
      <div className="header-container1">
        <h1 className="title"> Exploring </h1>
        <img
          src={rick}
          alt="the logo of the web. A chair and the name (Mobiliarium)"
          className="logo"
        />
        <h1 className="title"> Rick & Morty </h1>
        <img
          src={morty}
          alt="the logo of the web. A chair and the name (Mobiliarium)"
          className="logo"
        />
      </div>
      <div className="header-container2">
        <Search></Search>
        <Pages setCharacters={setCharacters}></Pages>
      </div>
    </header>
  );
}

export default Header;
