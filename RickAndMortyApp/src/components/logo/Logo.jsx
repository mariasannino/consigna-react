import "./Logo.css";

const Logo = ({ src, alt }) => {
  return <img src={src} alt={alt} className="logo" />;
};

export default Logo;
