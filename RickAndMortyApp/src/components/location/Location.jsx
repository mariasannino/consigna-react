import "./Location.css";
import { Link } from "react-router-dom";
import Info from "../info/Info";

const Location = ({ location }) => (
  <Link to={`/locations/${location.id}`} className="location-card">
    <h2>{location.name}</h2>
    <Info label="Type" value={location.type} />
    <Info label="Dimension" value={location.dimension} />
  </Link>
);

export default Location;
