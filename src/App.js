// @flow

import React, { Component } from 'react';
import { Counter } from './Counter';
import { ReducerCounter } from './ReducerCounter';
import { CounterModel } from './Counter/Model';
import { CounterContainer } from './Counter/Container';
import { UpdaterCounter } from './UpdaterCounter';

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

        <h2>reducer component</h2>
        <ReducerCounter />

        <h2>updater component</h2>
        <UpdaterCounter />
      </div>
    );
  }
}

export default App;
