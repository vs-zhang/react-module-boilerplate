import React, { Component } from 'react';
import { DevTools } from '../../utils/devtools'
import * as main from '../main'

export default class RootComponent extends Component {
  render() {
    return (
      <div>
        <main.Container />
        <DevTools />
      </div>
    )
  }
}


