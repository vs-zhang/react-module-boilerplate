import React from 'react'
import { compose } from 'redux'
import { createDevTools } from 'redux-devtools';
import { persistState } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';


const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey='ctrl-h'
               changePositionKey='ctrl-q'>
    <LogMonitor />
  </DockMonitor>
);

const enhancer = compose(
  DevTools.instrument(),
  persistState(getDebugSessionKey())
);

function getDebugSessionKey() {
  const matches = window.location.href.match(/[?&]debug_session=([^&]+)\b/);
  return (matches && matches.length > 0) ? matches[1] : null;
}

export { DevTools, enhancer}