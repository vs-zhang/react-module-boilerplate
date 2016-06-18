import React from 'react'
import { connect } from 'react-redux'
import { searchWeatherAction } from './actions'
import { name } from './__init__'
import CSSModules from 'react-css-modules'
import styles from './weather.scss'

const mapStateToProps = (state) => {
  const model = state[name]

  const city = model.city
  const description = model.description
  const humidity = model.humidity
  const temp = model.temp
  const forecastList = model.forecastList
  const dateString = model.dateString
  const timeString = model.timeString
  const iconClass = `wi wi-wu-${model.icon}`
  const shouldFetch = model.shouldFetch

  return {
    city,
    description,
    humidity,
    temp,
    iconClass,
    forecastList,
    dateString,
    timeString,
    shouldFetch
  }
}

const initialState = {
  searchText: ''
}

class WeatherComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = initialState
    this.handleChange = ::this.handleChange
    this.handleSubmit = ::this.handleSubmit
  }

  componentDidMount() {
    const { dispatch, shouldFetch } = this.props
    if (shouldFetch) {
      dispatch(searchWeatherAction(this.props.city))
    }
  }

  handleChange(e) {
    this.setState({ searchText: e.target.value })
  }

  handleSubmit() {
    if (this.state.searchText.trim()) {
      this.props.dispatch(searchWeatherAction(this.state.searchText))
      this.setState(initialState)
    }
  }

  render() {
    const {
      city,
      description,
      humidity,
      temp,
      iconClass,
      forecastList,
      timeString,
      dateString
      } = this.props

    return (
      <div styleName="container">
        <div styleName="flipper">
          <div styleName="front">
            <div styleName="header">
              <div styleName="city">
                <div styleName="name">{city}</div>
                <div styleName="desc">{description}</div>
              </div>
              <div styleName="clock">{timeString}</div>
            </div>

            <div styleName="content">
              <div styleName="current">
                <div styleName="currentleft">
                  <div styleName="currenthumidity">
                    Humidity: {humidity}
                  </div>
                  <div styleName="currentwind">
                    <i className="wi wi-strong-wind"></i>
                    10mph
                  </div>
                </div>
                <div styleName="currenticon">
                  <i className={iconClass}></i>
                </div>
                <div styleName="currentright">
                  <div styleName="currenttemp">
                    {temp}°F
                  </div>
                  <div styleName="currentdate">
                    {dateString}
                  </div>
                </div>
              </div>
              <div styleName="forecast">
                {forecastList.map((t, index) => (
                  <div key={index} styleName="forecastbox">
                    <div>{t.day}</div>
                    <div styleName="forecastboxcondition">{t.conditions}</div>
                    <div>{t.tempHigh}/{t.tempLow}</div>
                    <div styleName="forecastboxicon">
                      <i className={t.iconClass}></i>
                    </div>
                  </div>
                  )
                )}
              </div>
            </div>
          </div>


          <div styleName="back">
            <input
              value={this.state.searchText}
              onChange={this.handleChange}
            />
            <button onClick={this.handleSubmit}>Search</button>
          </div>
        </div>
      </div>
    )
  }
}

WeatherComponent.propTypes = {
  city: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  humidity: React.PropTypes.string.isRequired,
  temp: React.PropTypes.number.isRequired,
  iconClass: React.PropTypes.string.isRequired,
  timeString: React.PropTypes.string.isRequired,
  dateString: React.PropTypes.string.isRequired,
  shouldFetch: React.PropTypes.bool.isRequired,
  forecastList: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps)(CSSModules(WeatherComponent, styles))
