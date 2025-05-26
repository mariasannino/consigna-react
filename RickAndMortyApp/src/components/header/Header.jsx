import "./Header.css";
import HeaderBranding from "./HeaderBranding";
import NavMenu from "./NavBar";
import Search from "../search/Search";
import Pages from "../pagination/Pagination";

export function Header() {
  return (
    <header className="header">
      <HeaderBranding />
      <NavMenu />
      <div className="header-tools">
        <Search />
        <Pages />
      </div>
    </header>
  );
}

export default Header;
