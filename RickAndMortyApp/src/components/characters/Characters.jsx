import "./Characters.css";
import { useSelector } from "react-redux";
import Character from "../character/Character";
import sad from "../../assets/sad.png";
import NoResult from "../noResult/NoResult";
const Characters = () => {
  const characters = useSelector((state) => state.characters.characters);

  if (characters.length === 0) {
    return (
      <>
        <NoResult
          message="No characters found :("
          image={sad}
          alt="sadRickandMorty"
        />
      </>
    );
  }

  return (
    <div className="characters-container">
      {characters.map((character) => (
        <Character key={character.id} character={character} />
      ))}
    </div>
  );
};

export default Characters;
