import React from 'react'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import { searchNewsAction } from './actions'
import styles from './news.scss'

class NewsComponent extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props
    dispatch(searchNewsAction())
  }

  render() {
    return (
      <div styleName="container">
        News
      </div>
    )
  }
}

NewsComponent.propTypes = {
  dispatch: React.PropTypes.func.isRequired
}

export default connect()(CSSModules(NewsComponent, styles))
