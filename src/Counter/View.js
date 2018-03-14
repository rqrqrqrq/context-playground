// @flow

// VIEW
// just render things
// args + listeners => DOM

import React from 'react';

type Props = {
  value: number,
  inc: () => void,
  dec: () => void,
  reset: () => void,
  incAsync: () => void,
};

export const CounterView = ({ value, inc, dec, reset, incAsync }: Props) => (
  <div>
    {value}
    <button onClick={inc}>inc</button>
    <button onClick={dec}>dec</button>
    <button onClick={reset}>reset</button>
    <button onClick={incAsync}>async increment</button>
  </div>
);
