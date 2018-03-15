// @flow

import React from 'react';
import { Updater } from './UpdaterComponent';

const initialState = {
  value: 0,
};

export const UpdaterCounter = () => (
  <Updater initialState={initialState}>
    {({ state, update }) => (
      <div>
        {state.value}
        <button
          onClick={() =>
            update(prevState => ({
              value: prevState.value + 1,
            }))
          }
        >
          inc
        </button>
        <button
          onClick={() =>
            update(prevState => ({
              value: prevState.value - 1,
            }))
          }
        >
          dec
        </button>
        <button onClick={() => update(() => initialState)}>reset</button>
        <button
          onClick={() =>
            setTimeout(update, 1000, prevState => ({
              value: prevState.value + 1,
            }))
          }
        >
          async increment
        </button>
      </div>
    )}
  </Updater>
);
