const stations = [
  {name: 'Alewife', value: 'place-alfcl'},
  {name: 'Davis', value: 'place-davis'},
  {name: 'Porter', value: 'place-portr'},
  {name: 'Harvard', value: 'place-harsq'},
  {name: 'Central', value: 'place-cntsq'},
  {name: 'Kendall/MIT', value: 'place-knncl'},
  {name: 'Charles/MGH', value: 'place-chmnl'},
  {name: 'Park Street', value: 'place-pktrm'},
  {name: 'Downtown Crossing', value: 'place-dwnxg'},
  {name: 'South Station', value: 'place-sstat'},
  {name: 'Broadway', value: 'place-brdwy'},
  {name: 'Andrew', value: 'place-andrw'},
  {name: 'JFK/Umass', value: 'place-jfk'},
  {name: 'North Quincy', value: 'place-nqncy'},
  {name: 'Wollaston', value: 'place-wlsta'},
  {name: 'Quincy Center', value: 'place-qnctr'},
  {name: 'Quincy Adams', value: 'place-qamnl'},
  {name: 'Braintree', value: 'place-brntn'}
]

const initialState = {
  shouldFetch: true,
  inbound: {value: 'place-wlsta',  info: [], direction: 'Northbound'},
  outbound: {value: 'place-sstat', info: [], direction: 'Southbound'},
  stations
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_MBTA_DONE':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
