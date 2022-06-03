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
    if (next < 0) {
      console.log("at first label");
      return;
    }
    if (next > count - 1) {
      console.log("need to add label");
      if (!empty){
        console.log("can add because label is filled");
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
      return;
    }
    console.log('next label is available');
    this.setState({ ...this.state, currentLabel: next });
  }

  render() {
    console.log("rendering");
    console.log(this.state);
    const current = this.state.currentLabel;
    return (
      <div id="app">
        <div>{current}</div>
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
