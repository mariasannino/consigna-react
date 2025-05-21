import "./Location.css";
import { Link } from "react-router-dom";

const Location = ({ location }) => (
  <Link to={`/locations/${location.id}`} className="location-card">
    <h2>{location.name}</h2>
    <p>
      <strong>Type:</strong> {location.type}
    </p>
    <p>
      <strong>Dimension:</strong> {location.dimension}
    </p>
  </Link>
);

export default Location;
