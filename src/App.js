import './App.css';

import LabelPreview from './LabelPreview';
import LabelInput from './LabelInput.js';

function App() {
  return (
    <div id='app'>
      <LabelInput
        generator='Test'
        identifier='Test2'
        numContainers='1'
      />
      <LabelPreview />
    </div>
  );
}

export default App;
