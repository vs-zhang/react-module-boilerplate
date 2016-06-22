import * as axios from 'axios'

function fetchNewsAPI(searchText, callback) {
  axios.get('/google_news').then((res) => {
    callback(res.data)
  })
}

function searchNews(dispatch, searchText) {
  fetchNewsAPI(searchText, (data) => {
    if (data.length > 0) {
      console.log('got something')
    }
  })
}

export function searchNewsAction(searchText = 'Boston') {
  return dispatch => {
    searchNews(dispatch, searchText)
  }
}
