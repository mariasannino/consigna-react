import "./Header.css";
import HeaderBranding from "./HeaderBranding";
import NavBar from "./NavBar";
import Search from "../search/Search";
import Pagination from "../pagination/Pagination";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

export function Header() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    setTheme(savedTheme);
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const location = useLocation();
  let context = "characters";
  if (location.pathname.includes("/characters/")) {
    context = "characters-details";
  } else if (location.pathname.includes("/episodes/")) {
    context = "episodes-details";
  } else if (location.pathname.includes("locations/")) {
    context = "locations-details";
  }

  return (
    <header className="header">
      <button onClick={toggleTheme} className="theme">
        {theme === "dark" ? "🌞 Light" : "🌙 Dark"}
      </button>

      <HeaderBranding />
      <div className="header-nav">
        <NavBar />
      </div>

      {context === "characters" && (
        <div className="header-tools">
          <Search />
          <Pagination />
        </div>
      )}
    </header>
  );
}

export default Header;
