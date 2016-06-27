import React from 'react'
import { connect } from 'react-redux'
import { changeTodoStatusAction } from '../todoList/actions'
import styles from './todoItem.scss'
import CSSModules from 'react-css-modules'
import classNames from 'classnames/bind'
const cx = classNames.bind(styles)

class TodoItemComponent extends React.Component {
  handleTodoStatus(index) {
    const { dispatch } = this.props
    dispatch(changeTodoStatusAction(index))
  }

  render() {
    const { name, index, isDone } = this.props
    const contentClass = cx({
      'todo-content': true,
      done: isDone
    })
    return (
      <div styleName="todo-item" key={index}>
        <div styleName="todo-status">
          <input styleName="todo-status-checkbox" type="checkbox" checked={isDone}
                 onChange={() => this.handleTodoStatus(index)}/>
        </div>
        <div className={contentClass}>
          <div>{name}</div>
        </div>
      </div>
    )
  }
}

TodoItemComponent.propTypes = {
  name: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
  isDone: React.PropTypes.bool.isRequired,
  dispatch: React.PropTypes.func.isRequired
}

export default connect()(CSSModules(TodoItemComponent, styles))
