import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    console.log(this.props)
    const className = 'undone'
    const link = this.props.done ? 'Undo' : 'Completed'
    return (
      <li className={className}>
        <span>{this.props.id}</span>
        <span>{this.props.title}</span>
        <a href="">{link}</a>
        <p>{this.props.description}</p>
      </li>
    )
  }
}

// export default () => (
//   <li className="undone">
//     <span>{this.props.id}</span>
//     <span>{this.props.title}</span>
//     <a href="">{this.props.done ? 'Undo' : 'Completed'}</a>
//     <p>{this.props.description}</p>
//   </li>
// )
