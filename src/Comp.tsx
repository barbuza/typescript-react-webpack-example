import * as React from 'react';
import classnames from 'classnames';

interface ICompState {}

interface ICompProps {
  className?: string;
  foo: string;
}

export default class Comp extends React.Component<ICompProps, ICompState> {

  render() {
    return (
      <div className={classnames('Comp', this.props.className)}>
        {this.props.foo}
      </div>
    );
  }

}
