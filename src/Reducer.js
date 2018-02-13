import React from 'react';

export class Updater extends React.Component {
  state = this.props.initialState;

  update = updater => this.setState(updater);

  render() {
    return this.props.children({
      state: this.props.state,
      update: this.update,
    });
  }
}

export class Reducer extends React.Component {
  state = this.props.reducer();

  dispatch = action =>
    this.setState(state => this.props.reducer(state, action));

  render() {
    return this.props.children({
      state: this.state,
      dispatch: this.dispatch,
    });
  }
}

const reducer = (state = { value: 0 }, action) => {
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

    case 'incAsync':
      throw new Error('you suck with async');

    default:
      return state;
  }
};

export const A = () => (
  <Reducer reducer={reducer}>
    {({ state, dispatch }) => (
      <div>
        {state.value}
        <button onClick={() => dispatch('inc')}>inc</button>
        <button onClick={() => dispatch('dec')}>dec</button>
        <button onClick={() => dispatch('reset')}>reset</button>
        <button onClick={() => dispatch('incAsync')}>async increment</button>
      </div>
    )}
  </Reducer>
);
