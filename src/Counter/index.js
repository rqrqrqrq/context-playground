import React from 'react';
import { CounterModel } from './Model';
import { CounterContainer } from './Container';

export const Counter = ({ defaultValue }) => (
  <CounterModel defaultValue={defaultValue}>
    <CounterContainer />
  </CounterModel>
);
