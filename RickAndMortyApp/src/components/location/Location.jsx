import "./Location.css";
import { Link } from "react-router-dom";
import Info from "../info/Info";
import { getLocationImage } from "./locationImages";

const Location = ({ location }) => {
  const imageSrc = getLocationImage(location.name);

  return (
    <Link to={`/locations/${location.id}`} className="location-card">
      <h2>{location.name}</h2>
      {imageSrc && (
        <img src={imageSrc} alt={location.name} className="location-image" />
      )}
      <Info label=<strong>Type</strong> value={location.type} />
      <Info label=<strong>Dimension</strong> value={location.dimension} />
    </Link>
  );
};

export default Location;
