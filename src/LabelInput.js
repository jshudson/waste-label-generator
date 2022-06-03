import React from "react";
import "./LabelInput.css";
export default class LabelInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { ...props.labelData };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLabelChange = this.handleLabelChange.bind(this);
    // this.handleDelete = this.handleDelete.bind(this);
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
    const updatedLabel = { ...this.state};
    this.props.onSubmit(updatedLabel);
  }
  handleLabelChange({ target }) {
    const direction = target.name === "prev" ? -1 : 1;
    const updatedLabel = { ...this.state};
    this.props.onSubmit(updatedLabel);
    this.props.onLabelChange(direction);
  }

  render() {
    return (
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
          <input
            name="prev"
            type="button"
            value="Prev"
            onClick={this.handleLabelChange}
          />
          <input
            name="next"
            type="button"
            value="Next"
            onClick={this.handleLabelChange}
          />
          <input
            name="delete"
            type="button"
            value="Delete"
            onClick={this.handleDelete}
          />
        </div>
      </form>
    );
  }
}
