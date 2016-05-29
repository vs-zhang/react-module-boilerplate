import React from 'react'
import { HeaderLayout } from '../Header/Header'
import styles from './App.scss'

let template
if (process.env.NODE_ENV !== 'production') {
  /* eslint-disable global-require */
  const DevTools = require('../../utils/devtools').DevTools
  /* eslint-enable global-require */
  template = <DevTools />
}

export const AppLayout = ({ children }) => (
  <div>
    <HeaderLayout />
    <div className={styles.container}>{children}</div>
    {template}
  </div>
)

AppLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}
