const initialState = {
  shouldFetch: true,
  news: [],
  page: 1
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_NEWS_DONE':
      const newState = {
        shouldFetch: false,
        news: state.news.concat(action.payload.news),
        page: action.payload.page
      }
      return Object.assign({}, state, newState)
    default:
      return state
  }
}
