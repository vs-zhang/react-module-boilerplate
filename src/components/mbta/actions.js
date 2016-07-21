import * as axios from 'axios'
import * as _ from 'lodash'
import moment from 'moment'

const mbtakey = 'ugBqxO3xGkqlDm2Nmseicg'

function fetchTrainInfoAPI(stop, callback) {
  axios.get(`https://realtime.mbta.com/developer/api/v2/predictionsbystop?api_key=${mbtakey}&stop=${stop}&format=json`).then((res) => {
    callback(res.data)
  })
}

function formatTimeStamp(ts) {
  const diffTime = ts - Date.now()
  const diffTimeInSec = Math.round(diffTime / 1000)
  if(diffTimeInSec < 60) {
    return `${diffTimeInSec} Seconds`
  } else {
    return `${Math.round(diffTimeInSec/60)} Minutes`
  }
}

function fetchTrainInfo(dispatch, stop, directionName) {
  fetchTrainInfoAPI(stop, (data) => {
    const currentTS = Date.now()
    const { stop_id } = data
    const subwayInfo = _.find(data.mode, {mode_name: "Subway"})
    const redLineInfo = _.find(subwayInfo.route, {route_id: "Red"})
    const trainInfo = _.find(redLineInfo.direction, {direction_name: directionName})
    let tripInfo = trainInfo.trip || []

    if(directionName === 'Southbound') {
      tripInfo = _.filter(tripInfo, {trip_headsign: "Braintree"})
    }

    const comingTrainInfo = _.filter(tripInfo, function (info) {
      return info.sch_arr_dt * 1000 > currentTS
    })

    const stopInfo = _.take(comingTrainInfo, 2)
    const filterStopInfo = _.map(stopInfo, 'sch_arr_dt')
    const formattedStopInfo = _.map(filterStopInfo, function(stopTS, index) {
      return {
        time: formatTimeStamp(stopTS*1000),
        label: index === 0 ? 'Next' : 'Later'
      }
    })
    const direction = directionName == 'Southbound' ? 'outbound' : 'inbound'
    const payload = {
      shouldFetch: false
    }
    payload[direction] = {
      value: stop_id,
      info: formattedStopInfo,
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
