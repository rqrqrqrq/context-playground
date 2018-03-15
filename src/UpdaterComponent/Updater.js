// @flow

import React, { type Node } from 'react';

type Updater<S> = (state: S) => S;

type Update<S> = (updater: Updater<S> | S) => void;

type RenderChildrenProp<S> = {
  state: S,
  update: Update<S>,
};

type RenderChildren<S> = (props: RenderChildrenProp<S>) => Node;

type Props<S> = {
  initialState: S,
  children: RenderChildren<S>,
};

export class UpdaterComponent<S> extends React.Component<Props<S>, S> {
  state: S = this.props.initialState;

  update: Update<S> = updater => this.setState(updater);

  render() {
    return this.props.children({
      state: this.state,
      update: this.update,
    });
  }
}
