import "./NoResult.css";

const NoResult = ({ message, image, alt }) => (
  <div className="no-result">
    <p>{message}</p>
    <img src={image} alt={alt || "No results"} />
  </div>
);

export default NoResult;
