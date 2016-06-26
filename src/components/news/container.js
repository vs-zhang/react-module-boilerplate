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
    news,
    page
    } = model

  return {
    shouldFetch,
    news,
    page
  }
}

class NewsComponent extends React.Component {
  constructor(props) {
    super(props)
    this.loadNews = ::this.loadNews
  }

  componentDidMount() {
    const { dispatch, shouldFetch } = this.props
    if(shouldFetch) {
      dispatch(searchNewsAction())
    }
  }

  loadNews() {
    const { dispatch, page } = this.props
    console.log(page)
    dispatch(searchNewsAction(page + 1))
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
            </a>
            <div styleName="news-content">
              <h3><a href={t.link} target="blank">{t.title}</a></h3>
              <span>{t.by}</span>
              <p>{t.desc}</p>
            </div>
          </div>
        ))}

        <div styleName="load-more-btn">
          <button onClick={this.loadNews}>Load more</button>
        </div>
      </div>
    )
  }
}

NewsComponent.propTypes = {
  dispatch: React.PropTypes.func.isRequired,
  shouldFetch: React.PropTypes.bool.isRequired,
  page: React.PropTypes.number.isRequired,
  news: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps)(CSSModules(NewsComponent, styles))
