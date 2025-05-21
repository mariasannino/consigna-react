import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocationByPage, searchLocations } from "../store/locationsSlice";
import Location from "../components/location/location";
import sad from "../assets/sad.png";

const Locations = () => {
  const dispatch = useDispatch();
  const { locations, pageNum, searchQuery } = useSelector(
    (state) => state.locations
  );

  useEffect(() => {
    if (searchQuery.trim() !== "") {
      dispatch(searchLocations({ name: searchQuery, pageNum }));
    } else {
      dispatch(getLocationByPage(pageNum));
    }
  }, [dispatch, pageNum, searchQuery]);

  if (locations.length === 0) {
    return (
      <div className="no-result">
        <p>no locations found :(</p>
        <img src={sad} alt="sad" />
      </div>
    );
  }

  return (
    <div className="locations-container">
      {locations.map((location) => (
        <Location key={location.id} location={location} />
      ))}
    </div>
  );
};

export default Locations;
