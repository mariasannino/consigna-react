import { fetchCharacterById } from "../../services/api";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Character.css";
import StatusBadge from "../statusBadge/StatusBadge";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacter() {
      try {
        const data = await fetchCharacterById(id);
        setCharacter(data);
      } catch (error) {
        console.error("Error fetching character:", error);
        setCharacter(null);
      } finally {
        setLoading(false);
      }
    }

    loadCharacter();
  }, [id]);

  if (loading) return <div className="loading">Loading character...</div>;
  if (!character) return <div className="error">Character not found.</div>;

  return (
    <div className="character-details-container">
      <h1 className="char-name">{character.name}</h1>
      <img src={character.image} alt={character.name} />
      <div className="char-info">
        <div className="char-info-det container-status">
          <strong>Status:</strong>
          <StatusBadge status={character.status} />
        </div>
        <p className="char-info-det">
          <strong>Species:</strong> {character.species}
        </p>
        <p className="char-info-det">
          <strong>Type:</strong> {character.type || "Unknown"}
        </p>
        <p className="char-info-det">
          <strong>Gender:</strong> {character.gender}
        </p>
        <p className="char-info-det">
          <strong>Origin:</strong> {character.origin.name}
        </p>
        <p className="char-info-det">
          <strong>Last Known Location:</strong> {character.location.name}
        </p>
        <p className="char-info-det">
          <strong>Episodes:</strong> {character.episode.length}
        </p>
        <p className="char-info-det">
          <strong>Created:</strong>{" "}
          {new Date(character.created).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
}

export default CharacterDetails;
