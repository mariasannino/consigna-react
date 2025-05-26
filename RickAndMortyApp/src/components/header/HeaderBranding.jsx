import Title from "../title/title";
import Logo from "../logo/Logo";
import rick from "../../assets/rick.png";
import morty from "../../assets/morty.png";

const HeaderBranding = () => (
  <div className="header-branding">
    <Title text="Exploring" />
    <Logo src={rick} alt="Rick" />
    <Title text="Rick & Morty" />
    <Logo src={morty} alt="Morty" />
  </div>
);

export default HeaderBranding;
