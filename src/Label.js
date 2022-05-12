import React from "react";
import "./Label.css";
import HazardousLabel from "./HazardousLabel";
import NonHazardousLabel from "./NonHazardousLabel";

export default function Label(props) {
  return (
    <div className="label">
      {props.labelData.hazardous ? (
        <HazardousLabel labelData={props.labelData} />
      ) : (
        <NonHazardousLabel labelData={props.labelData} />
      )}
    </div>
  );
}
