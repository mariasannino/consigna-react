import rick from "../../assets/rick.png";
import morty from "../../assets/morty.png";
import "./Header.css";
import Pages from "../pages/pages";
import Search from "../search/Search";
import Title from "../title/title";
import Logo from "../logo/Logo";

export function Header() {
  return (
    <header className="main-header">
      <div className="header-container1">
        <Title text="Exploring" />
        <Logo src={rick} alt="Rick" />
        <Title text="Rick & Morty" />
        <Logo src={morty} alt="Morty" />
      </div>
      <div className="header-container2">
        <Search></Search>
        <Pages></Pages>
      </div>
    </header>
  );
}

export default Header;
