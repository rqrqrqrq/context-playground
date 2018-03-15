// @flow

import React from 'react';
import { Reducer } from './ReducerComponent';

type State = {
  value: number,
};

type Action = 'inc' | 'dec' | 'reset';

const reducer = (state: State = { value: 0 }, action?: Action) => {
  switch (action) {
    case 'inc':
      return {
        value: state.value + 1,
      };

    case 'dec':
      return {
        value: state.value - 1,
      };

    case 'reset':
      return {
        value: 0,
      };

    default:
      return state;
  }
};

export const ReducerCounter = () => (
  <Reducer reducer={reducer}>
    {({ state, dispatch }) => (
      <div>
        {state.value}
        <button onClick={() => dispatch('inc')}>inc</button>
        <button onClick={() => dispatch('dec')}>dec</button>
        <button onClick={() => dispatch('reset')}>reset</button>
        <button onClick={() => setTimeout(dispatch, 1000, 'inc')}>
          async increment
        </button>
      </div>
    )}
  </Reducer>
);
