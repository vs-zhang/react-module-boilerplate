const initialState = {
  city: '',
  description: '',
  humidity: '',
  temp: 0,
  iconClass: '',
  dateString: '',
  timeString: '',
  forecastList: [],
  tempMin: 0,
  tempMax: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SEARCH_DONE':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
