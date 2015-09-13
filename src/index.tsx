import * as React from 'react';
import Comp from './Comp';

async function init() {
  await Promise.resolve();
  console.log(React.renderToStaticMarkup(<Comp className='spam' foo='bar' />));
}

init().catch(err => {
  console.log(err);
});
