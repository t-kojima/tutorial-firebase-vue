import React, { Component } from 'react'

export default class Todo extends Component {
  constructor(props){
    super(props)
    this.state = {
      checked: false
    }
  }
  onChange() {
    console.log(this)
  }
  render() {
    const className = 'undone'
    const link = this.state.checked ? 'Undo' : 'Completed'
    return (
      <li className={className}>
        <nav className="panel">
          <div className="panel-heading">
            <p>
              {this.props.id}: {this.props.title}
            </p>
          </div>
          <div className="panel-block">
            <label className="checkbox">
              <input type="checkbox" onChange={this.onChange} checked={this.state.checked}/>
              {this.props.description}
            </label>
          </div>
          <div className="panel-block">
            <a href="">{link}</a>
          </div>
        </nav>
      </li>
    )
  }
}
