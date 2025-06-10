const NavBar = ({ isOpen }) => (
  <nav className={`header-nav ${isOpen ? "active" : ""}`}>
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
);

export default NavBar;
