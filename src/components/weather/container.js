import React from 'react'
import { connect } from 'react-redux'
import { searchWeatherAction, updateTimeAction } from './actions'
import { name } from './__init__'
import CSSModules from 'react-css-modules'
import styles from './weather.scss'
import classNames from 'classnames/bind'
import closeIcon from '../../assets/icons/cross-thin.svg'
const cx = classNames.bind(styles)

const mapStateToProps = (state) => {
  const model = state[name]

  const {
    city,
    description,
    humidity,
    temp,
    forecastList,
    dateString,
    timeString,
    icon,
    shouldFetch
    } = model

  return {
    city,
    description,
    humidity,
    temp,
    forecastList,
    dateString,
    timeString,
    icon,
    shouldFetch
  }
}

const initialState = {
  searchText: '',
  isFlip: false
}

class WeatherComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = initialState
    this.handleChange = ::this.handleChange
    this.handleSubmit = ::this.handleSubmit
    this.getImageUrl = ::this.getImageUrl
    this.flipCard = ::this.flipCard
  }

  componentDidMount() {
    const { dispatch, shouldFetch } = this.props
    if (shouldFetch) {
      dispatch(searchWeatherAction(this.props.city))
    }
    window.setInterval(() => {
      dispatch(updateTimeAction())
    }, 1000)
  }

  getImageUrl(icon = 'unknown') {
    return require(`../../assets/images/weather_icons/${icon}.png`)
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

  flipCard() {
    this.setState({ isFlip: !this.state.isFlip })
  }

  render() {
    const {
      city,
      description,
      humidity,
      temp,
      forecastList,
      timeString,
      dateString,
      icon
      } = this.props

    const containerClass = cx({
      container: true,
      hover: this.state.isFlip
    })

    return (
      <div className={containerClass}>
        <div styleName="flipper">
          <div styleName="front">
            <div styleName="header">
              <div styleName="city">
                <div styleName="name">
                  {city}
                  <i onClick={this.flipCard} className="fa fa-pencil-square-o" styleName="edit-icon"></i>
                </div>
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
                  <div>
                    <img styleName="currentimage" src={this.getImageUrl(icon)} alt={icon}/>
                  </div>
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
                      <img
                        styleName="forecastboximage"
                        src={this.getImageUrl(t.icon)}
                        alt={t.icon}
                      />
                    </div>
                  </div>
                  )
                )}
              </div>
            </div>
          </div>


          <div styleName="back">
            <div styleName="close-icon">
              <img src={closeIcon} onClick={this.flipCard} alt="close icon" />
            </div>
            <div styleName="search-form">
              <input
                placeholder="zipcode"
                value={this.state.searchText}
                onChange={this.handleChange}
              />
              <button styleName="searchBtn" onClick={this.handleSubmit}>Search</button>
            </div>
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
  icon: React.PropTypes.string.isRequired,
  timeString: React.PropTypes.string.isRequired,
  dateString: React.PropTypes.string.isRequired,
  shouldFetch: React.PropTypes.bool.isRequired,
  forecastList: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps)(CSSModules(WeatherComponent, styles))
