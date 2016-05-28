import React from 'react'

export const TodoItemComponent = (props) => (
  <div key={props.key}>{props.text}</div>
)

TodoItemComponent.propTypes = {
  key: React.PropTypes.string.isRequired,
  text: React.PropTypes.string.isRequired
}
