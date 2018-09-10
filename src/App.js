import React, { Component } from 'react';
import TodoList from './TodoList';
import InputForm from './InputForm';
import './App.css';

export default class App extends Component {
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
          <TodoList />
        </section>
      </div>
    );
  }
}
