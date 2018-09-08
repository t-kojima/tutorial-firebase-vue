import React, { Component } from 'react';
import Todo from './Todo';

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {Object.entries(this.props.todos).map(([key, value]) => (
          <Todo key={key} id={key} {...value} />
        ))}
      </ul>
    );
  }
}
