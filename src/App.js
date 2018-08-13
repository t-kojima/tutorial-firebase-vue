import React, { Component } from 'react'
import logo from './logo.svg'
import TodoList from './TodoList'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      todos: [
        {
          id: 1,
          title: 'Hello React',
          description: 'React始めました',
          done: false
        },
        {
          id: 2,
          title: 'Hello Redux',
          description: 'うそです',
          done: false
        }
      ]
    }
  }
  render() {
    return (
      <div className="app">
        <h1>ToDo Application.</h1>
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

// export default () => (
//   <div className="App">
//     <header className="App-header">
//       <img src={logo} className="App-logo" alt="logo" />
//       <h1 className="App-title">Welcome to React</h1>
//     </header>
//     <p className="App-intro">
//       To get started, edit <code>src/App.js</code> and save to reload.
//     </p>
//   </div>
// )
