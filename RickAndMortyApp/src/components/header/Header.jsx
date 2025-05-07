import rick from "../../assets/rick.png";
import morty from "../../assets/morty.png";
import "./Header.css";

export function Header() {
  return (
    <header className="main-header">
      <div className="header-container">
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
    </header>
  );
}

export default Header;
