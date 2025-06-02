import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterById } from "../../services/api";
import "./Character.css";

function CharacterDetails() {
  const { id } = useParams();
  const [character, setCharacter] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCharacter() {
      const data = await fetchCharacterById(id);
      setCharacter(data);
      setLoading(false);
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
          {character.status === "Dead" && (
            <p className="dead">{character.status}</p>
          )}
          {character.status === "Alive" && (
            <p className="alive">{character.status}</p>
          )}
          {character.status !== "Dead" && character.status !== "Alive" && (
            <p className="unknown">Unknown</p>
          )}
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
