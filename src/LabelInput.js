import React from "react";
import './LabelInput.css';
export default class LabelInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    const target = e.target;
    const value = target.value;
    const name = target.name;
    const labelData = {
      generator: this.props.generator,
      identifier: this.props.identifier,
      numContainers: this.props.numContainers
    };
    labelData[name] = value
    this.props.onFieldChange(labelData);
  }

  render() {
    return (
      <form>
        <label>
          Generator:
          <input
            name='generator'
            type='text'
            value={this.props.generator}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Identfier:
          <input
            name='identifier'
            type='text'
            value={this.props.identifier}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Number of Containers:
          <input
            name='numContainers'
            type='number'
            min='1'
            value={this.props.numContainers}
            onChange={this.handleChange}
          />
        </label>
      </form>
    )
  }
}