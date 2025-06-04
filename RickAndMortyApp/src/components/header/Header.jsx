import "./Header.css";
import HeaderBranding from "./HeaderBranding";
import NavMenu from "./NavBar";
import Search from "../search/Search";
import Pagination from "../pagination/Pagination";
import { useLocation } from "react-router-dom";
export function Header() {
  const location = useLocation();
  let context = "characters";
  if (location.pathname.includes("/characters/")) {
    context = "characters-details";
  } else if (location.pathname.includes("/episodes/")) {
    context = "episodes-details";
  } else if (location.pathname.includes("locations/")) {
    context = "locations-details";
  }

  if (context === "characters") {
    return (
      <header className="header">
        <HeaderBranding />
        <NavMenu />
        <div className="header-tools">
          <Search />
          <Pagination />
        </div>
      </header>
    );
  } else {
    return (
      <header className="header">
        <HeaderBranding />
        <NavMenu />
      </header>
    );
  }
}

export default Header;
