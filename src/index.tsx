import * as React from 'react';
import Comp from './Comp';

async function init() {
  await Promise.resolve();
  const root = document.createElement('div');
  document.body.appendChild(root);
  React.render(<Comp className='spam' foo='bar' />, root);
}

init().catch(err => {
  console.log(err);
});
