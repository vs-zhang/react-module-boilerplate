const initialState = {
  city: 'Boston',
  description: '',
  humidity: '',
  temp: 0,
  shouldFetch: true,
  iconClass: '',
  dateString: '',
  timeString: '',
  icon: 'unknown',
  forecastList: [],
  tempMin: 0,
  tempMax: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_DONE':
      return Object.assign({}, state, action.payload)
    case 'UPDATE_TIME':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
