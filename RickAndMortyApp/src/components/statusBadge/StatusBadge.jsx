import React from "react";
import "./StatusBadge.css";

const StatusBadge = ({ status }) => {
  const statusClass =
    status === "Alive" ? "alive" : status === "Dead" ? "dead" : "unknown";

  return <span className={` ${statusClass}`}>{status}</span>;
};

export default StatusBadge;
