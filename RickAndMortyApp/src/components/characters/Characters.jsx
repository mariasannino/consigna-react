import "./Characters.css";
import { useSelector } from "react-redux";
import Character from "../character/character";
import sad from "../../assets/sad.png";
const Characters = () => {
  const characters = useSelector((state) => state.characters.characters);

  if (characters.length === 0) {
    return (
      <div className="no-result">
        <p>no characters found :(</p>
        <img src={sad} alt={sad} />
      </div>
    );
  }
  console.log("characters", characters);
  return (
    <div className="characters-container">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
