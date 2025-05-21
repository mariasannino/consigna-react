import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodesByPage, searchEpisodes } from "../store/episodesSlice";
import Episode from "../components/episode/Episode";
import sad from "../assets/sad.png";

const Episodes = () => {
  const dispatch = useDispatch();
  const { episodes, pageNum, searchQuery } = useSelector(
    (state) => state.episodes
  );

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      dispatch(searchEpisodes({ name: searchQuery, pageNum }));
    } else {
      dispatch(getEpisodesByPage(pageNum));
    }
  }, [dispatch, pageNum, searchQuery]);

  if (episodes.length === 0) {
    return (
      <div className="no-result">
        <p>no episodes found :(</p>
        <img src={sad} alt="sad" />
      </div>
    );
  }

  return (
    <div className="episodes-container">
      {episodes.map((episode) => (
        <Episode key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default Episodes;
