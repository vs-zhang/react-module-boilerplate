const initialState = {
  shouldFetch: true,
  news: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_DONE':
      return Object.assign({}, state, action.payload)
    default:
      return state
  }
}
