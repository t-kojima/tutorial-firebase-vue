import React, { Component } from 'react'
import TodoList from './TodoList'
import InputForm from './InputForm'
import './App.css'
import firebase from 'firebase/app'
import 'firebase/database'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: []
    }
  }
  componentDidMount() {
    firebase
      .database()
      .ref('todos')
      .once('value')
      .then(snapshot => {
        this.setState({ todos: Object.values(snapshot.val()) })
      })
  }
  render() {
    return (
      <div className="app">
        <section className="hero container is-info">
          <div className="hero-body">
            <h1 className="title">ToDo Application.</h1>
          </div>
        </section>
        <section className="container">
          <InputForm />
          <TodoList todos={this.state.todos} />
        </section>
      </div>
    )
  }
}
