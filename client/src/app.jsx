import React from 'react';
import { createRoot } from 'react-dom/client';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      placeholder: []
    }
    //bind here
  }

  render() {
    return (
      <div id="app">
        Hello World
      </div>
    )
  }
}

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<App />);

export default App;