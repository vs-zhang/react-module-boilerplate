import React, { Component } from 'react';
import * as main from './main'

let template;
if (process.env.NODE_ENV !== 'production') {
  var DevTools = require('../utils/devtools').DevTools;
  template = <DevTools />;
}

export default class App extends Component {
  render() {
    return (
      <div>
        <main.Container />
        { template }
      </div>
    )
  }
}
