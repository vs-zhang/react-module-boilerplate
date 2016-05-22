import React, {Component} from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actions from './actions'
import { name } from './__init__'

let initialState = {
  inputText: ''
};

class TodoListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = initialState;
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({inputText: e.target.value});
  }

  handleSubmit() {
    if (this.state.inputText.trim()) {
      this.props.add(this.state.inputText);
      this.setState(initialState);
    }
  }

  render() {
    return (
      <div>
        <input value={this.state.inputText} style={{ width: '200px' }} onChange={this.handleChange}/>
        <button onClick={this.handleSubmit} style={{ width: '200px' }}>Add</button>
        { this.props.todos.map(
          t => <div key={t}>{t}</div>
        ) }
      </div>
    );
  }
}

var mapStateToProps = function (state) {
  return state;
};

export default connect(mapStateToProps, dispatch => bindActionCreators(actions, dispatch))(TodoListComponent);
