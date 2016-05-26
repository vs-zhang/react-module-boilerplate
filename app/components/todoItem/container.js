import React from 'react'

export default class TodoItemComponent extends React.Component {
  render() {
    return (
      <div key={this.props.key}>{this.props.text}</div>
    )
  }
}