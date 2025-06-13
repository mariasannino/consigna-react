import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getEpisodeDetail,
  clearEpisodeDetail,
} from "../../store/episodesSlice";
import Character from "../character/Character";
import Info from "../info/Info";
import "./Episode.css";

const EpisodeDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { episodeDetail, episodeCharacters } = useSelector(
    (state) => state.episodes
  );
  useEffect(() => {
    dispatch(getEpisodeDetail(id));

    return () => dispatch(clearEpisodeDetail());
  }, [dispatch, id]);

  if (!episodeDetail)
    return <p className="loading">Loading episode details...</p>;

  return (
    <div>
      <div className="title-container">
        <h1>{episodeDetail.name}</h1>
        <Info label="Air Date" value={episodeDetail.air_date} />
        <Info label="Episode" value={episodeDetail.episode} />
      </div>

      <div className="characters-container">
        {episodeCharacters.map((char) => (
          <Character key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
};

export default EpisodeDetail;
