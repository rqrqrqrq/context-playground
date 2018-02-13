// MODEL
// data + methods to change data
// render children in provider

import React from 'react';

const CounterContext = React.createContext({ value: 0 });

const CounterProvider = CounterContext.Provider;

export const CounterConsumer = CounterContext.Consumer;

export class CounterModel extends React.Component {
  static defaultProps = {
    defaultValue: 0,
  };

  state = {
    value: this.props.defaultValue,
  };

  // SO OOP

  inc = () => {
    this.setState(({ value }) => ({ value: value + 1 }));
  };

  dec = () => {
    this.setState(({ value }) => ({ value: value - 1 }));
  };

  reset = () => {
    this.setState({ value: this.props.defaultValue });
  };

  incAsync = () => {
    setTimeout(this.inc, 1000);
  };

  render() {
    const { children } = this.props;
    const { value } = this.state;

    return (
      <CounterProvider
        value={{
          value,
          inc: this.inc,
          dec: this.dec,
          reset: this.reset,
          incAsync: this.incAsync,
        }}
      >
        {children}
      </CounterProvider>
    );
  }
}
