import rick from "../../assets/rick.png";
import morty from "../../assets/morty.png";
import "./Header.css";

import Pages from "../pagination/Pagination";
import Search from "../search/Search";
import Title from "../title/title";
import Logo from "../logo/Logo";

export function Header() {
  return (
    <header className="header">
      <div className="header-branding">
        <Title text="Exploring" />
        <Logo src={rick} alt="Rick" />
        <Title text="Rick & Morty" />
        <Logo src={morty} alt="Morty" />
      </div>

      <nav className="header-nav">
        <ul className="nav-list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/episodes">Episodes</a>
          </li>
          <li>
            <a href="/locations">Locations</a>
          </li>
        </ul>
      </nav>
      <div className="header-tools">
        <Search></Search>
        <Pages></Pages>
      </div>
    </header>
  );
}

export default Header;
