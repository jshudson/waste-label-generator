import React from "react";
import "./LabelPage.css";
import Label from "./Label";
export default function LabelPage(props) {
  return (
    <div className="label-page">
      {props.allocated.map((e, i) => {
        if (e === null) return <div className="label" key={i} />;
        return <Label labelData={props.labelData[e]} key={i} />;
      })}
    </div>
  );
}
