import "./Info.css";

const Info = ({ label, value }) => (
  <p>
    <strong>{label}:</strong> {value}
  </p>
);

export default Info;
