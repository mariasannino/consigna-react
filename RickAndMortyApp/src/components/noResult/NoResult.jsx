import Filters from "../filters/Filters";
import "./NoResult.css";
import "../../App.css";
const NoResult = ({ message, image, alt }) => (
  <div>
    <div className="no-result container">
      <p>{message}</p>
      <img src={image} alt={alt || "No results"} />
    </div>

    <Filters />
  </div>
);

export default NoResult;
