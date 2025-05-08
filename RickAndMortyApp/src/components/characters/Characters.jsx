import "./Characters.css";
const Characters = ({ characters }) => {
  return (
    <div className="characters-container">
      {characters.map((character) => (
        <div key={character.id} className="character-card">
          <h2>{character.name}</h2>
          <img src={character.image} alt={character.name} />

          <h3>
            {" "}
            <span>📍</span>
            {character.location.name}
          </h3>
          {(() => {
            if (character.status === "Dead") {
              return <h4 className="dead">{character.status}</h4>;
            } else if (character.status === "Alive") {
              return <h4 className="alive">{character.status}</h4>;
            } else {
              return <h4 className="unknown">{character.status}</h4>;
            }
          })()}
        </div>
      ))}
    </div>
  );
};

export default Characters;
