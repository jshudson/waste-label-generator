import './App.css';

import LabelPreview from './LabelPreview';
import LabelInput from './LabelInput.js';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentLabel: 0,
      labels: [{
        generator: '',
        identifier: '',
        numContainers: 1
      }],
    };
    this.handleChange = this.handleChange.bind(this);

  }
  handleChange(updated) {
    const current = this.state.currentLabel;
    const labels = [...this.state.labels];
    const newLabels = [...labels.slice(0, current), updated, ...labels.slice(current + 1)];
    this.setState({ ...this.state, labels: [...newLabels] })
  }
  render() {
    const current = this.state.currentLabel;
    return (
      <div id='app' >
        <LabelInput
          generator={this.state.labels[current].generator}
          identifier={this.state.labels[current].identifier}
          numContainers={this.state.labels[current].numContainers}
          onFieldChange={this.handleChange}
        />
        <LabelPreview />
      </div>
    );
  }
}

export default App;
