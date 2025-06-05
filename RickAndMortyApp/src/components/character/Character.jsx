import React from "react";
import { Link } from "react-router-dom";
import StatusBadge from "../statusBadge/StatusBadge";
import "./Character.css";

const Character = ({ character }) => {
  return (
    <Link to={`/characters/${character.id}`} className="character-card">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />
      <h3>
        <span>📍</span>
        {character.location?.name || "Unknown Location"}
      </h3>
      <StatusBadge status={character.status} />
    </Link>
  );
};

export default Character;
