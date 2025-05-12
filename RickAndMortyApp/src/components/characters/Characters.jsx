import "./Characters.css";
import { useSelector } from "react-redux";
import Character from "../character/character";

const Characters = () => {
  const characters = useSelector((state) => state.characters.characters);
  return (
    <div className="characters-container">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
