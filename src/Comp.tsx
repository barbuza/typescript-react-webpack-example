import * as React from 'react';
import classnames from 'classnames';

interface ICompProps {
  className?: string;
  foo: string;
}

export default class Comp extends React.Component<ICompProps, {}> {

  render() {
    return (
      <div className={classnames(styles.root, this.props.className)}>
        {this.props.foo}
      </div>
    );
  }

}
