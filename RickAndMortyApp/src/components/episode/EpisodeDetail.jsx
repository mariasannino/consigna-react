import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Character from "../character/character";
import "./Episode.css";

const EpisodeDetail = () => {
  const { id } = useParams();
  const [episode, setEpisode] = useState(null);
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const fetchEpisode = async () => {
      const res = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
      const data = await res.json();
      setEpisode(data);

      const characterData = await Promise.all(
        data.characters.map((url) => fetch(url).then((res) => res.json()))
      );
      setCharacters(characterData);
    };

    fetchEpisode();
  }, [id]);

  if (!episode) return <p>Loading...</p>;

  return (
    <div>
      <div className="title-container">
        <h1>{episode.name}</h1>
        <p>
          <strong>Air Date:</strong> {episode.air_date}
        </p>
        <p>
          <strong>Episode:</strong> {episode.episode}
        </p>
      </div>

      <div className="characters-container">
        {characters.map((char) => (
          <Character key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default EpisodeDetail;
