import * as axios from 'axios'


function getCurrentWeatherData(location) {
  const { lat, lng } = location
  const currentWeatherURL = `https://api.wunderground.com/api/19dd56f6f3e36e89/conditions/q/${lat},${lng}.json`
  return axios.get(currentWeatherURL)
}

function getForecastWeatherData(location) {
  const { lat, lng } = location
  const forecastWeatherURL = `https://api.wunderground.com/api/c65f8990255a1839/forecast/q/${lat},${lng}.json`
  return axios.get(forecastWeatherURL)
}

function getTimeString(date) {
  const hour = date.getHours()
  const min = date.getMinutes()
  const second = date.getSeconds()
  const hourString = hour > 10 ? hour : `0${hour}`
  const minString = min > 10 ? min : `0${min}`
  const secondString = second > 10 ? second : `0${second}`
  return `${hourString}:${minString}:${secondString}`
}

function fetchWeatherDataAPI(location, callback) {
  axios.all([getCurrentWeatherData(location), getForecastWeatherData(location)])
    .then(axios.spread((current, forecast) => {
      callback(current.data, forecast.data)
    }))
}

function fetchWeatherData(dispatch, location) {
  fetchWeatherDataAPI(location, (currentWeatherData, forecastWeatherData) => {
    const {
      display_location,
      icon,
      temp_f,
      relative_humidity,
      weather
      } = currentWeatherData.current_observation

    const { forecastday } = forecastWeatherData.forecast.simpleforecast

    const forecastList = []

    for (const day of forecastday) {
      const forecast = {}
      forecast.conditions = day.conditions
      forecast.tempHigh = day.high.fahrenheit
      forecast.tempLow = day.low.fahrenheit
      forecast.day = day.date.weekday_short
      forecast.icon = day.icon
      forecastList.push(forecast)
    }
    const date = new Date()
    const payload = {
      city: display_location.city,
      description: weather,
      humidity: relative_humidity,
      temp: Math.round(temp_f),
      timeString: getTimeString(date),
      dateString: date.toDateString(),
      shouldFetch: false,
      icon,
      forecastList
    }

    dispatch({
      type: 'SEARCH_DONE',
      payload
    })
  })
}

function fetchGeocodeAPI(searchText, callback) {
  axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${searchText}&sensor=true`)
    .then((res) => {
      callback(res.data)
    })
}

function searchWeather(dispatch, searchText) {
  fetchGeocodeAPI(searchText, (geoData) => {
    if (geoData.results.length > 0) {
      const { geometry } = geoData.results[0]
      fetchWeatherData(dispatch, geometry.location)
    }
  })
}

function updateTime(dispatch) {
  const date = new Date()
  const payload = {
    timeString: getTimeString(date)
  }
  dispatch({
    type: 'UPDATE_TIME',
    payload
  })
}

export function searchWeatherAction(searchText = 'Boston, MA') {
  return (dispatch, getState) => {
    searchWeather(dispatch, searchText)
  }
}

export function updateTimeAction() {
  return dispatch => {
    updateTime(dispatch)
  }
}
