import React from 'react'
import { name } from './__init__'
import { connect } from 'react-redux'
import styles from './mbta.scss'
import CSSModules from 'react-css-modules'

const mapStateToProps = (state) => {
  const model = state[name]
  const {
    shouldFetch,
    inbound,
    outbound,
    stations,
    } = model

  return {
    shouldFetch,
    inbound,
    outbound,
    stations
  }
}

export class MBTAComponent extends React.Component {
  render() {
    const { stations, inbound, outbound } = this.props
    return (
      <div styleName="container">
        <div styleName="header"></div>
        <div styleName="content">
          <div styleName="train-info">
            <div styleName="station-select">
              <select value={inbound.value}>
                {
                  stations.map((t, index) => (
                    <option value={t.value}>{t.name}</option>
                  ))
                }
              </select>
            </div>
            <div styleName="stop-info">
              Next
            </div>
          </div>
          <div styleName="train-info">
            <div styleName="station-select">
              <select value={outbound.value}>
                {
                  stations.map((t, index) => (
                    <option value={t.value}>{t.name}</option>
                  ))
                }
              </select>
            </div>
            <div styleName="stop-info">
               Later
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(CSSModules(MBTAComponent, styles))
