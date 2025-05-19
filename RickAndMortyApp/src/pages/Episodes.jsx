import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEpisodesByPage } from "../store/episodesSlice";
import Episode from "../components/episode/Episode";

const Episodes = () => {
  const dispatch = useDispatch();
  const { episodes, pageNum } = useSelector((state) => state.episodes);

  useEffect(() => {
    dispatch(getEpisodesByPage(pageNum));
  }, [dispatch, pageNum]);

  return (
    <div className="episodes-container">
      {episodes.map((episode) => (
        <Episode key={episode.id} episode={episode} />
      ))}
    </div>
  );
};

export default Episodes;
