import "./App.css";

import LabelPreview from "./LabelPreview";
import LabelInput from "./LabelInput.js";
import React from "react";

class App extends React.Component {
  emptyLabel = {
    hazardous: true,
    generator: "",
    identifier: "",
    description: "",
    wasteCodes: "",
    count: 1,
    empty: true,
  }
  constructor(props) {
    super(props);
    this.state = {
      currentLabel: 0,
      labelData: [
        {
          ...this.emptyLabel
        },
      ],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLabelChange = this.handleLabelChange.bind(this);
  }
  handleSubmit(updated) {
    const current = this.state.currentLabel;
    const labels = [...this.state.labelData];
    const newLabels = [
      ...labels.slice(0, current),
      updated,
      ...labels.slice(current + 1),
    ];
    this.setState({ ...this.state, labelData: [...newLabels] });
  }
  handleLabelChange({ target }) {
    const direction = target.name === "prev" ? -1 : 1;

    const count = this.state.labelData.length;
    const current = this.state.currentLabel;
    const next = current + direction;
    const empty = this.state.labelData[current].empty;

    if (next < 0) return;
    if (next > count - 1) {
      if (!empty) {
        this.setState({
          ...this.state,
          currentLabel: next,
          labelData: [
            ...this.state.labelData, this.emptyLabel,
          ],
        });
        return;
      }
      return;
    }
    this.setState({ ...this.state, currentLabel: next });
  }

  render() {
    const current = this.state.currentLabel;
    return (
      <div id="app">
        <LabelInput
          labelData={this.state.labelData[current]}
          onSubmit={this.handleSubmit}
          key={current}
          />
        <div className="label-navigation">
          <div>{current}</div>
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
        <LabelPreview labelData={this.state.labelData} />

      </div>

    );
  }
}

export default App;
