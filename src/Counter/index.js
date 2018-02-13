// @flow

// Model + Container combination
// useful for simple things like counter

import React from 'react';
import { CounterModel } from './Model';
import { CounterContainer } from './Container';

type Props = {
  defaultValue?: number,
};

export const Counter = ({ defaultValue }: Props) => (
  <CounterModel defaultValue={defaultValue}>
    <CounterContainer />
  </CounterModel>
);
