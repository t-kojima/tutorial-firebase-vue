import React, { Component } from 'react'

export default class Todo extends Component {
  render() {
    console.log(this.props)
    const className = 'undone'
    const link = this.props.done ? 'Undo' : 'Completed'
    return (
      <li className={className}>
        <nav className="panel">
          <div className="panel-heading">
            <p>
              {this.props.id}: {this.props.title}
            </p>
          </div>
          <div className="panel-block">
            <p>{this.props.description}</p>
          </div>
          <div className="panel-block">
            <a href="">{link}</a>
          </div>
        </nav>
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
