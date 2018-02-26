// @flow

// CONTAINER
// its like presenter from mvp or viewmodel from mvvm
// get things from context, do with them whatever you want and pass into VIEW

import React from 'react';
import { CounterConsumer } from './Model';
import { CounterView } from './View';

export const CounterContainer = () => (
  <CounterConsumer>
    {({ state, actions }) => <CounterView {...state} {...actions} />}
  </CounterConsumer>
);
