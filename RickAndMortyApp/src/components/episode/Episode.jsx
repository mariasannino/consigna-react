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
      <Info label={"Air Date"} value={episode.air_date} />
      <Info label={"Code"} value={episode.episode} />
    </Link>
  );
};

export default Episode;
