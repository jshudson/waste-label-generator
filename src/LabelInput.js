import React from "react";
import "./LabelInput.css";
import Label from "./Label";

export default class LabelInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = { ...props.labelData };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }
  handleChange(e) {
    const target = e.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      ...this.state,
      [name]: value,
      empty: false
    });

    //this.props.onFieldChange(labelData);
  }
  handleSubmit(e) {
    e.preventDefault();
    const updatedLabel = { ...this.state };
    this.props.onSubmit(updatedLabel);
  }

  render() {
    return (
      <div className="input-form">
        <div className="waste-input">
          <form onSubmit={this.handleSubmit}>
            <label>
              Hazardous?
              <input
                name="hazardous"
                type="checkbox"
                checked={this.state.hazardous}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Generator:
              <input
                name="generator"
                type="text"
                value={this.state.generator}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Identfier:
              <input
                name="identifier"
                type="text"
                value={this.state.identifier}
                onChange={this.handleChange}
              />
            </label>
            <label className="description">
              Description:
              <textarea
                name="description"
                value={this.state.description}
                onChange={this.handleChange}
                rows="4"
                cols="50"
              />
            </label>
            <label>
              Number of Containers:
              <input
                name="count"
                type="number"
                min="1"
                value={this.state.count}
                onChange={this.handleChange}
              />
            </label>
            <label>
              Waste Codes:
              <input
                name="wasteCodes"
                type="text"
                value={this.state.wasteCodes}
                onChange={this.handleChange}
              />
            </label>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
        <div className="live-label">
          <Label labelData={this.state} />
        </div>
      </div>
    );
  }
}
