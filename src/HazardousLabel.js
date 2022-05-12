import React from 'react';
import './HazardousLabel.css';

export default function HazardousLabel(props) {
    const identifier = props.labelData.identifier;
    const generator = props.labelData.generator;
    const description = props.labelData.description;
    const wasteCodes = props.labelData.wasteCodes;
    return (
        <div className="label">
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
            <div className="label-code-block">
                <div className="label-epa-header">EPA Waste Codes</div>
                <div className="label-waste-codes">{wasteCodes}</div>
                <div className="label-weight">
                    <div className="label-weight-text">Weight:</div>
                </div>
            </div>
        </div>
    )
}