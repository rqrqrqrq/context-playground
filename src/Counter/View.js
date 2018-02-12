// VIEW
// just render things
// args + listeners => DOM

import React from 'react';

export const CounterView = ({ value, inc, dec, reset, incAsync }) => (
  <div>
    {value}
    <button onClick={inc}>inc</button>
    <button onClick={dec}>dec</button>
    <button onClick={reset}>reset</button>
    <button onClick={incAsync}>async increment</button>
  </div>
);
