import React from 'react'

export default class TodoItemComponent extends React.Component {
  render() {
    return (
      <div>{this.props.text}</div>
    )
  }
}