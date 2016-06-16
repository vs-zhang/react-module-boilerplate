import * as axios from 'axios'

const currentWeatherURL = 'https://api.wunderground.com/api/19dd56f6f3e36e89/conditions/q/MA/02169.json'
const forecastWeatherURL = 'https://api.wunderground.com/api/c65f8990255a1839/forecast/q/02169.json'

function getCurrentWeatherData() {
  return axios.get(currentWeatherURL)
}

function getForecastWeatherData() {
  return axios.get(forecastWeatherURL)
}

function fetchWeatherDataAPI(callback) {
  axios.all([getCurrentWeatherData(), getForecastWeatherData()])
    .then(axios.spread((current, forecast) => {
      callback(current.data, forecast.data)
    }))
}

function fetchWeatherData(dispatch) {
  fetchWeatherDataAPI((currentWeatherData, forecastWeatherData) => {
    const {
      display_location,
      icon, temp_f,
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
      forecast.iconClass = `wi wi-wu-${day.icon}`
      forecastList.push(forecast)
    }
    const date = new Date()
    const payload = {
      city: display_location.city,
      description: weather,
      humidity: relative_humidity,
      temp: Math.round(temp_f),
      timeString: `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`,
      dateString: date.toDateString(),
      icon,
      forecastList
    }

    dispatch({
      type: 'SEARCH_DONE',
      payload
    })
  })
}

export function fetchWeatherDataAction() {
  return dispatch => {
    fetchWeatherData(dispatch)
  }
}
