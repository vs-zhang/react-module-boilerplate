import * as axios from 'axios'

function fetchNewsAPI(page, callback) {
  axios.get(`/google_news/${page}`).then((res) => {
    callback(res.data)
  })
}

function searchNews(dispatch, page) {
  fetchNewsAPI(page, (data) => {
    if (data.length > 0) {
      dispatch({
        type: 'FETCH_NEWS_DONE',
        payload: {
          shouldFetch: false,
          news: data,
          page
        }
      })
    }
  })
}

export function searchNewsAction(page = 1) {
  return dispatch => {
    searchNews(dispatch, page)
  }
}
