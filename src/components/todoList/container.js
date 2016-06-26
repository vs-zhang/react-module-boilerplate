import React from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'
import { name } from './__init__'
import * as todoItem from '../todoItem'
import styles from './todoList.scss'
import CSSModules from 'react-css-modules'

const initialState = {
  inputText: ''
}

class TodoListComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value })
  }

  handleSubmit(e) {
    if (e.keyCode === 13 || e.type === 'click') {
      if (this.state.inputText.trim()) {
        this.props.add(this.state.inputText)
        this.setState(initialState)
      }
    }
  }

  render() {
    return (
      <div styleName="container">
        <div styleName="header">
        </div>

        <div styleName="content">
          <div styleName="todo-input">
            <div styleName="todo-status"></div>
            <div styleName="todo-content">
              <input
                value={this.state.inputText}
                onKeyDown={this.handleSubmit}
                styleName="input"
                onChange={this.handleChange}
                placeholder="What needs to be done"
              />
            </div>
          </div>


          {this.props.model.map((t, index) => (
            <div styleName="todo-item" key={index}>
              <div styleName="todo-status">
                <input styleName="todo-status-checkbox" type="checkbox" />
              </div>
              <div styleName="todo-content">
                <todoItem.TodoItemComponent text={t} key={index} />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { model: state[name] }
)

const mapDispatchToProps = (dispatch) => (
  bindActionCreators(actions, dispatch)
)

TodoListComponent.propTypes = {
  model: React.PropTypes.array.isRequired,
  add: React.PropTypes.func.isRequired
}

export default connect(mapStateToProps, mapDispatchToProps)(CSSModules(TodoListComponent, styles))
