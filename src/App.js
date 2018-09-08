import React, { Component } from 'react';
import TodoList from './TodoList';
import InputForm from './InputForm';
import './App.css';
import { firebaseDb } from './firebase';

export default class App extends Component {
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
    );
  }
}
