import React, { Component } from 'react';
import { Link } from 'react-router'
let template;
if (process.env.NODE_ENV !== 'production') {
  var DevTools = require('../../utils/devtools').DevTools;
  template = <DevTools />;
}

export const AppLayout = ({children}) => (
  <div>
    <header>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </header>
    <div>{children}</div>
    {template}
  </div>
);
