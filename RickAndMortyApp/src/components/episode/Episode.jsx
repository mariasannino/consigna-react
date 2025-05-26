import "./Episode.css";
import { Link } from "react-router-dom";
import Info from "../info/Info";

const Episode = ({ episode }) => (
  <Link to={`/episodes/${episode.id}`} className="episode-card">
    <h2>{episode.name}</h2>
    <Info label="Air Date" value={episode.air_date} />
    <Info label="Code" value={episode.episode} />
  </Link>
);

export default Episode;
