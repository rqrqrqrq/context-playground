// Model + Container combination
// useful for simple things like counter

import React from 'react';
import { CounterModel } from './Model';
import { CounterContainer } from './Container';

export const Counter = ({ defaultValue }) => (
  <CounterModel defaultValue={defaultValue}>
    <CounterContainer />
  </CounterModel>
);
