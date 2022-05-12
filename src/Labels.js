import React from 'react';
import './Labels.css';

export default function Labels(props) {
  return (
    props.data.map((e, i) => {
      return (
        <div className="label" key={i}>
          <div className="label-header">
            <div className="label-hazard-title">HAZARDOUS WASTE</div>
            <div className="label-date">DATE:</div>
            <div className="label-date-fill"></div>
          </div>
          <div className="label-info-block">
            <div className="label-law-warning">Federal law prohibits improper disposal</div>
            <div className="label-regulatory">Milliken Chemical Regulatory Affairs, M-209</div>
            <div className="label-inline-fill">
              <div className="label-descriptor">Generator:</div>
              <div className="label-fill">{e}</div>
            </div>
            <div className="label-inline-fill">
              <div className="label-descriptor">Identifier:</div>
              <div className="label-fill">JH035</div>
            </div>
            <div className="label-block-fill">
              <div className="label-descriptor">Description:</div>
              <div className="label-description">Ea aliqua exercitation non do nulla aliquip est pariatur reprehenderit qui deserunt quis exercitation magna. Description of the waste process Laboris qui qui culpa cillum fugiat esse ex pariatur ex enim amet nisi.</div>
            </div>
          </div>
          <div className="label-code-block">
            <div className="label-epa-header">EPA Waste Codes</div>
            <div className="label-waste-codes">D001 D001 D001 D001 D001 D001 D001 D001 D001 D001 D001 D001 </div>
            <div className="label-weight">
              <div className="label-weight-text">Weight:</div>
            </div>
          </div>
        </div>
      )
    }
    )
  )
}