// @flow

import React, { type Node } from 'react';

type Dispatch<A> = (action: A) => void;

type ReducerChildrenProps<S, A> = {
  state: S,
  dispatch: Dispatch<A>,
};

type ReducerProps<S, A> = {
  reducer: (state?: S, action?: A) => S,
  children: (props: ReducerChildrenProps<S, A>) => Node,
};

export class Reducer<S, A> extends React.Component<ReducerProps<S, A>, S> {
  state: S = this.props.reducer();

  dispatch: Dispatch<A> = action =>
    this.setState(state => this.props.reducer(state, action));

  render() {
    return this.props.children({
      state: this.state,
      dispatch: this.dispatch,
    });
  }
}
