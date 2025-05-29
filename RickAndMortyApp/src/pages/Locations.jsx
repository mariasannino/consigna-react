import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterLocations, getLocationByPage } from "../store/locationsSlice";
import Location from "../components/location/Location";
import sad from "../assets/sad.png";
import Filters from "../components/filters/Filters";
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
      <div className="no-result">
        <p>no locations found :(</p>
        <img src={sad} alt="sad" />
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
