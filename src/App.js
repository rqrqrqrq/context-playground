import React, { Component } from 'react';
import { Counter } from './Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <Counter defaultValue={5} />
      </div>
    );
  }
}

export default App;
