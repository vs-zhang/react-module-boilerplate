import React from 'react'
import { connect } from 'react-redux'
import { name } from './__init__'
import { addTodoAction, changeTodoStatusAction } from './actions'
import styles from './todoList.scss'
import CSSModules from 'react-css-modules'
import * as todoItem from '../todoItem'
const initialState = {
  inputText: ''
}

class TodoListComponent extends React.Component {

  constructor(props) {
    super(props)
    this.state = initialState
    this.handleChange = ::this.handleChange
    this.handleSubmit = ::this.handleSubmit
  }

  handleChange(e) {
    this.setState({ inputText: e.target.value })
  }

  handleSubmit(e) {
    if (e.keyCode === 13) {
      if (this.state.inputText.trim()) {
        const { dispatch } = this.props
        dispatch(addTodoAction(this.state.inputText))
        this.setState(initialState)
      }
    }
  }

  render() {
    const { todos } = this.props
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

          {todos.map((t, index) => (
            <todoItem.TodoItemComponent index={index} name={t.name} isDone={t.isDone} key={index} />
          ))}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { todos: state[name] }
)

TodoListComponent.propTypes = {
  todos: React.PropTypes.array.isRequired
}

export default connect(mapStateToProps)(CSSModules(TodoListComponent, styles))
