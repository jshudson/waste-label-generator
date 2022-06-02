import React from "react";
import './LabelInput.css';
export default class LabelInput extends React.Component {
  constructor(props) {
    super(props);
    this.props = {numContainers: 1};

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
          />
        </label>
        <label>
          Identfier:
          <input
            name='identifier'
            type='text'
            value={this.props.identifier}
          />
        </label>
        <label>
          Number of Containers:
          <input
            name='numContainers'
            type='number'
            min='1'
            value={this.props.numContainers}
          />
        </label>
      </form>
    )
  }
}