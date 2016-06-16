import React from 'react'
import { connect } from 'react-redux'
import { fetchWeatherDataAction } from './actions'
import { name } from './__init__'
import styles from './weather.scss'

class WeatherComponent extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(fetchWeatherDataAction())
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
      <div className={styles.container}>
        <div className={styles.header}>
          <div className={styles.city}>
            <div className={styles.name}>{city}</div>
            <div className={styles.desc}>{description}</div>
          </div>
          <div className={styles.clock}>{timeString}</div>
        </div>

        <div className={styles.content}>
          <div className={styles.current}>
            <div className={styles.currentleft}>
              <div className={styles.currenthumidity}>
                Humidity: {humidity}
              </div>

              <div className={styles.currentwind}>
                <i className="wi wi-strong-wind"></i>
                10mph
              </div>
            </div>

            <div className={styles.currenticon}>
              <i className={iconClass}></i>
            </div>

            <div className={styles.currentright}>
              <div className={styles.currenttemp}>
                {temp}°F
              </div>

              <div className={styles.currentdate}>
                {dateString}
              </div>
            </div>

          </div>

          <div className={styles.forecast}>
            {forecastList.map((t, index) => (
              <div key={index} className={styles.forecastbox}>
                <div>{t.day}</div>
                <div className={styles.forecastboxcondition}>{t.conditions}</div>
                <div>{t.tempHigh}/{t.tempLow}</div>

                <div className={styles.forecastboxicon}>
                  <i className={t.iconClass}></i>
                </div>
              </div>
              )
            )}
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
  forecastList: React.PropTypes.array.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

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
  return {
    city,
    description,
    humidity,
    temp,
    iconClass,
    forecastList,
    dateString,
    timeString
  }
}

export default connect(mapStateToProps)(WeatherComponent)
