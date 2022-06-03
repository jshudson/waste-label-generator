import "./App.css";

import LabelPreview from "./LabelPreview";
import LabelInput from "./LabelInput.js";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLabel: 0,
      labelData: [
        {
          hazardous: true,
          generator: "",
          identifier: "",
          description: "",
          wasteCodes: "",
          count: 1,
          empty: true,
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
  handleLabelChange(direction) {
    const count = this.state.labelData.length;
    const current = this.state.currentLabel;
    const next = current + direction;
    const empty = this.state.labelData[current].empty;
    console.log(count, current, next, empty);
    if (next < 0) return;
    if (next >= count && !empty) {
      console.log("adding label");
      this.setState({
        ...this.state,
        currentLabel: next,
        labelData: [
          ...this.state.labelData,
          {
            hazardous: true,
            generator: "New",
            identifier: "",
            description: "",
            wasteCodes: "",
            count: 1,
            empty: true,
          },
        ],
      });
      return;
    }
    if (empty) {
      return;
    }
    this.setState({ ...this.state, currentLabel: next });
  }

  render() {
    console.log("rendering");
    console.log(this.state);
    const current = this.state.currentLabel;
    return (
      <div id="app">
        <LabelInput
          labelData={this.state.labelData[current]}
          onSubmit={this.handleSubmit}
          onLabelChange={this.handleLabelChange}
        />
        <LabelPreview labelData={this.state.labelData} />
      </div>
    );
  }
}

export default App;
