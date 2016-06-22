import * as axios from 'axios'

function fetchNewsAPI(searchText, callback) {

}

function searchNews(dispatch, searchText) {
  fetchNewsAPI(searchText, (data) => {
    if (data.results.length > 0) {
      console.log(data)
    }
  })
}

export function searchNewsAction(searchText = 'Boston') {
  return dispatch => {
    searchNews(dispatch, searchText)
  }
}
