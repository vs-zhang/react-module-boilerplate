import React from 'react'

export const TodoItemComponent = (props) => (
  <div>{props.text}</div>
)

TodoItemComponent.propTypes = {
  text: React.PropTypes.string.isRequired
}
