import { useEffect } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";
import { filterLocations, getLocationByPage } from "../store/locationsSlice";
import Location from "../components/location/Location";
import sad from "../assets/sad.png";
import Filters from "../components/filters/Filters";
import NoResult from "../components/noResult/NoResult";
const Locations = () => {
  const dispatch = useDispatch();
  const { locations, pageNum, searchQuery, type, dimension } = useSelector(
    (state) => state.locations
  );

  useEffect(() => {
    if (searchQuery.trim() !== "" || type || dimension) {
      dispatch(
        filterLocations({ name: searchQuery, type, dimension, pageNum: 1 })
      );
    } else {
      dispatch(getLocationByPage(pageNum));
    }
  }, [dispatch, pageNum, searchQuery, dimension, type]);

  if (locations.length === 0) {
    return (
      <div className="container">
        <Filters />
        <div className="no-result container">
          <p>{"No locations found :("}</p>
          <img src={sad} alt={"No results"} />
        </div>
      </div>
    );
  }

  return (
    <div className="container">
      <Filters></Filters>
      <div className="locations-container">
        {locations.map((location) => (
          <Location key={location.id} location={location} />
        ))}
      </div>
    </div>
  );
};

export default Locations;
