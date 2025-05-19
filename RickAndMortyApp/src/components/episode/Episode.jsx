import "./Episode.css";
import { Link } from "react-router-dom";

const Episode = ({ episode }) => (
  <Link to={`/episodes/${episode.id}`} className="episode-card">
    <h2>{episode.name}</h2>
    <p>
      <strong>Air Date:</strong> {episode.air_date}
    </p>
    <p>
      <strong>Code:</strong> {episode.episode}
    </p>
  </Link>
);

export default Episode;
