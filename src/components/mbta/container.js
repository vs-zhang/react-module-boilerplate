import React from 'react'
import { name } from './__init__'
import { connect } from 'react-redux'
import styles from './mbta.scss'
import CSSModules from 'react-css-modules'
import circle from '../../assets/icons/circle.svg'
import { fetchTrainInfoAction } from './actions'
import moment from 'moment'

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
  componentDidMount() {
    const { shouldFetch, dispatch, inbound, outbound } = this.props
    if( shouldFetch ) {
      dispatch(fetchTrainInfoAction(inbound.value, inbound.direction))
      dispatch(fetchTrainInfoAction(outbound.value, outbound.direction))
    }
  }

  render() {
    const { stations, inbound, outbound } = this.props
    return (
      <div styleName="container">
        <div styleName="header"></div>
        <div styleName="content">
          <div styleName="train-info">
            <div styleName="station-select">
              <select defaultValue={outbound.value} >
                {
                  stations.map((t, index) => (
                    <option value={t.value} key={index}>{t.name}</option>
                  ))
                }
              </select>
            </div>
            <div styleName="stop-info">
              {
                outbound.info.map((t,index) => (
                  <div key={index}>{moment(t.sch_arr_dt*1000).fromNow()}</div>
                ))
              }
            </div>
          </div>
          <div styleName="train-info">
            <div styleName="station-select">
              <select defaultValue={inbound.value} >
                {
                  stations.map((t, index) => (
                    <option value={t.value} key={index}>{t.name}</option>
                  ))
                }
              </select>
            </div>
            <div styleName="stop-info">
              {
                inbound.info.map((t,index) => (
                  <div key={index}>{moment(t.sch_arr_dt*1000).fromNow()}</div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps)(CSSModules(MBTAComponent, styles))
