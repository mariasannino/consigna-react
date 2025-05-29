import "./Episode.css";
import { Link } from "react-router-dom";
import Info from "../info/Info";
import { getEpisodeImage } from "./episodeImages";

const Episode = ({ episode }) => {
  const imageSrc = getEpisodeImage(episode.name);
  return (
    <Link to={`/episodes/${episode.id}`} className="episode-card">
      <h2>{episode.name}</h2>
      {imageSrc && (
        <img src={imageSrc} alt={episode.name} className="episode-image" />
      )}
      <Info label=<strong>Air Date</strong> value={episode.air_date} />
      <Info label=<strong>Code</strong> value={episode.episode} />
    </Link>
  );
};

export default Episode;
