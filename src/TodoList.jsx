import React, { Component } from 'react';
import Todo from './Todo';
import { firebaseDb } from './firebase';

export default class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }
  componentDidMount() {
    firebaseDb
      .ref('todos')
      .on('value', snapshot => this.setState({ todos: snapshot.val() || [] }));
  }
  render() {
    return (
      <ul>
        {Object.entries(this.state.todos).map(([key, value]) => (
          <Todo key={key} id={key} {...value} />
        ))}
      </ul>
    );
  }
}
