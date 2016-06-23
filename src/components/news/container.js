import React from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { searchNewsAction } from './actions'
import styles from './news.scss'
import { name } from './__init__'

const mapStateToProps = (state) => {
  const model = state[name]
  const {
    shouldFetch,
    news
    } = model

  return {
    shouldFetch,
    news
  }
}

class NewsComponent extends React.Component {
  componentDidMount() {
    const { dispatch, shouldFetch } = this.props
    if(shouldFetch) {
      dispatch(searchNewsAction())
    }
  }

  render() {
    const {
      news
      } = this.props

    return (
      <div styleName="container">
        {news.map((t, index) => (
          <div key={index} styleName="news-card">
            <a href={t.link} target="blank">
              <img src={t.imgSrc} alt={index} />
              <h3>{t.title}</h3>
            </a>
          </div>
        ))}
      </div>
    )
  }
}

NewsComponent.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  shouldFetch: React.PropTypes.bool.isRequired,
  news: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps)(CSSModules(NewsComponent, styles))
