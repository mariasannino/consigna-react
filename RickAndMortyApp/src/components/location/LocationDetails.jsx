import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  getLocationDetail,
  clearLocationDetail,
} from "../../store/locationsSlice";
import Character from "../character/character";
import Info from "../info/Info";
import "./Location.css";

const LocationDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { locationDetail, locationCharacters } = useSelector(
    (state) => state.locations
  );

  useEffect(() => {
    dispatch(getLocationDetail(id));
    return () => dispatch(clearLocationDetail());
  }, [dispatch, id]);

  if (!locationDetail)
    return <p className="loading">Loading location details...</p>;

  return (
    <div>
      <div className="title-container">
        <h1>{locationDetail.name}</h1>
        <Info label="Type" value={locationDetail.type} />
        <Info label="Dimension" value={locationDetail.dimension} />
      </div>

      <div className="characters-container">
        {locationCharacters
          .filter((char) => char && char.id)
          .map((char) => (
            <Character key={char.id} character={char} />
          ))}
      </div>
    </div>
  );
};

export default LocationDetail;
