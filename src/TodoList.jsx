import React, { Component } from 'react'
import { firebaseDb } from './firebase'
import Todo from './Todo'

export default class TodoList extends Component {
  render() {
    return (
      <ul>
        {this.props.todos.map(todo => {
          console.log(todo)
          return <Todo key={todo.id} {...todo} />
        })}
      </ul>
    )
  }
}
