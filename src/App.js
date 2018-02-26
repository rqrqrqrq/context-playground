// @flow

import React, { Component } from 'react';
import { Counter } from './Counter';
// flowlint untyped-import:off
import { A } from './Reducer';
import { CounterModel } from './Counter/Model';
import { CounterContainer } from './Counter/Container';

class App extends Component<{}> {
  render() {
    return (
      <div>
        <h2>simple example</h2>
        <Counter />

        <h2>default value</h2>
        <Counter defaultValue={5} />

        <h2>two synced</h2>
        <CounterModel>
          <CounterContainer />
          <CounterContainer />
        </CounterModel>

        <h2>reducer component (async dont work)</h2>
        <A />
      </div>
    );
  }
}

export default App;
