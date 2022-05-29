import React from "react";
import "./NonHazardousLabel.css";

export default function HazardousLabel(props) {
  const identifier = props.labelData.identifier;
  const generator = props.labelData.generator;
  const description = props.labelData.description;
  return (
    <>
      <div className="label-header">
        <div className="label-non-hazard-title">NONHAZARDOUS WASTE</div>
      </div>
      <div className="label-info-block">
        <div className="label-law-warning">&nbsp;</div>
        <div className="label-regulatory">
          Milliken Chemical Regulatory Affairs, M-209
        </div>
        <div className="label-inline-fill">
          <div className="label-descriptor">Generator:</div>
          <div className="label-fill">{generator}</div>
        </div>
        <div className="label-inline-fill">
          <div className="label-descriptor">Identifier:</div>
          <div className="label-fill">{identifier}</div>
        </div>
        <div className="label-block-fill">
          <div className="label-descriptor">Description:</div>
          <div className="label-description">{description}</div>
        </div>
      </div>
      <div className="label-non-haz-code-block">
        <div className="label-non-haz-weight"></div>
      </div>
    </>
  );
}
