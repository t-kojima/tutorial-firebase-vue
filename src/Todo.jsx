import React, { Component } from 'react';
import { firebaseDb } from './firebase';

export default class Todo extends Component {
  constructor() {
    super();
    this.handleCheck = this.handleCheck.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleCheck() {
    firebaseDb.ref(`todos/${this.props.id}`).update({
      checked: !this.props.checked,
    });
  }

  handleDelete() {
    firebaseDb.ref(`todos/${this.props.id}`).remove();
  }

  render() {
    return (
      <li className="todo">
        <nav className="panel">
          <div className="panel-heading">
            <p>{this.props.title}</p>
          </div>
          <div className="panel-block">
            <label className="checkbox">
              <input
                type="checkbox"
                onChange={this.handleCheck}
                checked={this.props.checked}
              />
              {this.props.description}
            </label>
          </div>
          <div className="panel-block">
            {this.props.checked && (
              <button className="button is-link" onClick={this.handleDelete}>
                Delete
              </button>
            )}
          </div>
        </nav>
      </li>
    );
  }
}
