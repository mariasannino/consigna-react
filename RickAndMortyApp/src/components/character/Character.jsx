import "./Character.css";
const Character = ({ character }) => {
  return (
    <div className="character-card">
      <h2>{character.name}</h2>
      <img src={character.image} alt={character.name} />

      <h3>
        <span>📍</span>
        {character.location?.name || "Unknown Location"}
      </h3>

      {character.status === "Dead" && (
        <h4 className="dead">{character.status}</h4>
      )}
      {character.status === "Alive" && (
        <h4 className="alive">{character.status}</h4>
      )}
      {character.status !== "Dead" && character.status !== "Alive" && (
        <h4 className="unknown">Unknown</h4>
      )}
    </div>
  );
};

export default Character;
