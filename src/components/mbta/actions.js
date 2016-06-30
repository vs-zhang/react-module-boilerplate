import * as axios from 'axios'
import * as _ from 'lodash'
import moment from 'moment'

const mbtakey = 'ugBqxO3xGkqlDm2Nmseicg'

function fetchTrainInfoAPI(stop, callback) {
  axios.get(`https://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=${mbtakey}&stop=${stop}&format=json`).then((res) => {
    callback(res.data)
  })
}

function fetchTrainInfo(dispatch, stop, directionName) {
  fetchTrainInfoAPI(stop, (data) => {
    const { stop_id } = data
    const subwayInfo = _.find(data.mode, {mode_name: "Subway"})
    const redLineInfo = _.find(subwayInfo.route, {route_id: "Red"})
    const trainInfo = _.find(redLineInfo.direction, {direction_name: directionName})
    const stopInfo = _.take(trainInfo.trip, 2)
    const payload = {}
    payload['shouldFetch'] = false
    const direction = directionName == 'Southbound' ? 'outbound' : 'inbound'
    payload[direction] = {
      value: stop_id,
      info: stopInfo,
      direction: directionName
    }
    dispatch({
      type: 'FETCH_MBTA_DONE',
      payload
    })
  })
}

export function fetchTrainInfoAction(stop, directionName) {
  return dispatch => {
    fetchTrainInfo(dispatch, stop, directionName)
  }
}
