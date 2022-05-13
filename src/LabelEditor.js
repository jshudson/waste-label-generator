import React from "react";
import "./LabelEditor.css";
import LabelPage from "./LabelPage";

export default class LabelEditor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      available: [1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1],
      labelData: [
        {
          hazardous: true,
          generator: "J. Hudson",
          identifier: "JH0512A",
          description: "Lorem ipsum dolor est ni",
          wasteCodes: "D001 D002 D003",
          count: 10,
        },
        {
          hazardous: false,
          generator: "J. Hudson",
          identifier: "JH0512B",
          description: "Lorem ipsum dolor est ni",
          wasteCodes: "D001 D002 D003",
          count: 2,
        },
      ],
    };
  }
  labelCount() {
    return this.state.labelData.reduce((prev, curr) => prev + curr.count, 0);
  }
  allocateLabels() {
    let available = [...this.state.available];
    let labelData = [...this.state.labelData];

    let availableIndex = 0,
      labelDataIndex = 0,
      labelDataCounter = 0;

    const allocated = [];

    while (labelDataIndex < labelData.length) {
      const currLabelCount = labelData[labelDataIndex].count;
      if (available[availableIndex] != 0) {
        allocated.push(labelDataIndex);
        labelDataCounter++;
        if (labelDataCounter >= currLabelCount) {
          labelDataCounter = 0;
          labelDataIndex++;
        }
      } else {
        allocated.push(null);
      }
      availableIndex++;
    }
    const divided = this.dividePages(allocated);
    return divided;
  }
  dividePages(allocated) {
    const divided = [];
    for (let i = 0; i < allocated.length; i += 10) {
      const builder = [];
      for (let j = 0; j < 10; j++) {
        if (allocated[i + j] === undefined) {
          builder.push(null);
        } else {
          builder.push(allocated[i + j]);
        }
      }
      divided.push(builder);
    }
    return divided;
  }
  render() {
    const allocated = this.allocateLabels();
    console.log(allocated);
    return (
      <div className="all-pages">
        {allocated.map((e, i) => {
          console.log("e", e);
          return (
            <LabelPage labelData={this.state.labelData} allocated={e} key={i} />
          );
        })}
      </div>
    );
  }
}
