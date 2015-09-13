/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';

interface ICompState {}

interface ICompProps {
  foo: string;
}

export default class Comp extends React.Component<ICompProps, ICompState> {

  render() {
    return (
      <div>
        {this.props.foo}
      </div>
    );
  }

}
